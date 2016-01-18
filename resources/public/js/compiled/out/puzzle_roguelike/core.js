// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('puzzle_roguelike.map');
goog.require('puzzle_roguelike.animations');
goog.require('cljs.core.async');
goog.require('puzzle_roguelike.components');
goog.require('puzzle_roguelike.state');
cljs.core.enable_console_print_BANG_.call(null);
puzzle_roguelike.core.events_chan = cljs.core.async.chan.call(null);
puzzle_roguelike.core.initialize_BANG_ = (function puzzle_roguelike$core$initialize_BANG_(){
return cljs.core.reset_BANG_.call(null,puzzle_roguelike.state.game_state,puzzle_roguelike.state.create_initial_state.call(null));
});
/**
 * Adds message to the message list in state
 */
puzzle_roguelike.core.display_message = (function puzzle_roguelike$core$display_message(state,message){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null),cljs.core.conj,message);
});
/**
 * Subtracts the amount of food from the current player state
 */
puzzle_roguelike.core.subtract_food = (function puzzle_roguelike$core$subtract_food(state,amount){
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"food","food",1842183121)], null),cljs.core._,amount);
});
/**
 * Returns a new state where the player has moved to the specified position
 */
puzzle_roguelike.core.move_player = (function puzzle_roguelike$core$move_player(state,x,y){
var current_pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var move_to = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core.truth_(puzzle_roguelike.map.valid_move_QMARK_.call(null,x,y,current_pos))){
return puzzle_roguelike.core.display_message.call(null,puzzle_roguelike.core.subtract_food.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"position","position",-2011731912),move_to),(1)),[cljs.core.str("Moved to "),cljs.core.str(x),cljs.core.str(", "),cljs.core.str(y)].join(''));
} else {
return puzzle_roguelike.core.display_message.call(null,state,[cljs.core.str("Can't move there!")].join(''));
}
});
puzzle_roguelike.core.stairs_down_QMARK_ = (function puzzle_roguelike$core$stairs_down_QMARK_(map,x,y){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))),new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901));
});
if(typeof puzzle_roguelike.core.dispatch_event !== 'undefined'){
} else {
/**
 * Returns a new state where the specified action has taken place
 */
puzzle_roguelike.core.dispatch_event = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"puzzle-roguelike.core","dispatch-event"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (state,data){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,puzzle_roguelike.core.dispatch_event,new cljs.core.Keyword(null,"move","move",-2110884309),(function (state,data){
var out_chan = puzzle_roguelike.core.events_chan;
var vec__70933 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data);
var x = cljs.core.nth.call(null,vec__70933,(0),null);
var y = cljs.core.nth.call(null,vec__70933,(1),null);
var map = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(state);
var enemy_QMARK_ = false;
var item_QMARK_ = false;
var can_move_QMARK_ = (!(enemy_QMARK_)) && (!(item_QMARK_));
if(cljs.core.truth_(puzzle_roguelike.core.stairs_down_QMARK_.call(null,map,x,y))){
return puzzle_roguelike.core.display_message.call(null,puzzle_roguelike.core.move_player.call(null,state,x,y),"Stairs down - click to go to the next level");
} else {
if(can_move_QMARK_){
return puzzle_roguelike.core.move_player.call(null,state,x,y);
} else {
if(enemy_QMARK_){
cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

return state;
} else {
if(item_QMARK_){
return state;
} else {
return null;
}
}
}
}
}));
cljs.core._add_method.call(null,puzzle_roguelike.core.dispatch_event,new cljs.core.Keyword(null,"attack","attack",1957061788),(function (state,data){
var vec__70934 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data);
var x = cljs.core.nth.call(null,vec__70934,(0),null);
var y = cljs.core.nth.call(null,vec__70934,(1),null);
return null;
}));
cljs.core._add_method.call(null,puzzle_roguelike.core.dispatch_event,new cljs.core.Keyword(null,"get-item","get-item",-445412473),(function (state,data){
return null;
}));
cljs.core._add_method.call(null,puzzle_roguelike.core.dispatch_event,new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901),(function (state,data){
var vec__70935 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data);
var x = cljs.core.nth.call(null,vec__70935,(0),null);
var y = cljs.core.nth.call(null,vec__70935,(1),null);
var map = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(state);
var next_floor = (new cljs.core.Keyword(null,"floor","floor",1882041021).cljs$core$IFn$_invoke$arity$1(state) + (1));
if(cljs.core.truth_(puzzle_roguelike.core.stairs_down_QMARK_.call(null,map,x,y))){
return puzzle_roguelike.state.new_level.call(null,puzzle_roguelike.core.display_message.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"floor","floor",1882041021),next_floor),[cljs.core.str("You descend the stairs... [floor "),cljs.core.str(next_floor),cljs.core.str("]")].join('')),next_floor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return state;
}
}));
/**
 * Checks if the current ui/state should be updated (i.e. game over, new game, etc)
 */
