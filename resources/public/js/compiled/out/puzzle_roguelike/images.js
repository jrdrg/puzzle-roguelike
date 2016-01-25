// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.images');
goog.require('cljs.core');
puzzle_roguelike.images.sprite_image_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null);
puzzle_roguelike.images.sprite_coords = (function puzzle_roguelike$images$sprite_coords(x,y){
var vec__57562 = puzzle_roguelike.images.sprite_image_size;
var sprite_x = cljs.core.nth.call(null,vec__57562,(0),null);
var sprite_y = cljs.core.nth.call(null,vec__57562,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (x * sprite_x)),(- (y * sprite_y))], null);
});
puzzle_roguelike.images.player = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),puzzle_roguelike.images.player,new cljs.core.Keyword(null,"sprite","sprite",172516848),puzzle_roguelike.images.sprite_coords.call(null,(0),(4))], null);

//# sourceMappingURL=images.js.map?rel=1453728831860