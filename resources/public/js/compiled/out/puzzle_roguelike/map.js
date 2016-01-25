// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.map');
goog.require('cljs.core');
goog.require('puzzle_roguelike.images');
puzzle_roguelike.map.map_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null);
puzzle_roguelike.map.tile_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"food-consumption","food-consumption",-1021701196),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"sprite","sprite",172516848)], null);
puzzle_roguelike.map.tile_data = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),"out of bounds","X","red",(1),(0),puzzle_roguelike.images.sprite_coords.call(null,(7),(0))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901),"stairs down",">","green",(1),(0),puzzle_roguelike.images.sprite_coords.call(null,(3),(0))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stairs-up","stairs-up",1096913356),"stairs up","<","green",(1),(0),puzzle_roguelike.images.sprite_coords.call(null,(6),(7))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-point","start-point",-1303756511),"start","X","white",(1),(0),puzzle_roguelike.images.sprite_coords.call(null,(7),(4))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),"a floor",".","black",(1),(8),puzzle_roguelike.images.sprite_coords.call(null,(1),(0))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),"water","~","blue",(1),(1),puzzle_roguelike.images.sprite_coords.call(null,(7),(2))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rocks","rocks",-1226816616),"rocks","*","#333",(1),(2),puzzle_roguelike.images.sprite_coords.call(null,(12),(3))], null)], null);
puzzle_roguelike.map.entity_keys = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"sprite","sprite",172516848)], null);
puzzle_roguelike.map.entity_data = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coin","coin",-227557189),"coin","$","yellow",(6),puzzle_roguelike.images.sprite_coords.call(null,(12),(4))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moneybag","moneybag",-1896929373),"money bag","$","yellow",(3),puzzle_roguelike.images.sprite_coords.call(null,(11),(4))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hp","hp",-1541237831),"hp +","H","red",(1),puzzle_roguelike.images.sprite_coords.call(null,(1),(9))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atk","atk",-473986036),"atk +","A","blue",(2),puzzle_roguelike.images.sprite_coords.call(null,(2),(3))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"def","def",-1043430536),"def +","D","gray",(2),puzzle_roguelike.images.sprite_coords.call(null,(3),(3))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121),"food","F","brown",(2),puzzle_roguelike.images.sprite_coords.call(null,(6),(8))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),"key","K","yellow",(1),puzzle_roguelike.images.sprite_coords.call(null,(2),(2))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closed-chest","closed-chest",337913746),"a chest","C","red",(1),puzzle_roguelike.images.sprite_coords.call(null,(0),(8))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-chest","open-chest",1547091595),"an open chest","C","red",(0),puzzle_roguelike.images.sprite_coords.call(null,(1),(8))], null)], null);
puzzle_roguelike.map.enemy_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"dmg","dmg",-401654239),new cljs.core.Keyword(null,"effect","effect",347343289)], null);
puzzle_roguelike.map.enemy_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bat","bat",607903974),"bat","b","#559",puzzle_roguelike.images.sprite_coords.call(null,(12),(7)),(1),(2),(1),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),"snake","s","lightgreen",puzzle_roguelike.images.sprite_coords.call(null,(9),(2)),(1),(5),(2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"poison","poison",566911550),(2)], null)], null)], null);
/**
 * Helper function to map arrays of keys and data into a map structure
 */
puzzle_roguelike.map.keys_and_data = (function puzzle_roguelike$map$keys_and_data(keys,data){
return cljs.core.map.call(null,(function (p1__57565_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vector,keys,p1__57565_SHARP_)));
}),data);
});
puzzle_roguelike.map.by_key = (function puzzle_roguelike$map$by_key(items,key){
return cljs.core.filter.call(null,(function (p1__57566_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__57566_SHARP_),key);
}),items);
});
puzzle_roguelike.map.enemy_map = (function puzzle_roguelike$map$enemy_map(){
return puzzle_roguelike.map.keys_and_data.call(null,puzzle_roguelike.map.enemy_keys,puzzle_roguelike.map.enemy_data);
});
puzzle_roguelike.map.tile_map = (function puzzle_roguelike$map$tile_map(){
return puzzle_roguelike.map.keys_and_data.call(null,puzzle_roguelike.map.tile_keys,puzzle_roguelike.map.tile_data);
});
puzzle_roguelike.map.item_map = (function puzzle_roguelike$map$item_map(){
return puzzle_roguelike.map.keys_and_data.call(null,puzzle_roguelike.map.entity_keys,puzzle_roguelike.map.entity_data);
});
/**
 * Returns a random tile from tiles, taking its weight into consideration
 */
