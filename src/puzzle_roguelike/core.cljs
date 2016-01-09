(ns puzzle-roguelike.core
  (:require [reagent.core :as reagent]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [puzzle-roguelike.state :as state :refer [game-state]]
            [puzzle-roguelike.map :as map]
            [puzzle-roguelike.animations :as animations])
  (:require-macros [cljs.core.async.macros :as am :refer [go-loop]]))

(enable-console-print!)

(def events-chan (chan))

(def tile-size 50)

(defn initialize! []
  (reset! game-state (state/get-new-state)))


(defn subtract-food
  "Subtracts the amount of food from the current player state"
  [state amount]
  (let [player (:player state)]
    (assoc-in state [:player :food] (- (:food player) amount))))

(defn move-player
  "Returns a new state where the player has moved to the specified position"
  [state x y] ;; TODO: alter the state here, rename to move-player!
  (let [[pos-x pos-y] (:position state)
        tile-pos [(Math/floor (/ pos-x tile-size)) (Math/floor (/ pos-y tile-size))]]
    (if (map/valid-move? x y tile-pos)
      (-> 
       (assoc state :position [(* tile-size x) (* tile-size y)])
       (subtract-food 1))
      state)))


(defmulti dispatch-event #(:type %))

(defmethod dispatch-event :move [data]
  (let [[x y] (:position data)
        can-move? #(true)]
    (reset! game-state (-> @game-state
                           (move-player x y)))))

(defn run-event-loop
  "Listen to events on in-chan and dispatch accordingly"
  [in-chan]
  (go-loop []
    (let [data (<! in-chan)]
      (print data)
      (cond
        (:type data)
        (dispatch-event data))
      (recur))))


;; Components
(defn tile-view [tile x y]
  [:div.tile.noselect {:style {:background (:background tile)
                               :color "antiquewhite"
                               :top (* y tile-size)
                               :left (* x tile-size)
                               :height tile-size
                               :width tile-size}
                       :on-click #(async/put! events-chan {:type :move :position [x y]})}
   (:symbol tile)])

(defn player-view [[pos-x pos-y]]
  [:div.player.tile.noselect {:style {:top pos-y
                                      :left pos-x
                                      :width tile-size
                                      :height tile-size}}
   "@"])

(defn map-view [tiles position]
  (let [[width height] map/map-size]
    [:div.map {:style {:height (* tile-size height) :width (* tile-size width) :flex-basis (* tile-size width)}}
     (for [y (range height) x (range width)
           :let [tile (map/get-tile-at tiles x y)]]
       ^{:key (str x ":" y)} [tile-view tile x y])
       [player-view position]
     ]))

(defn stats-view [player]
  (let []
    [:div.stats
     [:div (str "hp: " (:hp player))]
     [:div (str "atk: " (:atk player))]
     [:div (str "def: " (:def player))]
     [:div (str "food: " (:food player))]
     [:div (str "xp: " (:xp player))]
     [:div (str "gold: " (:gold player))]
     ]))

(defn game-container []
  (run-event-loop events-chan)
  (animations/start-game-loop!)
  (fn []
    (let [player (:player @game-state)
          tiles (:tiles @game-state)
          position (:position @game-state)]
      [:div.container
       [map-view tiles position]
       [stats-view player]
       [:button {:on-click #(initialize!)} "Reset map"]
       ])))



(reagent/render-component [game-container]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
