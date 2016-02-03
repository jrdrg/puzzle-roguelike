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

(defn dmg-to-player
  [player dmg]
  (let [def (:def player)
        total-dmg (- dmg (rand-int def))]
    (Math.max 0 total-dmg)))

(defn handle-attack
  [state enemy [x y] dmg]
  (let [after-dmg (update-in state [:enemies [x y] :hp] - dmg)
        enemy-dmg (+ (:level enemy) (rand-int (:dmg enemy)))
        total-enemy-dmg (dmg-to-player (:player state) enemy-dmg)]
    (if (<= (get-in after-dmg [:enemies [x y] :hp]) 0)
      (-> state
          (display-message "Defeated!")
          (update-in [:enemies] dissoc [x y])
          (update-in [:player :xp] + (:level enemy)))
      (-> after-dmg
          (assoc-in [:player :cause-of-death] (:description enemy))
          (update-in [:player :hp] - total-enemy-dmg)
          (display-message (str "Hit " (:description enemy) " for " dmg))
          (display-message (str (:description enemy) " hits you for " total-enemy-dmg)))
      )))

(defn remove-item
  [state [x y]]
  (update-in state [:items] dissoc [x y]))



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
        (handle-attack enemy [x y] player-dmg)
        )))

(defn hp-up
  [hp amount max]
  (let []
    (Math.min max (+ hp amount))))

(defn heal-player
  [state]
  (let [amount (+ 1 (rand-int (/ (get-in state [:player :hp]) 5)))
        max-hp (get-in state [:player :max-hp])]
    (-> state
        (update-in [:player :hp] hp-up amount max-hp))))

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

      :hp
      (-> state
          (display-message "hp +")
          (heal-player)
          (remove-item [x y]))


      :food
      (-> state
          (display-message "Food!")
          (update-in [:player :food] + 5)
          (remove-item [x y]))

      (display-message state (str "there is a " (:description item))))))

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
  (let [zero? #(<= (get-in state %) 0)
        no-hp? (zero? [:player :hp])
        starved? (zero? [:player :food])
        dead? (or no-hp? starved?)]
    (cond
      starved?
      (-> state
          (assoc :current-ui :game-over)
          (assoc-in [:player :cause-of-death] "hunger"))

      no-hp?
      (-> state
          (assoc :current-ui :game-over))

      dead?
      (assoc state :current-ui :game-over)

      :else
      state)))



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
  [{:keys [player floor tiles enemies items position messages]}]
  (condp = (:current-ui @game-state)
    :main
    [c/game-play events-chan player floor tiles enemies items position (take 8 messages)]

    :game-over
    [c/game-over player floor]))


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
       [display-ui @game-state]
       ;; [:a.tileset-link {:href "http://makegames.tumblr.com/post/41267990744/before-spelunky-i-started-a-simple-little"} "Tileset images from here"]
       [:a.tileset-link {:href "http://oryxdesignlab.com/ultimate/"} "Tileset images from here"]
       ])))



(reagent/render-component [game-container]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