puzzle_roguelike.core.check_for_next_state = (function puzzle_roguelike$core$check_for_next_state(state){
return state;
});
/**
 * Main game event dispatcher. Listen to events on in-chan and dispatch accordingly
 */
puzzle_roguelike.core.run_event_loop = (function puzzle_roguelike$core$run_event_loop(in_chan){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_70985){
var state_val_70986 = (state_70985[(1)]);
if((state_val_70986 === (1))){
var state_70985__$1 = state_70985;
var statearr_70987_71002 = state_70985__$1;
(statearr_70987_71002[(2)] = null);

(statearr_70987_71002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70986 === (2))){
var state_70985__$1 = state_70985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70985__$1,(4),in_chan);
} else {
if((state_val_70986 === (3))){
var inst_70983 = (state_70985[(2)]);
var state_70985__$1 = state_70985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70985__$1,inst_70983);
} else {
if((state_val_70986 === (4))){
var inst_70971 = (state_70985[(7)]);
var inst_70971__$1 = (state_70985[(2)]);
var inst_70972 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_70971__$1);
var state_70985__$1 = (function (){var statearr_70988 = state_70985;
(statearr_70988[(7)] = inst_70971__$1);

return statearr_70988;
})();
if(cljs.core.truth_(inst_70972)){
var statearr_70989_71003 = state_70985__$1;
(statearr_70989_71003[(1)] = (5));

} else {
var statearr_70990_71004 = state_70985__$1;
(statearr_70990_71004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70986 === (5))){
var inst_70971 = (state_70985[(7)]);
var inst_70974 = cljs.core.deref.call(null,puzzle_roguelike.state.game_state);
var inst_70975 = puzzle_roguelike.core.dispatch_event.call(null,inst_70974,inst_70971);
var inst_70976 = puzzle_roguelike.core.check_for_next_state.call(null,inst_70975);
var inst_70977 = cljs.core.reset_BANG_.call(null,puzzle_roguelike.state.game_state,inst_70976);
var state_70985__$1 = state_70985;
var statearr_70991_71005 = state_70985__$1;
(statearr_70991_71005[(2)] = inst_70977);

(statearr_70991_71005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70986 === (6))){
var state_70985__$1 = state_70985;
var statearr_70992_71006 = state_70985__$1;
(statearr_70992_71006[(2)] = null);

(statearr_70992_71006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70986 === (7))){
var inst_70980 = (state_70985[(2)]);
var state_70985__$1 = (function (){var statearr_70993 = state_70985;
(statearr_70993[(8)] = inst_70980);

return statearr_70993;
})();
var statearr_70994_71007 = state_70985__$1;
(statearr_70994_71007[(2)] = null);

(statearr_70994_71007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__ = null;
var puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____0 = (function (){
var statearr_70998 = [null,null,null,null,null,null,null,null,null];
(statearr_70998[(0)] = puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__);

(statearr_70998[(1)] = (1));

return statearr_70998;
});
var puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____1 = (function (state_70985){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_70985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e70999){if((e70999 instanceof Object)){
var ex__18907__auto__ = e70999;
var statearr_71000_71008 = state_70985;
(statearr_71000_71008[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71009 = state_70985;
state_70985 = G__71009;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__ = function(state_70985){
switch(arguments.length){
case 0:
return puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____0.call(this);
case 1:
return puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____1.call(this,state_70985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____0;
puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____1;
return puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_71001 = f__18925__auto__.call(null);
(statearr_71001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_71001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
/**
 * Main container for game elements. Starts animation and event loops on first render.
 */
puzzle_roguelike.core.game_container = (function puzzle_roguelike$core$game_container(){
puzzle_roguelike.core.run_event_loop.call(null,puzzle_roguelike.core.events_chan);

puzzle_roguelike.animations.start_game_loop_BANG_.call(null);

return (function (){
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state));
var tiles = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state));
var messages = cljs.core.take.call(null,(8),new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"this game has no title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-wrapper","div.game-wrapper",115045040),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.map_view,tiles,position,puzzle_roguelike.core.events_chan], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stats_view,player], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.message_log,messages], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (player,tiles,position,messages){
return (function (event){
puzzle_roguelike.core.initialize_BANG_.call(null);

return null;
});})(player,tiles,position,messages))
], null),"Reset game"], null)], null);
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.core.game_container], null),document.getElementById("app"));
puzzle_roguelike.core.on_js_reload = (function puzzle_roguelike$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1453143987632