(ns puzzle-roguelike.map
  )

(def map-size [10 10])


(def tile-keys  [:key :symbol :background :weight])

(def tile-data [[:bounds      "X"  "red"    0]
                [:stairs-down ">"  "green"  0]
                [:stairs-up   "<"  "green"  0]
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
    ;; (print (str (nth pos 0) ":" (nth pos 1)))
    (assoc-in map [pos-y pos-x] (assoc stairs-down-tile :position [pos-x pos-y])))) ;; reverse y- and x- position when associating in map


(defn possible-enemy-locations
  [map]
  map)

(defn add-enemy
  "Adds an enemy at the given location"
  [list enemy [pos-x pos-y]]
  (conj list {[pos-x pos-y] enemy}))


(defn add-enemies-to-map
  "Adds random enemies to the map. Requires the map to have been previously generated, and needs the state since enemies are stored separately from tiles."
  [state]
  (let [map (:tiles state)
        enemies (:enemies state)]
    state))
