(ns puzzle-roguelike.map
  (:require [puzzle-roguelike.images :as img :refer [sprite-coords]]))

(def map-size [10 10])


(def tile-keys  [:key :symbol :background :weight :description :sprite])

(def tile-data [[:bounds      "X"  "red"    0  "out of bounds"  (sprite-coords 7 0)]
                [:stairs-down ">"  "green"  0  "stairs down"    (sprite-coords 3 0)]
                [:stairs-up   "<"  "green"  0  "stairs up"      (sprite-coords 6 7)]
                [:empty       "."  "black"  8  "a floor"        (sprite-coords 1 0)] ;normal movement, 1 food
                [:water       "~"  "blue"   1  "water"          (sprite-coords 7 2)] ;maybe can't cross? not sure yet
                [:rocks       "*"  "#333"   2  "rocks"          (sprite-coords 12 3)] ;2 food
                ])

(def entity-keys [:key :description :symbol :color :weight])

(def entity-data [[:coin "a coin"  "$"  "yellow"  6]
                  [:hp   "hp +"    "H"  "red"     1]
                  [:food "food"    "F"  "brown"   2]])


(def enemy-keys [:key :symbol :color :sprite :level :hp :effect])

(def enemy-data [[:bat    "b"  "#559"       (sprite-coords 12 7)     1  2   :none]
                 [:snake  "s"  "lightgreen" (sprite-coords 9 2)      2  10  {:poison 2}]])


(defn- keys-and-data
  "Helper function to map arrays of keys and data into a map structure"
  [keys data]
  (map #(into (hash-map) (vec (map vector keys %))) data))

(defn- by-key
  [items key]
  (filter #(= (:key %) key) items))


(defn enemy-map
  []
  (keys-and-data enemy-keys enemy-data))

(defn tile-map
  []
  (keys-and-data tile-keys tile-data))


(defn get-random-tile
  "Returns a random tile from tiles, taking its weight into consideration"
  [tiles]
  (let [weights (rest (reductions #(+ %1 (:weight %2)) 0 tiles))
        rand (rand-int (last weights))]
    (nth tiles (count (take-while #(<= % rand) weights)))))

(defn get-random-map
  "Returns a random map"
  [tiles]
  (let [tiles-without-stairs (->> tiles (drop 3))
        [width height] map-size
        random-tile #(get-random-tile tiles-without-stairs)]
    (vec (for [y (range height)]
           (vec (for [x (range width)
                      :let [tile (random-tile)]]
                  (assoc tile :position [x y])))))))

(defn get-tile-at
  "Returns the tile at x,y or the first (out-of-bounds) tile if invalid."
  [tiles x y]
  (get-in tiles [y x] (first (tile-map))))


(defn distance
  "Manhattan distance between 2 points"
  [[x1 y1] [x2 y2]]
  (+ (Math/abs (- x1 x2)) (Math/abs (- y1 y2))))

(defn valid-move?
  "True if the given coordinates are a valid move from the current player position"
  [x y [pos-x pos-y]]
  (= 1 (distance [x y] [pos-x pos-y])))

(defn stairs-down?
  "True if the tile at [x y] is the stairs down"
  [tile-map x y]
  (-> (get-in tile-map [y x]) (:key) (= :stairs-down)))


(defn find-stairs-location
  "Returns the location of the stairs to the next level given the starting position of the player"
  [map start-x start-y]
  (let [tiles-list (flatten map)
        empty? #(= :empty (:key %))
        far-enough? #(> (distance [start-x start-y] (:position %)) 5)
        maybe-stairs? #(and (empty? %) (far-enough? %))
        possible-tiles (filter maybe-stairs? tiles-list)]
    (:position (rand-nth possible-tiles))))

(defn place-stairs-down
  "Places the stairs on the map at a random point"
  [map [start-x start-y]]
  (let [stairs-down-tile (first (by-key (tile-map) :stairs-down))
        [pos-x pos-y] (find-stairs-location map start-x start-y)]
    (assoc-in map [pos-y pos-x] (assoc stairs-down-tile :position [pos-x pos-y])))) ;; reverse y- and x- position when associating in map


(defn possible-enemy-locations
  [tile-map start-pos]
  (let []
    tile-map))

(defn add-enemy
  "Adds an enemy at the given location"
  [list enemy [pos-x pos-y]]
  (conj list {[pos-x pos-y] enemy}))


(defn maybe-enemies?
  [tile-map enemies player-pos]
  (let [has-enemy? (fn [[x y]] (contains? enemies [x y]))
        stairs? (fn [[x y]] (stairs-down? tile-map x y))
        player? (fn [[x y]] (= player-pos [x y]))
        candidate? #(and (not (has-enemy? %)) (not (stairs? %)) (not (player? %)))]
    (shuffle (filter #(candidate? (:position %)) (flatten tile-map)))))

(defn add-enemies-to-map
  "Adds random enemies to the map. Requires the map to have been previously generated, and needs the state since enemies are stored separately from tiles."
  [state]
  (let [tiles (:tiles state)
        possible (maybe-enemies? tiles (:enemies state) (:position state))
        min (* (count possible) 0.2)
        max (* (count possible) 0.4)
        num-enemies (+ (rand-int (- max min)) min)
        random-enemy #(rand-nth (enemy-map))
        ]
    (->> (take num-enemies possible)
         (map (fn [i] {(:position i) (random-enemy)}))
         (into {} conj)
         (update state :enemies conj))))
