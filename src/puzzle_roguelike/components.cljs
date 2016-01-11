(ns puzzle-roguelike.components
  (:require [cljs.core.async :as async :refer [put!]]
            [puzzle-roguelike.map :as map]))

(def tile-size 50)



(defn tile-view [tile x y out-chan]
  [:div.tile.noselect {:style {:background (:background tile)
                               :color "antiquewhite"
                               :top (* y tile-size)
                               :left (* x tile-size)
                               :height tile-size
                               :width tile-size}
                       :on-click #(put! out-chan {:type :move :position [x y]})}
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
