// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.map');
goog.require('cljs.core');
puzzle_roguelike.map.map_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null);
puzzle_roguelike.map.tile_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"weight","weight",-1262796205)], null);
puzzle_roguelike.map.tile_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),"X","red",(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901),">","green",(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stairs-up","stairs-up",1096913356),"<","green",(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),".","black",(8)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water","water",-824098213),"~","blue",(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rocks","rocks",-1226816616),"*","gray",(2)], null)], null);
puzzle_roguelike.map.entity_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"weight","weight",-1262796205)], null);
puzzle_roguelike.map.entity_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coin","coin",-227557189),"$","yellow",(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hp","hp",-1541237831),"H","red",(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"food","food",1842183121),"F","brown",(2)], null)], null);
puzzle_roguelike.map.enemy_keys = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"hp","hp",-1541237831),new cljs.core.Keyword(null,"effect","effect",347343289)], null);
puzzle_roguelike.map.enemy_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bat","bat",607903974),"b","darkblue",(1),(2),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake","snake",-244377242),"s","green",(2),(10),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"poison","poison",566911550),(2)], null)], null)], null);
/**
 * Helper function to map arrays of keys and data into a map structure
 */
puzzle_roguelike.map.keys_and_data = (function puzzle_roguelike$map$keys_and_data(keys,data){
return cljs.core.map.call(null,(function (p1__65030_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vector,keys,p1__65030_SHARP_)));
}),data);
});
puzzle_roguelike.map.by_key = (function puzzle_roguelike$map$by_key(items,key){
return cljs.core.filter.call(null,(function (p1__65031_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__65031_SHARP_),key);
}),items);
});
puzzle_roguelike.map.enemy_map = (function puzzle_roguelike$map$enemy_map(){
return puzzle_roguelike.map.keys_and_data.call(null,puzzle_roguelike.map.enemy_keys,puzzle_roguelike.map.enemy_data);
});
puzzle_roguelike.map.tile_map = (function puzzle_roguelike$map$tile_map(){
return puzzle_roguelike.map.keys_and_data.call(null,puzzle_roguelike.map.tile_keys,puzzle_roguelike.map.tile_data);
});
/**
 * Returns a random tile from tiles, taking its weight into consideration
 */
puzzle_roguelike.map.get_random_tile = (function puzzle_roguelike$map$get_random_tile(tiles){
var weights = cljs.core.rest.call(null,cljs.core.reductions.call(null,(function (p1__65032_SHARP_,p2__65033_SHARP_){
return (p1__65032_SHARP_ + new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p2__65033_SHARP_));
}),(0),tiles));
var rand = cljs.core.rand_int.call(null,cljs.core.last.call(null,weights));
return cljs.core.nth.call(null,tiles,cljs.core.count.call(null,cljs.core.take_while.call(null,((function (weights,rand){
return (function (p1__65034_SHARP_){
return (p1__65034_SHARP_ <= rand);
});})(weights,rand))
,weights)));
});
/**
 * Returns a random map
 */