puzzle_roguelike.map.get_random_tile = (function puzzle_roguelike$map$get_random_tile(tiles){
var weights = cljs.core.rest.call(null,cljs.core.reductions.call(null,(function (p1__57567_SHARP_,p2__57568_SHARP_){
return (p1__57567_SHARP_ + new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p2__57568_SHARP_));
}),(0),tiles));
var rand = cljs.core.rand_int.call(null,cljs.core.last.call(null,weights));
return cljs.core.nth.call(null,tiles,cljs.core.count.call(null,cljs.core.take_while.call(null,((function (weights,rand){
return (function (p1__57569_SHARP_){
return (p1__57569_SHARP_ <= rand);
});})(weights,rand))
,weights)));
});
/**
 * Returns a random map
 */
puzzle_roguelike.map.get_random_map = (function puzzle_roguelike$map$get_random_map(tiles){
var tiles_without_stairs = cljs.core.drop.call(null,(3),tiles);
var vec__57591 = puzzle_roguelike.map.map_size;
var width = cljs.core.nth.call(null,vec__57591,(0),null);
var height = cljs.core.nth.call(null,vec__57591,(1),null);
var random_tile = ((function (tiles_without_stairs,vec__57591,width,height){
return (function (){
return puzzle_roguelike.map.get_random_tile.call(null,tiles_without_stairs);
});})(tiles_without_stairs,vec__57591,width,height))
;
return cljs.core.vec.call(null,(function (){var iter__17598__auto__ = ((function (tiles_without_stairs,vec__57591,width,height,random_tile){
return (function puzzle_roguelike$map$get_random_map_$_iter__57592(s__57593){
return (new cljs.core.LazySeq(null,((function (tiles_without_stairs,vec__57591,width,height,random_tile){
return (function (){
var s__57593__$1 = s__57593;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__57593__$1);
if(temp__4425__auto__){
var s__57593__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57593__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__57593__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__57595 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__57594 = (0);
while(true){
if((i__57594 < size__17597__auto__)){
var y = cljs.core._nth.call(null,c__17596__auto__,i__57594);
cljs.core.chunk_append.call(null,b__57595,cljs.core.vec.call(null,(function (){var iter__17598__auto__ = ((function (i__57594,y,c__17596__auto__,size__17597__auto__,b__57595,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile){
return (function puzzle_roguelike$map$get_random_map_$_iter__57592_$_iter__57604(s__57605){
return (new cljs.core.LazySeq(null,((function (i__57594,y,c__17596__auto__,size__17597__auto__,b__57595,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile){
return (function (){
var s__57605__$1 = s__57605;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__57605__$1);
if(temp__4425__auto____$1){
var s__57605__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57605__$2)){
var c__17596__auto____$1 = cljs.core.chunk_first.call(null,s__57605__$2);
var size__17597__auto____$1 = cljs.core.count.call(null,c__17596__auto____$1);
var b__57607 = cljs.core.chunk_buffer.call(null,size__17597__auto____$1);
if((function (){var i__57606 = (0);
while(true){
if((i__57606 < size__17597__auto____$1)){
var x = cljs.core._nth.call(null,c__17596__auto____$1,i__57606);
var tile = random_tile.call(null);
cljs.core.chunk_append.call(null,b__57607,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__57612 = (i__57606 + (1));
i__57606 = G__57612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57607),puzzle_roguelike$map$get_random_map_$_iter__57592_$_iter__57604.call(null,cljs.core.chunk_rest.call(null,s__57605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57607),null);
}
} else {
var x = cljs.core.first.call(null,s__57605__$2);
var tile = random_tile.call(null);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),puzzle_roguelike$map$get_random_map_$_iter__57592_$_iter__57604.call(null,cljs.core.rest.call(null,s__57605__$2)));
}
} else {
return null;
}
break;
}
});})(i__57594,y,c__17596__auto__,size__17597__auto__,b__57595,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile))
,null,null));
});})(i__57594,y,c__17596__auto__,size__17597__auto__,b__57595,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile))
;
return iter__17598__auto__.call(null,cljs.core.range.call(null,width));
})()));

var G__57613 = (i__57594 + (1));
i__57594 = G__57613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57595),puzzle_roguelike$map$get_random_map_$_iter__57592.call(null,cljs.core.chunk_rest.call(null,s__57593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57595),null);
}
} else {
var y = cljs.core.first.call(null,s__57593__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__17598__auto__ = ((function (y,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile){
return (function puzzle_roguelike$map$get_random_map_$_iter__57592_$_iter__57608(s__57609){
return (new cljs.core.LazySeq(null,((function (y,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile){
return (function (){
var s__57609__$1 = s__57609;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__57609__$1);
if(temp__4425__auto____$1){
var s__57609__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57609__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__57609__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__57611 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__57610 = (0);
while(true){
if((i__57610 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__57610);
var tile = random_tile.call(null);
cljs.core.chunk_append.call(null,b__57611,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__57614 = (i__57610 + (1));
i__57610 = G__57614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57611),puzzle_roguelike$map$get_random_map_$_iter__57592_$_iter__57608.call(null,cljs.core.chunk_rest.call(null,s__57609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57611),null);
}
} else {
var x = cljs.core.first.call(null,s__57609__$2);
var tile = random_tile.call(null);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),puzzle_roguelike$map$get_random_map_$_iter__57592_$_iter__57608.call(null,cljs.core.rest.call(null,s__57609__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile))
,null,null));
});})(y,s__57593__$2,temp__4425__auto__,tiles_without_stairs,vec__57591,width,height,random_tile))
;
return iter__17598__auto__.call(null,cljs.core.range.call(null,width));
})()),puzzle_roguelike$map$get_random_map_$_iter__57592.call(null,cljs.core.rest.call(null,s__57593__$2)));
}
} else {
return null;
}
break;
}
});})(tiles_without_stairs,vec__57591,width,height,random_tile))
,null,null));
});})(tiles_without_stairs,vec__57591,width,height,random_tile))
;
return iter__17598__auto__.call(null,cljs.core.range.call(null,height));
})());
});
/**
 * Returns the tile at x,y or the first (out-of-bounds) tile if invalid.
 */
