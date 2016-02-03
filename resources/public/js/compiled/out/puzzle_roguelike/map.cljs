(ns puzzle-roguelike.map
  (:require [puzzle-roguelike.images :as img :refer [sprite-coords]]))

(def map-size [10 10])


(def tile-keys  [:key :description :symbol :background :food-consumption :weight :sprite])

(def tile-data [[:bounds      "out of bounds" "X"  "red"    1  0    (sprite-coords 7 0)]
                [:stairs-down "stairs down"   ">"  "green"  1  0    (sprite-coords 1 2)]
                [:stairs-up   "stairs up"     "<"  "green"  1  0    (sprite-coords 6 7)]
                [:start-point "start"         "X"  "white"  1  0    (sprite-coords 7 4)]
                [:empty       "a floor"       "."  "black"  1  8    (sprite-coords 8 0)] ;normal movement, 1 food
                [:water       "water"         "~"  "blue"   1  1    (sprite-coords 9 0)] ;maybe can't cross? not sure yet
                [:rocks       "rocks"         "*"  "#333"   1  2    (sprite-coords 4 0)] ;2 food
                ])

(def entity-keys [:key :description :symbol :color :weight :sprite])

(def entity-data [[:coin         "coin"          "$"  "yellow"  6  (sprite-coords 18 3)]
                  [:moneybag     "money bag"     "$"  "yellow"  3  (sprite-coords 14 3)]
                  [:hp           "hp +"          "H"  "red"     1  (sprite-coords 3 3)]
                  [:atk          "atk +"         "A"  "blue"    2  (sprite-coords 1 0)]
                  [:def          "def +"         "D"  "gray"    2  (sprite-coords 0 2)]
                  [:food         "food"          "F"  "brown"   2  (sprite-coords 13 2)]
                  [:key          "key"           "K"  "yellow"  1  (sprite-coords 7 3)]
                  [:closed-chest "a chest"       "C"  "red"     1  (sprite-coords 5 12)]
                  [:open-chest   "an open chest" "C"  "red"     0  (sprite-coords 6 12)]])


(def enemy-keys [:key :description :symbol :color :sprite :level :hp :dmg :effect])

(def enemy-data [[:bat      "bat"       "b"  "#559"       (sprite-coords 6 4)    1  2  1   :none]
                 [:snake    "snake"     "s"  "lightgreen" (sprite-coords 8 4)    1  5  2   {:poison 2}]
                 [:goblin   "goblin"    "g"  "green"      (sprite-coords 1 10)   1  6  2   :none]
                 [:ant      "ant"       "p"  "red"        (sprite-coords 7 6)    1  3  5   :none]
                 [:skeleton "skeleton"  "s"  "white"      (sprite-coords 1 12)   2  8  4   :none]
                 [:ratman   "ratman"    "m"  "brown"      (sprite-coords 7 12)   2  10 3   :none]
                 [:shark    "shark"     "s"  "blue"       (sprite-coords 0 6)    2  13 5   :none]
                 [:orc      "orc"       "o"  "green"      (sprite-coords 15 6)   3  25 10  :none]
                 [:minotaur "minotaur"  "m"  "blue"       (sprite-coords 18 12)  4  40 15  :none]])

;;(map #(hash-map (:key %) %) (map #(into (hash-map) (vec (map vector map/enemy-keys %))) map/enemy-data))

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

(defn item-map
  []
  (keys-and-data entity-keys entity-data))

(defn get-random-tile
  "Returns a random tile from tiles, taking its weight into consideration"
  [tiles]
  (let [weights (rest (reductions #(+ %1 (:weight %2)) 0 tiles))
        rand (rand-int (last weights))]
    (nth tiles (count (take-while #(<= % rand) weights)))))

(defn get-random-map
  "Returns a random map"
  [tiles]
  (let [tiles-without-stairs (->> tiles (drop 4))
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

(defn place-start-point
  [map [start-x start-y]]
  (assoc-in map [start-y start-x] (assoc (first (by-key (tile-map) :start-point)) :position [start-x start-y])))

(defn maybe-something?
  [tile-map enemies player-pos]
  (let [has-enemy? (fn [[x y]] (contains? enemies [x y]))
        stairs? (fn [[x y]] (stairs-down? tile-map x y))
        player? (fn [[x y]] (= player-pos [x y]))
        candidate? #(and (not (has-enemy? %)) (not (stairs? %)) (not (player? %)))]
    (shuffle (filter #(candidate? (:position %)) (flatten tile-map)))))

(defn random-between
  [min-pct max-pct count]
  (let [min (* count min-pct)
        max (* count max-pct)]
    (+ (rand-int (- max min)) min)))

(defn possible-tiles
  "Returns a list of tiles that are empty and can have something placed on them"
  [{:keys [tiles enemies position]}]
  (maybe-something? tiles enemies position))

(defn random-list
  [state min-pct max-pct random-element]
  (let [possible (possible-tiles state)
        num (random-between min-pct max-pct (count possible))]
    (->> (take num possible)
         (map random-element)
         (into {} conj))))

(defn random-enemies-list
  [state]
  (let [floor (:floor state)
        enemies-for-floor (filter #(<= (:level %) floor) (enemy-map))
        random-enemy #(assoc (rand-nth enemies-for-floor) :animation {:pos 0})]
    (random-list state 0.2 0.4 (fn [i] {(:position i) (random-enemy)}))))

(defn random-items-list
  [state]
  (let [random-item #(get-random-tile (item-map))]
    (random-list state 0.6 0.9 (fn [i] {(:position i) (random-item)}))))

(defn add-enemies-to-map
  "Adds random enemies to the map. Requires the map to have been previously generated, and needs the state since enemies are stored separately from tiles."
  [state]
  (->> (random-enemies-list state)
       (assoc state :enemies)))

(defn add-items-to-map
  [state]
  (->> (random-items-list state)
       (assoc state :items)))
