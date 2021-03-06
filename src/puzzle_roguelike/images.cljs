(ns puzzle-roguelike.images )


(def sprite-image-size [16 24])

(defn- sprite-coords [x y]
  (let [[sprite-x sprite-y] sprite-image-size]
    [(- (* x sprite-x)) (- (* y sprite-y))]))

(def player {:key player :sprite (sprite-coords 0 0)})
