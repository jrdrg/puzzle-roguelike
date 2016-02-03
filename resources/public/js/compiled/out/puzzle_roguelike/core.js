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
puzzle_roguelike.core.dmg_to_player = (function puzzle_roguelike$core$dmg_to_player(player,dmg){
var def = new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(player);
var total_dmg = (dmg - cljs.core.rand_int.call(null,def));
return Math.max((0),total_dmg);
});
puzzle_roguelike.core.handle_attack = (function puzzle_roguelike$core$handle_attack(state,enemy,p__66218,dmg){
var vec__66220 = p__66218;
var x = cljs.core.nth.call(null,vec__66220,(0),null);
var y = cljs.core.nth.call(null,vec__66220,(1),null);
var after_dmg = cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._,dmg);
var enemy_dmg = (new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(enemy) + cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"dmg","dmg",-401654239).cljs$core$IFn$_invoke$arity$1(enemy)));
var total_enemy_dmg = puzzle_roguelike.core.dmg_to_player.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),enemy_dmg);
if((cljs.core.get_in.call(null,after_dmg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null)) <= (0))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,puzzle_roguelike.core.display_message.call(null,state,"Defeated!"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemies","enemies",2114285722)], null),cljs.core.dissoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"xp","xp",550374458)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(enemy));
} else {
return puzzle_roguelike.core.display_message.call(null,puzzle_roguelike.core.display_message.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,after_dmg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"cause-of-death","cause-of-death",-887003024)], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(enemy)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._,total_enemy_dmg),[cljs.core.str("You hit the "),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(enemy)),cljs.core.str(" for "),cljs.core.str(dmg)].join('')),[cljs.core.str("The "),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(enemy)),cljs.core.str(" hits you for "),cljs.core.str(total_enemy_dmg)].join(''));
}
});
puzzle_roguelike.core.remove_item = (function puzzle_roguelike$core$remove_item(state,p__66221){
var vec__66223 = p__66221;
var x = cljs.core.nth.call(null,vec__66223,(0),null);
var y = cljs.core.nth.call(null,vec__66223,(1),null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.dissoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
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
var vec__66224 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data);
var x = cljs.core.nth.call(null,vec__66224,(0),null);
var y = cljs.core.nth.call(null,vec__66224,(1),null);
var map = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(state);
var enemy_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var item_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var can_move_QMARK_ = (!(enemy_QMARK_)) && (!(item_QMARK_));
if(cljs.core.truth_(puzzle_roguelike.map.valid_move_QMARK_.call(null,x,y,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state)))){
if(cljs.core.truth_(puzzle_roguelike.map.stairs_down_QMARK_.call(null,map,x,y))){
return puzzle_roguelike.core.display_message.call(null,puzzle_roguelike.core.move_player.call(null,state,x,y),"Stairs down - click to go to the next floor");
} else {
if(can_move_QMARK_){
return puzzle_roguelike.core.move_player.call(null,state,x,y);
} else {
if(enemy_QMARK_){
cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attack","attack",1957061788),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

return state;
} else {
if(item_QMARK_){
cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"get-item","get-item",-445412473),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

return puzzle_roguelike.core.move_player.call(null,state,x,y);
} else {
return null;
}
}
}
}
} else {
var get_description = ((function (out_chan,vec__66224,x,y,map,enemy_QMARK_,item_QMARK_,can_move_QMARK_){
return (function (){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(puzzle_roguelike.map.get_tile_at.call(null,map,x,y));
});})(out_chan,vec__66224,x,y,map,enemy_QMARK_,item_QMARK_,can_move_QMARK_))
;
return puzzle_roguelike.core.display_message.call(null,state,[cljs.core.str("you see: "),cljs.core.str(get_description.call(null))].join(''));
}
}));
cljs.core._add_method.call(null,puzzle_roguelike.core.dispatch_event,new cljs.core.Keyword(null,"attack","attack",1957061788),(function (state,data){
var vec__66225 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data);
var x = cljs.core.nth.call(null,vec__66225,(0),null);
var y = cljs.core.nth.call(null,vec__66225,(1),null);
var enemy = cljs.core.get.call(null,new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var player_atk = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atk","atk",-473986036)], null));
var player_dmg = (player_atk + cljs.core.rand_int.call(null,player_atk));
var enemy_dmg = cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(enemy));
var c__18924__auto___66244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___66244,vec__66225,x,y,enemy,player_atk,player_dmg,enemy_dmg){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___66244,vec__66225,x,y,enemy,player_atk,player_dmg,enemy_dmg){
return (function (state_66233){
var state_val_66234 = (state_66233[(1)]);
if((state_val_66234 === (1))){
var inst_66226 = [cljs.core.str("timeout 1000"),cljs.core.str(enemy)].join('');
var inst_66227 = cljs.core.print.call(null,inst_66226);
var inst_66228 = cljs.core.async.timeout.call(null,(3000));
var state_66233__$1 = (function (){var statearr_66235 = state_66233;
(statearr_66235[(7)] = inst_66227);

return statearr_66235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66233__$1,(2),inst_66228);
} else {
if((state_val_66234 === (2))){
var inst_66230 = (state_66233[(2)]);
var inst_66231 = cljs.core.print.call(null,"done");
var state_66233__$1 = (function (){var statearr_66236 = state_66233;
(statearr_66236[(8)] = inst_66230);

return statearr_66236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66233__$1,inst_66231);
} else {
return null;
}
}
});})(c__18924__auto___66244,vec__66225,x,y,enemy,player_atk,player_dmg,enemy_dmg))
;
return ((function (switch__18903__auto__,c__18924__auto___66244,vec__66225,x,y,enemy,player_atk,player_dmg,enemy_dmg){
return (function() {
var puzzle_roguelike$core$state_machine__18904__auto__ = null;
var puzzle_roguelike$core$state_machine__18904__auto____0 = (function (){
var statearr_66240 = [null,null,null,null,null,null,null,null,null];
(statearr_66240[(0)] = puzzle_roguelike$core$state_machine__18904__auto__);

(statearr_66240[(1)] = (1));

return statearr_66240;
});
var puzzle_roguelike$core$state_machine__18904__auto____1 = (function (state_66233){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_66233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e66241){if((e66241 instanceof Object)){
var ex__18907__auto__ = e66241;
var statearr_66242_66245 = state_66233;
(statearr_66242_66245[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66246 = state_66233;
state_66233 = G__66246;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
puzzle_roguelike$core$state_machine__18904__auto__ = function(state_66233){
switch(arguments.length){
case 0:
return puzzle_roguelike$core$state_machine__18904__auto____0.call(this);
case 1:
return puzzle_roguelike$core$state_machine__18904__auto____1.call(this,state_66233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
puzzle_roguelike$core$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = puzzle_roguelike$core$state_machine__18904__auto____0;
puzzle_roguelike$core$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = puzzle_roguelike$core$state_machine__18904__auto____1;
return puzzle_roguelike$core$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___66244,vec__66225,x,y,enemy,player_atk,player_dmg,enemy_dmg))
})();
var state__18926__auto__ = (function (){var statearr_66243 = f__18925__auto__.call(null);
(statearr_66243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___66244);

return statearr_66243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___66244,vec__66225,x,y,enemy,player_atk,player_dmg,enemy_dmg))
);


return puzzle_roguelike.core.handle_attack.call(null,state,enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),player_dmg);
}));
puzzle_roguelike.core.hp_up = (function puzzle_roguelike$core$hp_up(hp,amount,max){
return Math.min(max,(hp + amount));
});
puzzle_roguelike.core.heal_player = (function puzzle_roguelike$core$heal_player(state){
var amount = ((1) + cljs.core.rand_int.call(null,(cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null)) / (5))));
var max_hp = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),puzzle_roguelike.core.hp_up,amount,max_hp);
});
cljs.core._add_method.call(null,puzzle_roguelike.core.dispatch_event,new cljs.core.Keyword(null,"get-item","get-item",-445412473),(function (state,data){
var vec__66247 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data);
var x = cljs.core.nth.call(null,vec__66247,(0),null);
var y = cljs.core.nth.call(null,vec__66247,(1),null);
var item = cljs.core.get.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var pred__66248 = cljs.core._EQ_;
var expr__66249 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(pred__66248.call(null,new cljs.core.Keyword(null,"coin","coin",-227557189),expr__66249))){
return puzzle_roguelike.core.remove_item.call(null,cljs.core.update_in.call(null,puzzle_roguelike.core.display_message.call(null,state,"Money!"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"gold","gold",-806826416)], null),cljs.core._PLUS_,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
if(cljs.core.truth_(pred__66248.call(null,new cljs.core.Keyword(null,"moneybag","moneybag",-1896929373),expr__66249))){
return puzzle_roguelike.core.remove_item.call(null,cljs.core.update_in.call(null,puzzle_roguelike.core.display_message.call(null,state,"$$$$$$$"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"gold","gold",-806826416)], null),cljs.core._PLUS_,(10)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
if(cljs.core.truth_(pred__66248.call(null,new cljs.core.Keyword(null,"atk","atk",-473986036),expr__66249))){
return puzzle_roguelike.core.remove_item.call(null,cljs.core.update_in.call(null,puzzle_roguelike.core.display_message.call(null,state,"atk +"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atk","atk",-473986036)], null),cljs.core._PLUS_,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
if(cljs.core.truth_(pred__66248.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__66249))){
return puzzle_roguelike.core.remove_item.call(null,cljs.core.update_in.call(null,puzzle_roguelike.core.display_message.call(null,state,"def +"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"def","def",-1043430536)], null),cljs.core._PLUS_,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
if(cljs.core.truth_(pred__66248.call(null,new cljs.core.Keyword(null,"hp","hp",-1541237831),expr__66249))){
return puzzle_roguelike.core.remove_item.call(null,puzzle_roguelike.core.heal_player.call(null,puzzle_roguelike.core.display_message.call(null,state,"hp +")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
if(cljs.core.truth_(pred__66248.call(null,new cljs.core.Keyword(null,"food","food",1842183121),expr__66249))){
return puzzle_roguelike.core.remove_item.call(null,cljs.core.update_in.call(null,puzzle_roguelike.core.display_message.call(null,state,"Food!"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"food","food",1842183121)], null),cljs.core._PLUS_,(5)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return puzzle_roguelike.core.display_message.call(null,state,[cljs.core.str("there is a "),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item))].join(''));
}
}
}
}
}
}
}));
cljs.core._add_method.call(null,puzzle_roguelike.core.dispatch_event,new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901),(function (state,data){
var vec__66251 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data);
var x = cljs.core.nth.call(null,vec__66251,(0),null);
var y = cljs.core.nth.call(null,vec__66251,(1),null);
var map = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(state);
var next_floor = (new cljs.core.Keyword(null,"floor","floor",1882041021).cljs$core$IFn$_invoke$arity$1(state) + (1));
if(cljs.core.truth_(puzzle_roguelike.map.stairs_down_QMARK_.call(null,map,x,y))){
return puzzle_roguelike.state.new_level.call(null,puzzle_roguelike.core.display_message.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"floor","floor",1882041021),next_floor),[cljs.core.str("You descend the stairs... [floor "),cljs.core.str(next_floor),cljs.core.str("]")].join('')),next_floor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return state;
}
}));
/**
 * Checks if the current ui/state should be updated (i.e. game over, new game, etc)
 */
