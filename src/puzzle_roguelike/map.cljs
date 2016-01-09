(ns puzzle-roguelike.map
  )

(def map-size [10 10])


(def tile-data [[:bounds "X"  "red"    0]
                [:empty  "."  "black"  8]  ;normal movement, 1 food
                [:water  "~"  "blue"   1]  ;maybe can't cross? not sure yet
                [:rocks  "*"  "gray"   2]  ;2 food
                ])

(def entity-data [[:coin  "$"  "yellow"  6]
                  [:hp    "H"  "red"     1]
                  [:food  "F"  "brown"   2]])

(def enemy-data [[:bat    "b"  "darkblue"  1  2   :none]
                 [:snake  "s"  "green"     2  10  {:poison 2}]])


(defrecord Tile [key symbol background weight])
(defrecord Enemy [key symbol color level hp effect])


(defn get-enemy-records []
  (map #(apply ->Enemy %) enemy-data))

(defn get-tile-records []
  (map #(apply ->Tile %) tile-data))

(defn get-random-tile [tiles]
  (let [weights (rest (reductions #(+ %1 (:weight %2)) 0 tiles))
        rand (rand-int (last weights))]
    (nth tiles (count (take-while #(<= % rand) weights)))))

(defn get-random-map
  "Returns a random map"
  [tiles]
  (let [[width height] map-size
        random-tile #(get-random-tile tiles)
        random-row #(vec (repeatedly width random-tile))]
    (vec (repeatedly height random-row))))

(defn get-tile-at
  "Returns the tile at x,y or the first (out-of-bounds) tile if invalid."
  [tiles x y]
  (get-in tiles [y x] (first (get-tile-records))))



(defn distance [[x1 y1] [x2 y2]]
  (+ (Math/abs (- x1 x2)) (Math/abs (- y1 y2))))

(defn find-stairs-location
  "Returns the location of the stairs to the next level given the starting position of the player"
  [start-x start-y]
  (let [possible-tiles []]
    ))


(defn valid-move?
  "True if the given coordinates are a valid move from the current player position"
  [x y [pos-x pos-y]]
  (= 1 (distance [x y] [pos-x pos-y])))