puzzle_roguelike.map.get_random_map = (function puzzle_roguelike$map$get_random_map(tiles){
var tiles_without_stairs = cljs.core.drop.call(null,(3),tiles);
var vec__65056 = puzzle_roguelike.map.map_size;
var width = cljs.core.nth.call(null,vec__65056,(0),null);
var height = cljs.core.nth.call(null,vec__65056,(1),null);
var random_tile = ((function (tiles_without_stairs,vec__65056,width,height){
return (function (){
return puzzle_roguelike.map.get_random_tile.call(null,tiles_without_stairs);
});})(tiles_without_stairs,vec__65056,width,height))
;
return cljs.core.vec.call(null,(function (){var iter__17598__auto__ = ((function (tiles_without_stairs,vec__65056,width,height,random_tile){
return (function puzzle_roguelike$map$get_random_map_$_iter__65057(s__65058){
return (new cljs.core.LazySeq(null,((function (tiles_without_stairs,vec__65056,width,height,random_tile){
return (function (){
var s__65058__$1 = s__65058;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__65058__$1);
if(temp__4425__auto__){
var s__65058__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65058__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__65058__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__65060 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__65059 = (0);
while(true){
if((i__65059 < size__17597__auto__)){
var y = cljs.core._nth.call(null,c__17596__auto__,i__65059);
cljs.core.chunk_append.call(null,b__65060,cljs.core.vec.call(null,(function (){var iter__17598__auto__ = ((function (i__65059,y,c__17596__auto__,size__17597__auto__,b__65060,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile){
return (function puzzle_roguelike$map$get_random_map_$_iter__65057_$_iter__65069(s__65070){
return (new cljs.core.LazySeq(null,((function (i__65059,y,c__17596__auto__,size__17597__auto__,b__65060,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile){
return (function (){
var s__65070__$1 = s__65070;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__65070__$1);
if(temp__4425__auto____$1){
var s__65070__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65070__$2)){
var c__17596__auto____$1 = cljs.core.chunk_first.call(null,s__65070__$2);
var size__17597__auto____$1 = cljs.core.count.call(null,c__17596__auto____$1);
var b__65072 = cljs.core.chunk_buffer.call(null,size__17597__auto____$1);
if((function (){var i__65071 = (0);
while(true){
if((i__65071 < size__17597__auto____$1)){
var x = cljs.core._nth.call(null,c__17596__auto____$1,i__65071);
var tile = random_tile.call(null);
cljs.core.chunk_append.call(null,b__65072,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__65077 = (i__65071 + (1));
i__65071 = G__65077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65072),puzzle_roguelike$map$get_random_map_$_iter__65057_$_iter__65069.call(null,cljs.core.chunk_rest.call(null,s__65070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65072),null);
}
} else {
var x = cljs.core.first.call(null,s__65070__$2);
var tile = random_tile.call(null);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),puzzle_roguelike$map$get_random_map_$_iter__65057_$_iter__65069.call(null,cljs.core.rest.call(null,s__65070__$2)));
}
} else {
return null;
}
break;
}
});})(i__65059,y,c__17596__auto__,size__17597__auto__,b__65060,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile))
,null,null));
});})(i__65059,y,c__17596__auto__,size__17597__auto__,b__65060,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile))
;
return iter__17598__auto__.call(null,cljs.core.range.call(null,width));
})()));

var G__65078 = (i__65059 + (1));
i__65059 = G__65078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65060),puzzle_roguelike$map$get_random_map_$_iter__65057.call(null,cljs.core.chunk_rest.call(null,s__65058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65060),null);
}
} else {
var y = cljs.core.first.call(null,s__65058__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__17598__auto__ = ((function (y,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile){
return (function puzzle_roguelike$map$get_random_map_$_iter__65057_$_iter__65073(s__65074){
return (new cljs.core.LazySeq(null,((function (y,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile){
return (function (){
var s__65074__$1 = s__65074;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__65074__$1);
if(temp__4425__auto____$1){
var s__65074__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65074__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__65074__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__65076 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__65075 = (0);
while(true){
if((i__65075 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__65075);
var tile = random_tile.call(null);
cljs.core.chunk_append.call(null,b__65076,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__65079 = (i__65075 + (1));
i__65075 = G__65079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65076),puzzle_roguelike$map$get_random_map_$_iter__65057_$_iter__65073.call(null,cljs.core.chunk_rest.call(null,s__65074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65076),null);
}
} else {
var x = cljs.core.first.call(null,s__65074__$2);
var tile = random_tile.call(null);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),puzzle_roguelike$map$get_random_map_$_iter__65057_$_iter__65073.call(null,cljs.core.rest.call(null,s__65074__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile))
,null,null));
});})(y,s__65058__$2,temp__4425__auto__,tiles_without_stairs,vec__65056,width,height,random_tile))
;
return iter__17598__auto__.call(null,cljs.core.range.call(null,width));
})()),puzzle_roguelike$map$get_random_map_$_iter__65057.call(null,cljs.core.rest.call(null,s__65058__$2)));
}
} else {
return null;
}
break;
}
});})(tiles_without_stairs,vec__65056,width,height,random_tile))
,null,null));
});})(tiles_without_stairs,vec__65056,width,height,random_tile))
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
puzzle_roguelike.map.distance = (function puzzle_roguelike$map$distance(p__65080,p__65081){
var vec__65084 = p__65080;
var x1 = cljs.core.nth.call(null,vec__65084,(0),null);
var y1 = cljs.core.nth.call(null,vec__65084,(1),null);
var vec__65085 = p__65081;
var x2 = cljs.core.nth.call(null,vec__65085,(0),null);
var y2 = cljs.core.nth.call(null,vec__65085,(1),null);
return (Math.abs((x1 - x2)) + Math.abs((y1 - y2)));
});
/**
 * True if the given coordinates are a valid move from the current player position
 */
puzzle_roguelike.map.valid_move_QMARK_ = (function puzzle_roguelike$map$valid_move_QMARK_(x,y,p__65086){
var vec__65088 = p__65086;
var pos_x = cljs.core.nth.call(null,vec__65088,(0),null);
var pos_y = cljs.core.nth.call(null,vec__65088,(1),null);
return cljs.core._EQ_.call(null,(1),puzzle_roguelike.map.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)));
});
/**
 * Returns the location of the stairs to the next level given the starting position of the player
 */