puzzle_roguelike.core.check_for_next_state = (function puzzle_roguelike$core$check_for_next_state(state){
var zero_QMARK_ = (function (p1__66252_SHARP_){
return (cljs.core.get_in.call(null,state,p1__66252_SHARP_) <= (0));
});
var no_hp_QMARK_ = zero_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null));
var starved_QMARK_ = zero_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"food","food",1842183121)], null));
var dead_QMARK_ = (function (){var or__16826__auto__ = no_hp_QMARK_;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return starved_QMARK_;
}
})();
if(cljs.core.truth_(starved_QMARK_)){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-ui","current-ui",-1846031844),new cljs.core.Keyword(null,"game-over","game-over",-607322695)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"cause-of-death","cause-of-death",-887003024)], null),"hunger");
} else {
if(cljs.core.truth_(no_hp_QMARK_)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-ui","current-ui",-1846031844),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
if(cljs.core.truth_(dead_QMARK_)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-ui","current-ui",-1846031844),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
return state;

}
}
}
});
/**
 * Main game event dispatcher. Listen to events on in-chan and dispatch accordingly
 */
puzzle_roguelike.core.run_event_loop = (function puzzle_roguelike$core$run_event_loop(in_chan){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_66302){
var state_val_66303 = (state_66302[(1)]);
if((state_val_66303 === (1))){
var state_66302__$1 = state_66302;
var statearr_66304_66319 = state_66302__$1;
(statearr_66304_66319[(2)] = null);

(statearr_66304_66319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66303 === (2))){
var state_66302__$1 = state_66302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66302__$1,(4),in_chan);
} else {
if((state_val_66303 === (3))){
var inst_66300 = (state_66302[(2)]);
var state_66302__$1 = state_66302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66302__$1,inst_66300);
} else {
if((state_val_66303 === (4))){
var inst_66288 = (state_66302[(7)]);
var inst_66288__$1 = (state_66302[(2)]);
var inst_66289 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_66288__$1);
var state_66302__$1 = (function (){var statearr_66305 = state_66302;
(statearr_66305[(7)] = inst_66288__$1);

return statearr_66305;
})();
if(cljs.core.truth_(inst_66289)){
var statearr_66306_66320 = state_66302__$1;
(statearr_66306_66320[(1)] = (5));

} else {
var statearr_66307_66321 = state_66302__$1;
(statearr_66307_66321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66303 === (5))){
var inst_66288 = (state_66302[(7)]);
var inst_66291 = cljs.core.deref.call(null,puzzle_roguelike.state.game_state);
var inst_66292 = puzzle_roguelike.core.dispatch_event.call(null,inst_66291,inst_66288);
var inst_66293 = puzzle_roguelike.core.check_for_next_state.call(null,inst_66292);
var inst_66294 = cljs.core.reset_BANG_.call(null,puzzle_roguelike.state.game_state,inst_66293);
var state_66302__$1 = state_66302;
var statearr_66308_66322 = state_66302__$1;
(statearr_66308_66322[(2)] = inst_66294);

(statearr_66308_66322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66303 === (6))){
var state_66302__$1 = state_66302;
var statearr_66309_66323 = state_66302__$1;
(statearr_66309_66323[(2)] = null);

(statearr_66309_66323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66303 === (7))){
var inst_66297 = (state_66302[(2)]);
var state_66302__$1 = (function (){var statearr_66310 = state_66302;
(statearr_66310[(8)] = inst_66297);

return statearr_66310;
})();
var statearr_66311_66324 = state_66302__$1;
(statearr_66311_66324[(2)] = null);

(statearr_66311_66324[(1)] = (2));


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
var statearr_66315 = [null,null,null,null,null,null,null,null,null];
(statearr_66315[(0)] = puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__);

(statearr_66315[(1)] = (1));

return statearr_66315;
});
var puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____1 = (function (state_66302){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_66302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e66316){if((e66316 instanceof Object)){
var ex__18907__auto__ = e66316;
var statearr_66317_66325 = state_66302;
(statearr_66317_66325[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66326 = state_66302;
state_66302 = G__66326;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__ = function(state_66302){
switch(arguments.length){
case 0:
return puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____0.call(this);
case 1:
return puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____1.call(this,state_66302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____0;
puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto____1;
return puzzle_roguelike$core$run_event_loop_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_66318 = f__18925__auto__.call(null);
(statearr_66318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_66318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
puzzle_roguelike.core.display_ui = (function puzzle_roguelike$core$display_ui(p__66327){
var map__66333 = p__66327;
var map__66333__$1 = ((((!((map__66333 == null)))?((((map__66333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66333):map__66333);
var player = cljs.core.get.call(null,map__66333__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var floor = cljs.core.get.call(null,map__66333__$1,new cljs.core.Keyword(null,"floor","floor",1882041021));
var tiles = cljs.core.get.call(null,map__66333__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var enemies = cljs.core.get.call(null,map__66333__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
var items = cljs.core.get.call(null,map__66333__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var position = cljs.core.get.call(null,map__66333__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var messages = cljs.core.get.call(null,map__66333__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var pred__66335 = cljs.core._EQ_;
var expr__66336 = new cljs.core.Keyword(null,"current-ui","current-ui",-1846031844).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state));
if(cljs.core.truth_(pred__66335.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),expr__66336))){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.game_play,puzzle_roguelike.core.events_chan,player,floor,tiles,enemies,items,position,cljs.core.take.call(null,(8),messages)], null);
} else {
if(cljs.core.truth_(pred__66335.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),expr__66336))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.game_over,player,floor], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__66336)].join('')));
}
}
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
var enemies = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state));
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state));
var messages = cljs.core.take.call(null,(8),new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,puzzle_roguelike.state.game_state)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"this game has no title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.core.display_ui,cljs.core.deref.call(null,puzzle_roguelike.state.game_state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tileset-link","a.tileset-link",-1270388300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://oryxdesignlab.com/ultimate/"], null),"Tileset images from here"], null)], null);
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.core.game_container], null),document.getElementById("app"));
puzzle_roguelike.core.on_js_reload = (function puzzle_roguelike$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1454508981984