(ns puzzle-roguelike.state
  (:require [reagent.core :as reagent :refer [atom]]
            [puzzle-roguelike.map :as map])) 


(def initial-game-state {:running? true
                         :current-ui :main
                         :messages ()
                         :tiles []
                         :position [0 0]
                         :time 0
                         :floor 1
                         :player {:hp 20
                                  :max-hp 20
                                  :atk 1
                                  :def 1
                                  :food 50
                                  :gold 0
                                  :xp 0
                                  :level 1}
                         :enemies {}  ;vectors as keys corresponding to positions = {[1 1] {:enemy-data {}}}
                         :items {}})

(defn new-level
  [state level start-position]
  (-> state
      (assoc :tiles (map/get-random-map (map/tile-map)))
      (assoc :position start-position)
      (update :tiles #(map/place-stairs-down % start-position))
      (map/add-enemies-to-map)
      (assoc :items {})))
  

(defn create-initial-state
  "Helper method to create a new initial state with any required random initialization"
  []
  (let [start-position [(rand-int 10) (rand-int 10)]]
    (-> initial-game-state
        (new-level 1 start-position))))

;; Main state atom
(defonce game-state (atom (create-initial-state)))