puzzle_roguelike.map.get_tile_at = (function puzzle_roguelike$map$get_tile_at(tiles,x,y){
return cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),cljs.core.first.call(null,puzzle_roguelike.map.tile_map.call(null)));
});
/**
 * Manhattan distance between 2 points
 */
puzzle_roguelike.map.distance = (function puzzle_roguelike$map$distance(p__57615,p__57616){
var vec__57619 = p__57615;
var x1 = cljs.core.nth.call(null,vec__57619,(0),null);
var y1 = cljs.core.nth.call(null,vec__57619,(1),null);
var vec__57620 = p__57616;
var x2 = cljs.core.nth.call(null,vec__57620,(0),null);
var y2 = cljs.core.nth.call(null,vec__57620,(1),null);
return (Math.abs((x1 - x2)) + Math.abs((y1 - y2)));
});
/**
 * True if the given coordinates are a valid move from the current player position
 */
puzzle_roguelike.map.valid_move_QMARK_ = (function puzzle_roguelike$map$valid_move_QMARK_(x,y,p__57621){
var vec__57623 = p__57621;
var pos_x = cljs.core.nth.call(null,vec__57623,(0),null);
var pos_y = cljs.core.nth.call(null,vec__57623,(1),null);
return cljs.core._EQ_.call(null,(1),puzzle_roguelike.map.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)));
});
/**
 * True if the tile at [x y] is the stairs down
 */
