(ns puzzle-roguelike.animations
  (:require [reagent.core :as reagent :refer [atom]]
            [puzzle-roguelike.state :as state :refer [game-state]]))

(def last-ts (atom nil))

(defn update! [delta]
  (let []
    (swap! game-state update-in [:player :food] + 0.1)))

(defn update-game-loop! [ts]
  (when (:running? @game-state)
    (let [delta (- ts (or @last-ts ts))]
      (update! delta)))
  (. js/window requestAnimationFrame update-game-loop!))

(defn start-game-loop! []
  (. js/window requestAnimationFrame update-game-loop!))
