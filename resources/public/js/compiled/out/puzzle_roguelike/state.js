// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('puzzle_roguelike.map');
puzzle_roguelike.state.initial_game_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"current-ui","current-ui",-1846031844),new cljs.core.Keyword(null,"floor","floor",1882041021)],[true,(0),cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hp","hp",-1541237831),(20),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696),(20),new cljs.core.Keyword(null,"atk","atk",-473986036),(1),new cljs.core.Keyword(null,"def","def",-1043430536),(1),new cljs.core.Keyword(null,"food","food",1842183121),(50),new cljs.core.Keyword(null,"gold","gold",-806826416),(0),new cljs.core.Keyword(null,"xp","xp",550374458),(0),new cljs.core.Keyword(null,"level","level",1290497552),(1)], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"main","main",-2117802661),(1)]);
puzzle_roguelike.state.new_level = (function puzzle_roguelike$state$new_level(state,level,start_position){
return cljs.core.assoc.call(null,puzzle_roguelike.map.add_enemies_to_map.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tiles","tiles",178505240),puzzle_roguelike.map.get_random_map.call(null,puzzle_roguelike.map.tile_map.call(null))),new cljs.core.Keyword(null,"position","position",-2011731912),start_position),new cljs.core.Keyword(null,"tiles","tiles",178505240),(function (p1__70590_SHARP_){
return puzzle_roguelike.map.place_stairs_down.call(null,p1__70590_SHARP_,start_position);
}))),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method to create a new initial state with any required random initialization
 */
puzzle_roguelike.state.create_initial_state = (function puzzle_roguelike$state$create_initial_state(){
var start_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(10)),cljs.core.rand_int.call(null,(10))], null);
return puzzle_roguelike.state.new_level.call(null,puzzle_roguelike.state.initial_game_state,(1),start_position);
});
if(typeof puzzle_roguelike.state.game_state !== 'undefined'){
} else {
puzzle_roguelike.state.game_state = reagent.core.atom.call(null,puzzle_roguelike.state.create_initial_state.call(null));
}

//# sourceMappingURL=state.js.map?rel=1453143784968