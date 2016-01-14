(ns puzzle-roguelike.state
  (:require [reagent.core :as reagent :refer [atom]]
            [puzzle-roguelike.map :as map])) 


(def initial-game-state {:running? true
                         :current-ui :main
                         :messages ()
                         :tiles []
                         :position [0 0]
                         :time 0
                         :player {:hp 20
                                  :max-hp 20
                                  :atk 1
                                  :def 1
                                  :food 50
                                  :gold 0
                                  :xp 0}
                         :enemies {}  ;vectors as keys corresponding to positions = {[1 1] {:enemy-data {}}}
                         :items {}})

(defn get-new-state
  "Helper method to create a new initial state with any required random initialization"
  []
  (-> initial-game-state
      (assoc :tiles (map/get-random-map (map/get-tile-records)))
      (assoc :position [0 0])
      (assoc :enemies {})
      (assoc :items {})))


;; Main state atom
(defonce game-state (atom (get-new-state)))
