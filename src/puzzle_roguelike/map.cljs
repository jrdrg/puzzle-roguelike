(ns puzzle-roguelike.map
  )

(def map-size [10 10])


(def tile-keys  [:key :symbol :background :weight])

(def tile-data [[:bounds      "X"  "red"    0]
                [:stairs-down ">"  "white"  0]
                [:stairs-up   "<"  "white"  0]
                [:empty       "."  "black"  8]  ;normal movement, 1 food
                [:water       "~"  "blue"   1]  ;maybe can't cross? not sure yet
                [:rocks       "*"  "gray"   2]  ;2 food
                ])

(def entity-keys [:key :symbol :color :weight])

(def entity-data [[:coin  "$"  "yellow"  6]
                  [:hp    "H"  "red"     1]
                  [:food  "F"  "brown"   2]])


(def enemy-keys [:key :symbol :color :level :hp :effect])

(def enemy-data [[:bat    "b"  "darkblue"  1  2   :none]
                 [:snake  "s"  "green"     2  10  {:poison 2}]])





(defn keys-and-data
  [keys data]
  (map #(into (hash-map) (vec (map vector keys %))) data))

(defn enemy-map
  []
  (keys-and-data enemy-keys enemy-data))

(defn tile-map
  []
  (keys-and-data tile-keys tile-data))


(defn get-random-tile
  [tiles]
  (let [weights (rest (reductions #(+ %1 (:weight %2)) 0 tiles))
        rand (rand-int (last weights))]
    (nth tiles (count (take-while #(<= % rand) weights)))))

(defn get-random-map
  "Returns a random map"
  [tiles]
  (let [tiles-without-stairs (->> tiles (drop 3))
        [width height] map-size
        random-tile #(get-random-tile tiles-without-stairs)
        random-row #(vec (repeatedly width random-tile))]
    (vec (for [y (range height)]
           (vec (for [x (range width)
                      :let [tile (random-tile)]]
                  (assoc tile :position [x y])))))))
;; (vec (repeatedly height random-row))))

(defn get-tile-at
  "Returns the tile at x,y or the first (out-of-bounds) tile if invalid."
  [tiles x y]
  (assoc (get-in tiles [y x] (first (tile-map))) :position [x y]))



(defn distance
  [[x1 y1] [x2 y2]]
  (+ (Math/abs (- x1 x2)) (Math/abs (- y1 y2))))

(defn find-stairs-location
  "Returns the location of the stairs to the next level given the starting position of the player"
  [state start-x start-y]
  (let [tiles-list (flatten (:tiles state))
        empty? #(= :empty (:key %))
        far-enough? #(> (distance [start-x start-y] (:position %)) 5)
        filter-criteria #(and (empty? %) (far-enough? %))
        possible-tiles (filter filter-criteria tiles-list)]
    possible-tiles))


(defn valid-move?
  "True if the given coordinates are a valid move from the current player position"
  [x y [pos-x pos-y]]
  (= 1 (distance [x y] [pos-x pos-y])))
