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
  (reset! game-state (state/get-new-state)))


(defn display-message
  "Adds message to the message list in state"
  [state message]
  (update-in state [:messages] conj message))


(defn subtract-food
  "Subtracts the amount of food from the current player state"
  [state amount]
  (let [player (:player state)]
    (assoc-in state [:player :food] (- (:food player) amount))))

(defn move-player
  "Returns a new state where the player has moved to the specified position"
  [state x y]
  (let [[pos-x pos-y] (:position state)
        tile-pos [pos-x pos-y]
        move-to [x y]]
    (if (map/valid-move? x y tile-pos)
      (-> state
          (assoc :position move-to)
          (subtract-food 1)
          (display-message (str "Moved to " x ", " y)))
      (display-message state (str "Can't move there!")))))



;; Event handlers

(defmulti dispatch-event "Returns a new state where the specified action has taken place"  #(:type %2))

(defmethod dispatch-event :move
  [state data]
  (let [[x y] (:position data)
        has-enemy? #(false)
        has-item? #(false)
        stairs-down? #()
        can-move? (and (not has-enemy?) (not has-item?))]
    (-> state
        (move-player x y))))

(defmethod dispatch-event :attack
  [state data]
  (let [[x y] (:position data)]
        ))

(defmethod dispatch-event :get-item
  [state data]
  )


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
          position (:position @game-state)
          messages (take 8 (:messages @game-state))]
      [:div.container
       [:div.title "this game has no title"]
       [:div.game-wrapper
        [c/map-view tiles position events-chan]
        [c/stats-view player]]
       [c/message-log messages]
       [:button {:on-click (handler-fn (initialize!))} "Reset map"]
       ])))



(reagent/render-component [game-container]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