puzzle_roguelike.map.stairs_down_QMARK_ = (function puzzle_roguelike$map$stairs_down_QMARK_(tile_map,x,y){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,tile_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))),new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901));
});
/**
 * Returns the location of the stairs to the next level given the starting position of the player
 */
puzzle_roguelike.map.find_stairs_location = (function puzzle_roguelike$map$find_stairs_location(map,start_x,start_y){
var tiles_list = cljs.core.flatten.call(null,map);
var empty_QMARK_ = ((function (tiles_list){
return (function (p1__57624_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__57624_SHARP_));
});})(tiles_list))
;
var far_enough_QMARK_ = ((function (tiles_list,empty_QMARK_){
return (function (p1__57625_SHARP_){
return (puzzle_roguelike.map.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__57625_SHARP_)) > (5));
});})(tiles_list,empty_QMARK_))
;
var maybe_stairs_QMARK_ = ((function (tiles_list,empty_QMARK_,far_enough_QMARK_){
return (function (p1__57626_SHARP_){
var and__16814__auto__ = empty_QMARK_.call(null,p1__57626_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return far_enough_QMARK_.call(null,p1__57626_SHARP_);
} else {
return and__16814__auto__;
}
});})(tiles_list,empty_QMARK_,far_enough_QMARK_))
;
var possible_tiles = cljs.core.filter.call(null,maybe_stairs_QMARK_,tiles_list);
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth.call(null,possible_tiles));
});
/**
 * Places the stairs on the map at a random point
 */
