(ns puzzle-roguelike.components
  (:require [cljs.core.async :as async :refer [put!]]
            [puzzle-roguelike.map :as map])
  (:require-macros [puzzle-roguelike.macros :as rm :refer [handler-fn]]))

(def tile-size 50)



(defn tile-view [tile x y out-chan]
  [:div.tile.noselect {:style {:background (:background tile)
                               :color "antiquewhite"
                               :top (* y tile-size)
                               :left (* x tile-size)
                               :height tile-size
                               :width tile-size}
                       :on-click (handler-fn (put! out-chan {:type :move :position [x y]}))}
   (:symbol tile)])

(defn player-view [[pos-x pos-y]]
  [:div.player.tile.noselect {:style {:top pos-y
                                      :left pos-x
                                      :width tile-size
                                      :height tile-size}}
   "@"])

(defn map-view [tiles position out-chan]
  (let [[width height] map/map-size]
    [:div.map {:style {:height (* tile-size height) :width (* tile-size width) :flex-basis (* tile-size width)}}
     (for [y (range height) x (range width)
           :let [tile (map/get-tile-at tiles x y)]]
       ^{:key (str x ":" y)} [tile-view tile x y out-chan])
       [player-view position]
     ]))

(defn- stat [header value]
  [:div
   [:span.stat-header header]
   [:span.stat-value value]])

(defn stats-view [player]
  (let []
    [:div.stats
     [stat "hp: " (str (:hp player) " / " (:max-hp player))]
     [stat "atk: " (:atk player)]
     [stat "def: " (:def player)]
     [stat "food: " (:food player)]
     [stat "xp: " (:xp player)]
     [stat "gold: " (:gold player)]
     ]))

(defn- message [message idx]
  (let []
    ^{:key idx}[:div.message {:style {:opacity idx}} message]))

(defn message-log [messages]
  (let [msg-count (count messages)
        get-opacities (fn [n] (/ n (- msg-count 1)))]
    [:div.message-log
     (map message messages (map get-opacities (range msg-count 0 -1)))]))
