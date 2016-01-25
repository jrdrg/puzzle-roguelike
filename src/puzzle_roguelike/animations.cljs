(ns puzzle-roguelike.animations
  (:require [reagent.core :as reagent :refer [atom]]
            [puzzle-roguelike.state :as state :refer [game-state]]))

(def last-ts (atom nil))
(def deg-180 Math.PI)
(def deg-90 (/ Math.PI 2))


(defn update! [delta]
  (let []
    (swap! game-state update-in [:player :food] #(Math/round (+ % 0.1)))))

(defn update-game-loop! [ts]
  (when (:running? @game-state)
    (let [delta (- ts (or @last-ts ts))]
      (update! delta)))
  (. js/window requestAnimationFrame update-game-loop!))

(defn start-game-loop! []
  (. js/window requestAnimationFrame update-game-loop!))