puzzle_roguelike.map.place_stairs_down = (function puzzle_roguelike$map$place_stairs_down(map,p__57627){
var vec__57630 = p__57627;
var start_x = cljs.core.nth.call(null,vec__57630,(0),null);
var start_y = cljs.core.nth.call(null,vec__57630,(1),null);
var stairs_down_tile = cljs.core.first.call(null,puzzle_roguelike.map.by_key.call(null,puzzle_roguelike.map.tile_map.call(null),new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901)));
var vec__57631 = puzzle_roguelike.map.find_stairs_location.call(null,map,start_x,start_y);
var pos_x = cljs.core.nth.call(null,vec__57631,(0),null);
var pos_y = cljs.core.nth.call(null,vec__57631,(1),null);
return cljs.core.assoc_in.call(null,map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_y,pos_x], null),cljs.core.assoc.call(null,stairs_down_tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)));
});
puzzle_roguelike.map.place_start_point = (function puzzle_roguelike$map$place_start_point(map,p__57632){
var vec__57634 = p__57632;
var start_x = cljs.core.nth.call(null,vec__57634,(0),null);
var start_y = cljs.core.nth.call(null,vec__57634,(1),null);
return cljs.core.assoc_in.call(null,map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_y,start_x], null),cljs.core.assoc.call(null,cljs.core.first.call(null,puzzle_roguelike.map.by_key.call(null,puzzle_roguelike.map.tile_map.call(null),new cljs.core.Keyword(null,"start-point","start-point",-1303756511))),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null)));
});
puzzle_roguelike.map.maybe_something_QMARK_ = (function puzzle_roguelike$map$maybe_something_QMARK_(tile_map,enemies,player_pos){
var has_enemy_QMARK_ = (function (p__57643){
var vec__57644 = p__57643;
var x = cljs.core.nth.call(null,vec__57644,(0),null);
var y = cljs.core.nth.call(null,vec__57644,(1),null);
return cljs.core.contains_QMARK_.call(null,enemies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
var stairs_QMARK_ = ((function (has_enemy_QMARK_){
return (function (p__57645){
var vec__57646 = p__57645;
var x = cljs.core.nth.call(null,vec__57646,(0),null);
var y = cljs.core.nth.call(null,vec__57646,(1),null);
return puzzle_roguelike.map.stairs_down_QMARK_.call(null,tile_map,x,y);
});})(has_enemy_QMARK_))
;
var player_QMARK_ = ((function (has_enemy_QMARK_,stairs_QMARK_){
return (function (p__57647){
var vec__57648 = p__57647;
var x = cljs.core.nth.call(null,vec__57648,(0),null);
var y = cljs.core.nth.call(null,vec__57648,(1),null);
return cljs.core._EQ_.call(null,player_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(has_enemy_QMARK_,stairs_QMARK_))
;
var candidate_QMARK_ = ((function (has_enemy_QMARK_,stairs_QMARK_,player_QMARK_){
return (function (p1__57635_SHARP_){
return (cljs.core.not.call(null,has_enemy_QMARK_.call(null,p1__57635_SHARP_))) && (cljs.core.not.call(null,stairs_QMARK_.call(null,p1__57635_SHARP_))) && (cljs.core.not.call(null,player_QMARK_.call(null,p1__57635_SHARP_)));
});})(has_enemy_QMARK_,stairs_QMARK_,player_QMARK_))
;
return cljs.core.shuffle.call(null,cljs.core.filter.call(null,((function (has_enemy_QMARK_,stairs_QMARK_,player_QMARK_,candidate_QMARK_){
return (function (p1__57636_SHARP_){
return candidate_QMARK_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__57636_SHARP_));
});})(has_enemy_QMARK_,stairs_QMARK_,player_QMARK_,candidate_QMARK_))
,cljs.core.flatten.call(null,tile_map)));
});
puzzle_roguelike.map.random_between = (function puzzle_roguelike$map$random_between(min_pct,max_pct,count){
var min = (count * min_pct);
var max = (count * max_pct);
return (cljs.core.rand_int.call(null,(max - min)) + min);
});
/**
 * Returns a list of tiles that are empty and can have something placed on them
 */
puzzle_roguelike.map.possible_tiles = (function puzzle_roguelike$map$possible_tiles(state){
return puzzle_roguelike.map.maybe_something_QMARK_.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state));
});
puzzle_roguelike.map.random_list = (function puzzle_roguelike$map$random_list(state,min_pct,max_pct,random_element){
var possible = puzzle_roguelike.map.possible_tiles.call(null,state);
var num = puzzle_roguelike.map.random_between.call(null,min_pct,max_pct,cljs.core.count.call(null,possible));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.conj,cljs.core.map.call(null,random_element,cljs.core.take.call(null,num,possible)));
});
puzzle_roguelike.map.random_enemies_list = (function puzzle_roguelike$map$random_enemies_list(state){
var random_enemy = (function (){
return cljs.core.assoc.call(null,cljs.core.rand_nth.call(null,puzzle_roguelike.map.enemy_map.call(null)),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null));
});
return puzzle_roguelike.map.random_list.call(null,state,0.2,0.4,((function (random_enemy){
return (function (i){
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(i),random_enemy.call(null)], true, false);
});})(random_enemy))
);
});
puzzle_roguelike.map.random_items_list = (function puzzle_roguelike$map$random_items_list(state){
var random_item = (function (){
return puzzle_roguelike.map.get_random_tile.call(null,puzzle_roguelike.map.item_map.call(null));
});
return puzzle_roguelike.map.random_list.call(null,state,0.6,0.9,((function (random_item){
return (function (i){
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(i),random_item.call(null)], true, false);
});})(random_item))
);
});
/**
 * Adds random enemies to the map. Requires the map to have been previously generated, and needs the state since enemies are stored separately from tiles.
 */
puzzle_roguelike.map.add_enemies_to_map = (function puzzle_roguelike$map$add_enemies_to_map(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"enemies","enemies",2114285722),puzzle_roguelike.map.random_enemies_list.call(null,state));
});
puzzle_roguelike.map.add_items_to_map = (function puzzle_roguelike$map$add_items_to_map(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"items","items",1031954938),puzzle_roguelike.map.random_items_list.call(null,state));
});

//# sourceMappingURL=map.js.map?rel=1453728831940