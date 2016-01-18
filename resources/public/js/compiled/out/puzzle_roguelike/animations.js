// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.animations');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('puzzle_roguelike.state');
puzzle_roguelike.animations.last_ts = reagent.core.atom.call(null,null);
puzzle_roguelike.animations.update_BANG_ = (function puzzle_roguelike$animations$update_BANG_(delta){
return cljs.core.swap_BANG_.call(null,puzzle_roguelike.state.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"food","food",1842183121)], null),(function (p1__70593_SHARP_){
return Math.round((p1__70593_SHARP_ + 0.1));
}));
});
puzzle_roguelike.animations.update_game_loop_BANG_ = (function puzzle_roguelike$animations$update_game_loop_BANG_(ts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state)))){
var delta_70594 = (ts - (function (){var or__16826__auto__ = cljs.core.deref.call(null,puzzle_roguelike.animations.last_ts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return ts;
}
})());
puzzle_roguelike.animations.update_BANG_.call(null,delta_70594);
} else {
}

return window.requestAnimationFrame(puzzle_roguelike$animations$update_game_loop_BANG_);
});
puzzle_roguelike.animations.start_game_loop_BANG_ = (function puzzle_roguelike$animations$start_game_loop_BANG_(){
return window.requestAnimationFrame(puzzle_roguelike.animations.update_game_loop_BANG_);
});

//# sourceMappingURL=animations.js.map?rel=1453143784974