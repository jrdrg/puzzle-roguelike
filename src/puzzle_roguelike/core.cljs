(ns puzzle-roguelike.core
  (:require [reagent.core :as reagent]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [puzzle-roguelike.state :as state :refer [game-state initialize!]]
            [puzzle-roguelike.map :as map]
            [puzzle-roguelike.animations :as animations]
            [puzzle-roguelike.components :as c :refer [tile-size]])
  (:require-macros [cljs.core.async.macros :as am :refer [go-loop go]]
                   [puzzle-roguelike.macros :as rm :refer [handler-fn]]))

(enable-console-print!)

(def events-chan (chan))


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
        item? (contains? (:items state) [x y])
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
        (do
          (put! out-chan {:type :get-item :position [x y]})
          (move-player state x y)))
      
      (let [get-description #(:description (map/get-tile-at map x y))]
        (display-message state (str "you see: " (get-description))))
      )))

(defn remove-enemy-if-dead
  [state enemy [x y] dmg]
  (let [after-dmg (update-in state [:enemies [x y] :hp] - dmg)]
    (if (<= (get-in after-dmg [:enemies [x y] :hp]) 0)
      (display-message (update-in state [:enemies] dissoc [x y]) "Defeated!")
      (display-message after-dmg (str "Hit " (:description enemy) " for " dmg))
      )))

(defn remove-item
  [state [x y]]
  (update-in state [:items] dissoc [x y]))

(defmethod dispatch-event :attack
  [state data]
  (let [[x y] (:position data)
        enemy (get (:enemies state) [x y])
        player-atk (get-in state [:player :atk])
        player-dmg (+ player-atk (rand-int player-atk))
        enemy-dmg (rand-int (:level enemy))]
    (go  ;; FIXME - dispatch-event should return a channel to support stuff like animation, etc
      (print (str "timeout 1000" enemy))
      (<! (async/timeout 3000))
      (print "done"))
    (-> state
        (remove-enemy-if-dead enemy [x y] player-dmg)
        ))
)
(defmethod dispatch-event :get-item
  [state data]
  (let [[x y] (:position data)
        item  (get (:items state) [x y])]
    (condp = (:key item)
      :coin
      (-> state
          (display-message "Money!")
          (update-in [:player :gold] + 1)
          (remove-item [x y]))

      :moneybag
      (-> state
          (display-message "$$$$$$$")
          (update-in [:player :gold] + 10)
          (remove-item [x y]))

      :atk
      (-> state
          (display-message "atk +")
          (update-in [:player :atk] + 1)
          (remove-item [x y]))

      :def
      (-> state
          (display-message "def +")
          (update-in [:player :def] + 1)
          (remove-item [x y]))

      :food
      (-> state
          (display-message "Food!")
          (update-in [:player :food] + 5)
          (remove-item [x y]))

      (remove-item (display-message state (str "you pick up the " (:description item))) [x y]))))

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


(defn dead?
  [state]
  (or (<= (get-in state [:player :food]) 0)
      (<= (get-in state [:player :hp]) 0)))

(defn check-for-next-state
  "Checks if the current ui/state should be updated (i.e. game over, new game, etc)"
  [state]
  (cond
    (dead? state)
    (assoc state :current-ui :game-over)

    :else
    state))



;; Main game event dispatcher

(defn run-event-loop
  "Main game event dispatcher. Listen to events on in-chan and dispatch accordingly"
  [in-chan]
  (go-loop []
    (let [data (<! in-chan)]
      (cond
        (:type data)
        (reset! game-state ;; dispatch-event should return a channel here
                (check-for-next-state (dispatch-event @game-state data))))
      (recur))))


(defn display-ui
   [player tiles enemies items position messages]
  (condp = (:current-ui @game-state)
    :main
    [c/game-play events-chan player tiles enemies items position messages]

    :game-over
    [c/game-over]))


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
       [display-ui player tiles enemies items, position messages]
       [:button {:on-click (handler-fn (initialize!))} "Reset game"]
       [:a.tileset-link {:href "http://makegames.tumblr.com/post/41267990744/before-spelunky-i-started-a-simple-little"} "Tileset images from here"]
       ])))



(reagent/render-component [game-container]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
