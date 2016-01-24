(ns puzzle-roguelike.components
  (:require [cljs.core.async :as async :refer [put!]]
            [puzzle-roguelike.map :as map]
            [puzzle-roguelike.state :as state]
            [puzzle-roguelike.images :as img :refer [sprite-image-size player]])
  (:require-macros [puzzle-roguelike.macros :as rm :refer [handler-fn]]))

(def tile-size 40)
(def img-size [16 16])

(def scale-factor (/ tile-size (get sprite-image-size 0)))

(defn- sprite-to-string
  [[x y]]
  (str x "px " y "px"))


(defn tile-view [x y tile enemy item player? out-chan]
  (let [[img-size-x img-size-y] sprite-image-size
        entity (or enemy item tile)
        symbol (:symbol entity)
        color (:color entity)
        sprite (apply str (map #(str % "px ") (:sprite entity)))]
    [:div.tile.noselect.scaled-image
     {:style {:background (str "url(roguelike_tileset.png) " (sprite-to-string (:sprite tile)) " black")
              :transform (str "scale(" scale-factor ")")
              :color (or color "antiquewhite")
              :top (* y tile-size)
              :left (* x tile-size)
              :height img-size-y
              :width img-size-x}
      :on-click (handler-fn (put! out-chan {:type :move :position [x y]}))}
     [:div.scaled-image.sprite
      {:style {:background (str "url(roguelike_tileset.png) " sprite)
               ;;:transform (str "scale(" scale-factor ")")
               :width img-size-x
               :height img-size-y}}]
     ]))


(defn player-view [[x y] out-chan]
  (let [[img-size-x img-size-y] sprite-image-size
        pos-x (* x tile-size)
        pos-y (* y tile-size)
        sprite (sprite-to-string (:sprite player))]
    [:div.player.tile.noselect {:style {:top pos-y
                                        :left pos-x
                                        :width tile-size
                                        :height tile-size}
                                :on-click (handler-fn (put! out-chan {:type :stairs-down :position [x y]}))}
     [:div.tile.scaled-image {:style {:background (str "url(roguelike_tileset.png) " sprite)
                         :transform (str "scale(" scale-factor ")")
                         :width img-size-x
                         :height img-size-y}}] "@"]))



(defn map-view [tiles enemies items position out-chan]  ;; FIXME: get rid of enemies and items here, make a function that just returns the first of (enemy/item/tile) at [x y]
  (let [[width height] map/map-size
        [player-x player-y] position
        pixel-position [(* player-x tile-size) (* player-y tile-size)]]
    [:div.map {:style {:height (* tile-size height) :width (* tile-size width) :flex-basis (* tile-size width)}}
     (for [y (range height) x (range width)
           :let [tile (map/get-tile-at tiles x y)
                 enemy (get enemies [x y])
                 item (get items [x y])
                 item? (contains? items [x y])]]
       (cond
         ;; enemy?
         ;; ^{:key (str "E" x ":" y)}
         ;; [:div.tile {:style {:color "red" :background "black" :top (* y tile-size) :left (* x tile-size) :width tile-size :height tile-size}} "E"]

         ;;item?
         ;;^{:key (str "I" x ":" y)}
         ;;[:div.tile {:style {:color "red" :top (* y tile-size) :left (* x tile-size) :width tile-size :height tile-size}} "I"]

         :else
         ^{:key (str "T" x ":" y)}
         [tile-view x y tile enemy item (= position [x y]) out-chan])
       )
     [player-view position out-chan]
     ]))


(defn- stat [header value]
  [:div
   [:span.stat-header header]
   [:span.stat-value value]])

(defn stats-view [player]
  (let []
    [:div.stats
     [stat "hp" (str (:hp player) " / " (:max-hp player))]
     [stat "atk" (:atk player)]
     [stat "def" (:def player)]
     [stat "food" (:food player)]
     [stat "xp" (:xp player)]
     [stat "level" (:level player)]
     [stat "gold" (:gold player)]

     [:img {:src "roguelike_tileset.png"}]
     ]))


(defn- message [message idx]
  (let []
    ^{:key idx}[:div.message {:style {:opacity idx}} message]))

(defn message-log [messages]
  (let [msg-count (count messages)
        get-opacities (fn [n] (/ n (- msg-count 1)))]
    [:div.message-log
     (map message messages (map get-opacities (range msg-count 0 -1)))]))

(defn game-over []
  (let []
    [:div "Game Over"
     [:button {:on-click (handler-fn (state/initialize!))} "try again"]
     ]))

(defn game-play
  [events-chan player tiles enemies items position messages]
  [:div
   [:div.game-wrapper
    [map-view tiles enemies items position events-chan]
    [stats-view player]]
   [message-log messages]])
