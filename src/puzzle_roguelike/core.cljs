(ns puzzle-roguelike.core
  (:require [reagent.core :as reagent]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [puzzle-roguelike.state :as state :refer [game-state]]
            [puzzle-roguelike.map :as map]
            [puzzle-roguelike.animations :as animations]
            [puzzle-roguelike.components :as c :refer [tile-size]])
  (:require-macros [cljs.core.async.macros :as am :refer [go-loop]]
                   [puzzle-roguelike.macros :as rm :refer [handler-fn]]))

(enable-console-print!)

(def events-chan (chan))

(defn initialize! []
  (reset! game-state (state/create-initial-state)))


(defn display-message
  "Adds message to the message list in state"
  [state message]
  (update-in state [:messages] conj message))


(defn subtract-food
  "Subtracts the amount of food from the current player state"
  [state amount]
  (let [player (:player state)]
    (update-in state [:player :food] - amount)))

(defn move-player
  "Returns a new state where the player has moved to the specified position"
  [state x y]
  (let [current-pos (:position state)
        move-to [x y]]
    (if (map/valid-move? x y current-pos)
      (-> state
          (assoc :position move-to)
          (subtract-food 1)
          (display-message (str "Moved to " x ", " y)))
      (display-message state (str "Can't move there!")))))




;; Event handlers

(defmulti dispatch-event "Returns a new state where the specified action has taken place" (fn [state data] (:type data)))

(defmethod dispatch-event :move
  [state data]
  (let [out-chan events-chan
        [x y] (:position data)
        map (:tiles state)
        enemy? (contains? (:enemies state) [x y])
        item? false
        can-move? (and (not enemy?) (not item?))]
    (if (map/valid-move? x y (:position state))
      (cond
        (map/stairs-down? map x y)
        (do
          (-> state
              (move-player x y)
              (display-message "Stairs down - click to go to the next floor")))

        can-move?
        (-> state
            (move-player x y))

        enemy?
        (do
          (put! out-chan {:type :attack :position [x y]})
          state)

        item?
        state)
      (let [get-description #(:description (map/get-tile-at map x y))]
        (display-message state (str "you see: " (get-description))))
      )))

(defmethod dispatch-event :attack
  [state data]
  (let [[x y] (:position data)]
    (-> state
        (display-message "attacking..."))))

(defmethod dispatch-event :get-item
  [state data]
  state)

(defmethod dispatch-event :stairs-down
  [state data]
  (let [[x y] (:position data)
        map (:tiles state)
        next-floor (inc (:floor state))]
    (if (map/stairs-down? map x y)
      (-> state
          (assoc :floor next-floor)
          (display-message (str "You descend the stairs... [floor " next-floor "]" ))
          (state/new-level next-floor [x y]))
      state)))



(defn check-for-next-state
  "Checks if the current ui/state should be updated (i.e. game over, new game, etc)"
  [state]
  state)



;; Main game event dispatcher

(defn run-event-loop
  "Main game event dispatcher. Listen to events on in-chan and dispatch accordingly"
  [in-chan]
  (go-loop []
    (let [data (<! in-chan)]
      (cond
        (:type data)
        (reset! game-state
                (check-for-next-state (dispatch-event @game-state data))))
      (recur))))




(defn game-container
  "Main container for game elements. Starts animation and event loops on first render."
  []
  (run-event-loop events-chan)
  (animations/start-game-loop!)
  (fn []
    (let [player (:player @game-state)
          tiles (:tiles @game-state)
          enemies (:enemies @game-state)
          items (:items @game-state)
          position (:position @game-state)
          messages (take 8 (:messages @game-state))]
      [:div.container
       [:div.title "this game has no title"]
       [:div.game-wrapper
        [c/map-view tiles enemies items position events-chan]
        [c/stats-view player]]
       [c/message-log messages]
       [:button {:on-click (handler-fn (initialize!))} "Reset game"]
       [:img {:src "roguelike_tileset.png"}]
       [:a.tileset-link {:href "http://makegames.tumblr.com/post/41267990744/before-spelunky-i-started-a-simple-little"} "Tileset images from here"]
       ])))



(reagent/render-component [game-container]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