puzzle_roguelike.map.find_stairs_location = (function puzzle_roguelike$map$find_stairs_location(map,start_x,start_y){
var tiles_list = cljs.core.flatten.call(null,map);
var empty_QMARK_ = ((function (tiles_list){
return (function (p1__65089_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__65089_SHARP_));
});})(tiles_list))
;
var far_enough_QMARK_ = ((function (tiles_list,empty_QMARK_){
return (function (p1__65090_SHARP_){
return (puzzle_roguelike.map.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__65090_SHARP_)) > (5));
});})(tiles_list,empty_QMARK_))
;
var maybe_stairs_QMARK_ = ((function (tiles_list,empty_QMARK_,far_enough_QMARK_){
return (function (p1__65091_SHARP_){
var and__16814__auto__ = empty_QMARK_.call(null,p1__65091_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return far_enough_QMARK_.call(null,p1__65091_SHARP_);
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
puzzle_roguelike.map.place_stairs_down = (function puzzle_roguelike$map$place_stairs_down(map,p__65092){
var vec__65095 = p__65092;
var start_x = cljs.core.nth.call(null,vec__65095,(0),null);
var start_y = cljs.core.nth.call(null,vec__65095,(1),null);
var stairs_down_tile = cljs.core.first.call(null,puzzle_roguelike.map.by_key.call(null,puzzle_roguelike.map.tile_map.call(null),new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901)));
var vec__65096 = puzzle_roguelike.map.find_stairs_location.call(null,map,start_x,start_y);
var pos_x = cljs.core.nth.call(null,vec__65096,(0),null);
var pos_y = cljs.core.nth.call(null,vec__65096,(1),null);
return cljs.core.assoc_in.call(null,map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_y,pos_x], null),cljs.core.assoc.call(null,stairs_down_tile,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null)));
});
puzzle_roguelike.map.possible_enemy_locations = (function puzzle_roguelike$map$possible_enemy_locations(map){
return map;
});
/**
 * Adds an enemy at the given location
 */
puzzle_roguelike.map.add_enemy = (function puzzle_roguelike$map$add_enemy(list,enemy,p__65097){
var vec__65099 = p__65097;
var pos_x = cljs.core.nth.call(null,vec__65099,(0),null);
var pos_y = cljs.core.nth.call(null,vec__65099,(1),null);
return cljs.core.conj.call(null,list,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_x,pos_y], null),enemy], true, false));
});
/**
 * Adds random enemies to the map. Requires the map to have been previously generated, and needs the state since enemies are stored separately from tiles.
 */
puzzle_roguelike.map.add_enemies_to_map = (function puzzle_roguelike$map$add_enemies_to_map(state){
var map = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(state);
var enemies = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state);
return state;
});

//# sourceMappingURL=map.js.map?rel=1453136834949