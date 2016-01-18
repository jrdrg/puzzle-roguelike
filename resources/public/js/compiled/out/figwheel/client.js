// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__66347 = cljs.core._EQ_;
var expr__66348 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__66347.call(null,"true",expr__66348))){
return true;
} else {
if(cljs.core.truth_(pred__66347.call(null,"false",expr__66348))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__66348)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__66350__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__66350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66351__i = 0, G__66351__a = new Array(arguments.length -  0);
while (G__66351__i < G__66351__a.length) {G__66351__a[G__66351__i] = arguments[G__66351__i + 0]; ++G__66351__i;}
  args = new cljs.core.IndexedSeq(G__66351__a,0);
} 
return G__66350__delegate.call(this,args);};
G__66350.cljs$lang$maxFixedArity = 0;
G__66350.cljs$lang$applyTo = (function (arglist__66352){
var args = cljs.core.seq(arglist__66352);
return G__66350__delegate(args);
});
G__66350.cljs$core$IFn$_invoke$arity$variadic = G__66350__delegate;
return G__66350;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__66353){
var map__66356 = p__66353;
var map__66356__$1 = ((((!((map__66356 == null)))?((((map__66356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66356):map__66356);
var message = cljs.core.get.call(null,map__66356__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__66356__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18924__auto___66518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___66518,ch){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___66518,ch){
return (function (state_66487){
var state_val_66488 = (state_66487[(1)]);
if((state_val_66488 === (7))){
var inst_66483 = (state_66487[(2)]);
var state_66487__$1 = state_66487;
var statearr_66489_66519 = state_66487__$1;
(statearr_66489_66519[(2)] = inst_66483);

(statearr_66489_66519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (1))){
var state_66487__$1 = state_66487;
var statearr_66490_66520 = state_66487__$1;
(statearr_66490_66520[(2)] = null);

(statearr_66490_66520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (4))){
var inst_66440 = (state_66487[(7)]);
var inst_66440__$1 = (state_66487[(2)]);
var state_66487__$1 = (function (){var statearr_66491 = state_66487;
(statearr_66491[(7)] = inst_66440__$1);

return statearr_66491;
})();
if(cljs.core.truth_(inst_66440__$1)){
var statearr_66492_66521 = state_66487__$1;
(statearr_66492_66521[(1)] = (5));

} else {
var statearr_66493_66522 = state_66487__$1;
(statearr_66493_66522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (15))){
var inst_66447 = (state_66487[(8)]);
var inst_66462 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_66447);
var inst_66463 = cljs.core.first.call(null,inst_66462);
var inst_66464 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_66463);
var inst_66465 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_66464)].join('');
var inst_66466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_66465);
var state_66487__$1 = state_66487;
var statearr_66494_66523 = state_66487__$1;
(statearr_66494_66523[(2)] = inst_66466);

(statearr_66494_66523[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (13))){
var inst_66471 = (state_66487[(2)]);
var state_66487__$1 = state_66487;
var statearr_66495_66524 = state_66487__$1;
(statearr_66495_66524[(2)] = inst_66471);

(statearr_66495_66524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (6))){
var state_66487__$1 = state_66487;
var statearr_66496_66525 = state_66487__$1;
(statearr_66496_66525[(2)] = null);

(statearr_66496_66525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (17))){
var inst_66469 = (state_66487[(2)]);
var state_66487__$1 = state_66487;
var statearr_66497_66526 = state_66487__$1;
(statearr_66497_66526[(2)] = inst_66469);

(statearr_66497_66526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (3))){
var inst_66485 = (state_66487[(2)]);
var state_66487__$1 = state_66487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66487__$1,inst_66485);
} else {
if((state_val_66488 === (12))){
var inst_66446 = (state_66487[(9)]);
var inst_66460 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_66446,opts);
var state_66487__$1 = state_66487;
if(cljs.core.truth_(inst_66460)){
var statearr_66498_66527 = state_66487__$1;
(statearr_66498_66527[(1)] = (15));

} else {
var statearr_66499_66528 = state_66487__$1;
(statearr_66499_66528[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (2))){
var state_66487__$1 = state_66487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66487__$1,(4),ch);
} else {
if((state_val_66488 === (11))){
var inst_66447 = (state_66487[(8)]);
var inst_66452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66453 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_66447);
var inst_66454 = cljs.core.async.timeout.call(null,(1000));
var inst_66455 = [inst_66453,inst_66454];
var inst_66456 = (new cljs.core.PersistentVector(null,2,(5),inst_66452,inst_66455,null));
var state_66487__$1 = state_66487;
return cljs.core.async.ioc_alts_BANG_.call(null,state_66487__$1,(14),inst_66456);
} else {
if((state_val_66488 === (9))){
var inst_66447 = (state_66487[(8)]);
var inst_66473 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_66474 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_66447);
var inst_66475 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66474);
var inst_66476 = [cljs.core.str("Not loading: "),cljs.core.str(inst_66475)].join('');
var inst_66477 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_66476);
var state_66487__$1 = (function (){var statearr_66500 = state_66487;
(statearr_66500[(10)] = inst_66473);

return statearr_66500;
})();
var statearr_66501_66529 = state_66487__$1;
(statearr_66501_66529[(2)] = inst_66477);

(statearr_66501_66529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (5))){
var inst_66440 = (state_66487[(7)]);
var inst_66442 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_66443 = (new cljs.core.PersistentArrayMap(null,2,inst_66442,null));
var inst_66444 = (new cljs.core.PersistentHashSet(null,inst_66443,null));
var inst_66445 = figwheel.client.focus_msgs.call(null,inst_66444,inst_66440);
var inst_66446 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_66445);
var inst_66447 = cljs.core.first.call(null,inst_66445);
var inst_66448 = figwheel.client.autoload_QMARK_.call(null);
var state_66487__$1 = (function (){var statearr_66502 = state_66487;
(statearr_66502[(8)] = inst_66447);

(statearr_66502[(9)] = inst_66446);

return statearr_66502;
})();
if(cljs.core.truth_(inst_66448)){
var statearr_66503_66530 = state_66487__$1;
(statearr_66503_66530[(1)] = (8));

} else {
var statearr_66504_66531 = state_66487__$1;
(statearr_66504_66531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (14))){
var inst_66458 = (state_66487[(2)]);
var state_66487__$1 = state_66487;
var statearr_66505_66532 = state_66487__$1;
(statearr_66505_66532[(2)] = inst_66458);

(statearr_66505_66532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (16))){
var state_66487__$1 = state_66487;
var statearr_66506_66533 = state_66487__$1;
(statearr_66506_66533[(2)] = null);

(statearr_66506_66533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (10))){
var inst_66479 = (state_66487[(2)]);
var state_66487__$1 = (function (){var statearr_66507 = state_66487;
(statearr_66507[(11)] = inst_66479);

return statearr_66507;
})();
var statearr_66508_66534 = state_66487__$1;
(statearr_66508_66534[(2)] = null);

(statearr_66508_66534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66488 === (8))){
var inst_66446 = (state_66487[(9)]);
var inst_66450 = figwheel.client.reload_file_state_QMARK_.call(null,inst_66446,opts);
var state_66487__$1 = state_66487;
if(cljs.core.truth_(inst_66450)){
var statearr_66509_66535 = state_66487__$1;
(statearr_66509_66535[(1)] = (11));

} else {
var statearr_66510_66536 = state_66487__$1;
(statearr_66510_66536[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
});})(c__18924__auto___66518,ch))
;
return ((function (switch__18903__auto__,c__18924__auto___66518,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____0 = (function (){
var statearr_66514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66514[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__);

(statearr_66514[(1)] = (1));

return statearr_66514;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____1 = (function (state_66487){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_66487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e66515){if((e66515 instanceof Object)){
var ex__18907__auto__ = e66515;
var statearr_66516_66537 = state_66487;
(statearr_66516_66537[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66538 = state_66487;
state_66487 = G__66538;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__ = function(state_66487){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____1.call(this,state_66487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___66518,ch))
})();
var state__18926__auto__ = (function (){var statearr_66517 = f__18925__auto__.call(null);
(statearr_66517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___66518);

return statearr_66517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___66518,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__66539_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__66539_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_66546 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_66546){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_66544 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_66545 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_66544,_STAR_print_newline_STAR_66545,base_path_66546){
return (function() { 
var G__66547__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__66547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66548__i = 0, G__66548__a = new Array(arguments.length -  0);
while (G__66548__i < G__66548__a.length) {G__66548__a[G__66548__i] = arguments[G__66548__i + 0]; ++G__66548__i;}
  args = new cljs.core.IndexedSeq(G__66548__a,0);
} 
return G__66547__delegate.call(this,args);};
G__66547.cljs$lang$maxFixedArity = 0;
G__66547.cljs$lang$applyTo = (function (arglist__66549){
var args = cljs.core.seq(arglist__66549);
return G__66547__delegate(args);
});
G__66547.cljs$core$IFn$_invoke$arity$variadic = G__66547__delegate;
return G__66547;
})()
;})(_STAR_print_fn_STAR_66544,_STAR_print_newline_STAR_66545,base_path_66546))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_66545;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_66544;
}}catch (e66543){if((e66543 instanceof Error)){
var e = e66543;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_66546], null));
} else {
var e = e66543;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_66546))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__66550){
var map__66557 = p__66550;
var map__66557__$1 = ((((!((map__66557 == null)))?((((map__66557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66557):map__66557);
var opts = map__66557__$1;
var build_id = cljs.core.get.call(null,map__66557__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__66557,map__66557__$1,opts,build_id){
return (function (p__66559){
var vec__66560 = p__66559;
var map__66561 = cljs.core.nth.call(null,vec__66560,(0),null);
var map__66561__$1 = ((((!((map__66561 == null)))?((((map__66561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66561):map__66561);
var msg = map__66561__$1;
var msg_name = cljs.core.get.call(null,map__66561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__66560,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__66560,map__66561,map__66561__$1,msg,msg_name,_,map__66557,map__66557__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__66560,map__66561,map__66561__$1,msg,msg_name,_,map__66557,map__66557__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__66557,map__66557__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__66567){
var vec__66568 = p__66567;
var map__66569 = cljs.core.nth.call(null,vec__66568,(0),null);
var map__66569__$1 = ((((!((map__66569 == null)))?((((map__66569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66569):map__66569);
var msg = map__66569__$1;
var msg_name = cljs.core.get.call(null,map__66569__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__66568,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__66571){
var map__66581 = p__66571;
var map__66581__$1 = ((((!((map__66581 == null)))?((((map__66581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66581):map__66581);
var on_compile_warning = cljs.core.get.call(null,map__66581__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__66581__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__66581,map__66581__$1,on_compile_warning,on_compile_fail){
return (function (p__66583){
var vec__66584 = p__66583;
var map__66585 = cljs.core.nth.call(null,vec__66584,(0),null);
var map__66585__$1 = ((((!((map__66585 == null)))?((((map__66585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66585):map__66585);
var msg = map__66585__$1;
var msg_name = cljs.core.get.call(null,map__66585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__66584,(1));
var pred__66587 = cljs.core._EQ_;
var expr__66588 = msg_name;
if(cljs.core.truth_(pred__66587.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__66588))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__66587.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__66588))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__66581,map__66581__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__,msg_hist,msg_names,msg){
return (function (state_66804){
var state_val_66805 = (state_66804[(1)]);
if((state_val_66805 === (7))){
var inst_66728 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66728)){
var statearr_66806_66852 = state_66804__$1;
(statearr_66806_66852[(1)] = (8));

} else {
var statearr_66807_66853 = state_66804__$1;
(statearr_66807_66853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (20))){
var inst_66798 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66808_66854 = state_66804__$1;
(statearr_66808_66854[(2)] = inst_66798);

(statearr_66808_66854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (27))){
var inst_66794 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66809_66855 = state_66804__$1;
(statearr_66809_66855[(2)] = inst_66794);

(statearr_66809_66855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (1))){
var inst_66721 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66721)){
var statearr_66810_66856 = state_66804__$1;
(statearr_66810_66856[(1)] = (2));

} else {
var statearr_66811_66857 = state_66804__$1;
(statearr_66811_66857[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (24))){
var inst_66796 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66812_66858 = state_66804__$1;
(statearr_66812_66858[(2)] = inst_66796);

(statearr_66812_66858[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (4))){
var inst_66802 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66804__$1,inst_66802);
} else {
if((state_val_66805 === (15))){
var inst_66800 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66813_66859 = state_66804__$1;
(statearr_66813_66859[(2)] = inst_66800);

(statearr_66813_66859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (21))){
var inst_66759 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66814_66860 = state_66804__$1;
(statearr_66814_66860[(2)] = inst_66759);

(statearr_66814_66860[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (31))){
var inst_66783 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66783)){
var statearr_66815_66861 = state_66804__$1;
(statearr_66815_66861[(1)] = (34));

} else {
var statearr_66816_66862 = state_66804__$1;
(statearr_66816_66862[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (32))){
var inst_66792 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66817_66863 = state_66804__$1;
(statearr_66817_66863[(2)] = inst_66792);

(statearr_66817_66863[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (33))){
var inst_66781 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66818_66864 = state_66804__$1;
(statearr_66818_66864[(2)] = inst_66781);

(statearr_66818_66864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (13))){
var inst_66742 = figwheel.client.heads_up.clear.call(null);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(16),inst_66742);
} else {
if((state_val_66805 === (22))){
var inst_66763 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66764 = figwheel.client.heads_up.append_message.call(null,inst_66763);
var state_66804__$1 = state_66804;
var statearr_66819_66865 = state_66804__$1;
(statearr_66819_66865[(2)] = inst_66764);

(statearr_66819_66865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (36))){
var inst_66790 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66820_66866 = state_66804__$1;
(statearr_66820_66866[(2)] = inst_66790);

(statearr_66820_66866[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (29))){
var inst_66774 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66821_66867 = state_66804__$1;
(statearr_66821_66867[(2)] = inst_66774);

(statearr_66821_66867[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (6))){
var inst_66723 = (state_66804[(7)]);
var state_66804__$1 = state_66804;
var statearr_66822_66868 = state_66804__$1;
(statearr_66822_66868[(2)] = inst_66723);

(statearr_66822_66868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (28))){
var inst_66770 = (state_66804[(2)]);
var inst_66771 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66772 = figwheel.client.heads_up.display_warning.call(null,inst_66771);
var state_66804__$1 = (function (){var statearr_66823 = state_66804;
(statearr_66823[(8)] = inst_66770);

return statearr_66823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(29),inst_66772);
} else {
if((state_val_66805 === (25))){
var inst_66768 = figwheel.client.heads_up.clear.call(null);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(28),inst_66768);
} else {
if((state_val_66805 === (34))){
var inst_66785 = figwheel.client.heads_up.flash_loaded.call(null);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(37),inst_66785);
} else {
if((state_val_66805 === (17))){
var inst_66750 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66824_66869 = state_66804__$1;
(statearr_66824_66869[(2)] = inst_66750);

(statearr_66824_66869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (3))){
var inst_66740 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66740)){
var statearr_66825_66870 = state_66804__$1;
(statearr_66825_66870[(1)] = (13));

} else {
var statearr_66826_66871 = state_66804__$1;
(statearr_66826_66871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (12))){
var inst_66736 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66827_66872 = state_66804__$1;
(statearr_66827_66872[(2)] = inst_66736);

(statearr_66827_66872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (2))){
var inst_66723 = (state_66804[(7)]);
var inst_66723__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_66804__$1 = (function (){var statearr_66828 = state_66804;
(statearr_66828[(7)] = inst_66723__$1);

return statearr_66828;
})();
if(cljs.core.truth_(inst_66723__$1)){
var statearr_66829_66873 = state_66804__$1;
(statearr_66829_66873[(1)] = (5));

} else {
var statearr_66830_66874 = state_66804__$1;
(statearr_66830_66874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (23))){
var inst_66766 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66766)){
var statearr_66831_66875 = state_66804__$1;
(statearr_66831_66875[(1)] = (25));

} else {
var statearr_66832_66876 = state_66804__$1;
(statearr_66832_66876[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (35))){
var state_66804__$1 = state_66804;
var statearr_66833_66877 = state_66804__$1;
(statearr_66833_66877[(2)] = null);

(statearr_66833_66877[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (19))){
var inst_66761 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66761)){
var statearr_66834_66878 = state_66804__$1;
(statearr_66834_66878[(1)] = (22));

} else {
var statearr_66835_66879 = state_66804__$1;
(statearr_66835_66879[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (11))){
var inst_66732 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66836_66880 = state_66804__$1;
(statearr_66836_66880[(2)] = inst_66732);

(statearr_66836_66880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (9))){
var inst_66734 = figwheel.client.heads_up.clear.call(null);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(12),inst_66734);
} else {
if((state_val_66805 === (5))){
var inst_66725 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_66804__$1 = state_66804;
var statearr_66837_66881 = state_66804__$1;
(statearr_66837_66881[(2)] = inst_66725);

(statearr_66837_66881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (14))){
var inst_66752 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66752)){
var statearr_66838_66882 = state_66804__$1;
(statearr_66838_66882[(1)] = (18));

} else {
var statearr_66839_66883 = state_66804__$1;
(statearr_66839_66883[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (26))){
var inst_66776 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_66804__$1 = state_66804;
if(cljs.core.truth_(inst_66776)){
var statearr_66840_66884 = state_66804__$1;
(statearr_66840_66884[(1)] = (30));

} else {
var statearr_66841_66885 = state_66804__$1;
(statearr_66841_66885[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (16))){
var inst_66744 = (state_66804[(2)]);
var inst_66745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66746 = figwheel.client.format_messages.call(null,inst_66745);
var inst_66747 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66748 = figwheel.client.heads_up.display_error.call(null,inst_66746,inst_66747);
var state_66804__$1 = (function (){var statearr_66842 = state_66804;
(statearr_66842[(9)] = inst_66744);

return statearr_66842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(17),inst_66748);
} else {
if((state_val_66805 === (30))){
var inst_66778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66779 = figwheel.client.heads_up.display_warning.call(null,inst_66778);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(33),inst_66779);
} else {
if((state_val_66805 === (10))){
var inst_66738 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66843_66886 = state_66804__$1;
(statearr_66843_66886[(2)] = inst_66738);

(statearr_66843_66886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (18))){
var inst_66754 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66755 = figwheel.client.format_messages.call(null,inst_66754);
var inst_66756 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66757 = figwheel.client.heads_up.display_error.call(null,inst_66755,inst_66756);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(21),inst_66757);
} else {
if((state_val_66805 === (37))){
var inst_66787 = (state_66804[(2)]);
var state_66804__$1 = state_66804;
var statearr_66844_66887 = state_66804__$1;
(statearr_66844_66887[(2)] = inst_66787);

(statearr_66844_66887[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66805 === (8))){
var inst_66730 = figwheel.client.heads_up.flash_loaded.call(null);
var state_66804__$1 = state_66804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66804__$1,(11),inst_66730);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18924__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18903__auto__,c__18924__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____0 = (function (){
var statearr_66848 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66848[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__);

(statearr_66848[(1)] = (1));

return statearr_66848;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____1 = (function (state_66804){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_66804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e66849){if((e66849 instanceof Object)){
var ex__18907__auto__ = e66849;
var statearr_66850_66888 = state_66804;
(statearr_66850_66888[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66889 = state_66804;
state_66804 = G__66889;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__ = function(state_66804){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____1.call(this,state_66804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__,msg_hist,msg_names,msg))
})();
var state__18926__auto__ = (function (){var statearr_66851 = f__18925__auto__.call(null);
(statearr_66851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_66851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__,msg_hist,msg_names,msg))
);

return c__18924__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18924__auto___66952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___66952,ch){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___66952,ch){
return (function (state_66935){
var state_val_66936 = (state_66935[(1)]);
if((state_val_66936 === (1))){
var state_66935__$1 = state_66935;
var statearr_66937_66953 = state_66935__$1;
(statearr_66937_66953[(2)] = null);

(statearr_66937_66953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66936 === (2))){
var state_66935__$1 = state_66935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66935__$1,(4),ch);
} else {
if((state_val_66936 === (3))){
var inst_66933 = (state_66935[(2)]);
var state_66935__$1 = state_66935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66935__$1,inst_66933);
} else {
if((state_val_66936 === (4))){
var inst_66923 = (state_66935[(7)]);
var inst_66923__$1 = (state_66935[(2)]);
var state_66935__$1 = (function (){var statearr_66938 = state_66935;
(statearr_66938[(7)] = inst_66923__$1);

return statearr_66938;
})();
if(cljs.core.truth_(inst_66923__$1)){
var statearr_66939_66954 = state_66935__$1;
(statearr_66939_66954[(1)] = (5));

} else {
var statearr_66940_66955 = state_66935__$1;
(statearr_66940_66955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66936 === (5))){
var inst_66923 = (state_66935[(7)]);
var inst_66925 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_66923);
var state_66935__$1 = state_66935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66935__$1,(8),inst_66925);
} else {
if((state_val_66936 === (6))){
var state_66935__$1 = state_66935;
var statearr_66941_66956 = state_66935__$1;
(statearr_66941_66956[(2)] = null);

(statearr_66941_66956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66936 === (7))){
var inst_66931 = (state_66935[(2)]);
var state_66935__$1 = state_66935;
var statearr_66942_66957 = state_66935__$1;
(statearr_66942_66957[(2)] = inst_66931);

(statearr_66942_66957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66936 === (8))){
var inst_66927 = (state_66935[(2)]);
var state_66935__$1 = (function (){var statearr_66943 = state_66935;
(statearr_66943[(8)] = inst_66927);

return statearr_66943;
})();
var statearr_66944_66958 = state_66935__$1;
(statearr_66944_66958[(2)] = null);

(statearr_66944_66958[(1)] = (2));


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
}
});})(c__18924__auto___66952,ch))
;
return ((function (switch__18903__auto__,c__18924__auto___66952,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18904__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18904__auto____0 = (function (){
var statearr_66948 = [null,null,null,null,null,null,null,null,null];
(statearr_66948[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18904__auto__);

(statearr_66948[(1)] = (1));

return statearr_66948;
});
var figwheel$client$heads_up_plugin_$_state_machine__18904__auto____1 = (function (state_66935){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_66935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e66949){if((e66949 instanceof Object)){
var ex__18907__auto__ = e66949;
var statearr_66950_66959 = state_66935;
(statearr_66950_66959[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66960 = state_66935;
state_66935 = G__66960;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18904__auto__ = function(state_66935){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18904__auto____1.call(this,state_66935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18904__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18904__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___66952,ch))
})();
var state__18926__auto__ = (function (){var statearr_66951 = f__18925__auto__.call(null);
(statearr_66951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___66952);

return statearr_66951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___66952,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_66981){
var state_val_66982 = (state_66981[(1)]);
if((state_val_66982 === (1))){
var inst_66976 = cljs.core.async.timeout.call(null,(3000));
var state_66981__$1 = state_66981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66981__$1,(2),inst_66976);
} else {
if((state_val_66982 === (2))){
var inst_66978 = (state_66981[(2)]);
var inst_66979 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_66981__$1 = (function (){var statearr_66983 = state_66981;
(statearr_66983[(7)] = inst_66978);

return statearr_66983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66981__$1,inst_66979);
} else {
return null;
}
}
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____0 = (function (){
var statearr_66987 = [null,null,null,null,null,null,null,null];
(statearr_66987[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__);

(statearr_66987[(1)] = (1));

return statearr_66987;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____1 = (function (state_66981){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_66981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e66988){if((e66988 instanceof Object)){
var ex__18907__auto__ = e66988;
var statearr_66989_66991 = state_66981;
(statearr_66989_66991[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66992 = state_66981;
state_66981 = G__66992;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__ = function(state_66981){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____1.call(this,state_66981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_66990 = f__18925__auto__.call(null);
(statearr_66990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_66990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__66993){
var map__67000 = p__66993;
var map__67000__$1 = ((((!((map__67000 == null)))?((((map__67000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67000):map__67000);
var ed = map__67000__$1;
var formatted_exception = cljs.core.get.call(null,map__67000__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__67000__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__67000__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__67002_67006 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__67003_67007 = null;
var count__67004_67008 = (0);
var i__67005_67009 = (0);
while(true){
if((i__67005_67009 < count__67004_67008)){
var msg_67010 = cljs.core._nth.call(null,chunk__67003_67007,i__67005_67009);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67010);

var G__67011 = seq__67002_67006;
var G__67012 = chunk__67003_67007;
var G__67013 = count__67004_67008;
var G__67014 = (i__67005_67009 + (1));
seq__67002_67006 = G__67011;
chunk__67003_67007 = G__67012;
count__67004_67008 = G__67013;
i__67005_67009 = G__67014;
continue;
} else {
var temp__4425__auto___67015 = cljs.core.seq.call(null,seq__67002_67006);
if(temp__4425__auto___67015){
var seq__67002_67016__$1 = temp__4425__auto___67015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67002_67016__$1)){
var c__17629__auto___67017 = cljs.core.chunk_first.call(null,seq__67002_67016__$1);
var G__67018 = cljs.core.chunk_rest.call(null,seq__67002_67016__$1);
var G__67019 = c__17629__auto___67017;
var G__67020 = cljs.core.count.call(null,c__17629__auto___67017);
var G__67021 = (0);
seq__67002_67006 = G__67018;
chunk__67003_67007 = G__67019;
count__67004_67008 = G__67020;
i__67005_67009 = G__67021;
continue;
} else {
var msg_67022 = cljs.core.first.call(null,seq__67002_67016__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67022);

var G__67023 = cljs.core.next.call(null,seq__67002_67016__$1);
var G__67024 = null;
var G__67025 = (0);
var G__67026 = (0);
seq__67002_67006 = G__67023;
chunk__67003_67007 = G__67024;
count__67004_67008 = G__67025;
i__67005_67009 = G__67026;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__67027){
var map__67030 = p__67027;
var map__67030__$1 = ((((!((map__67030 == null)))?((((map__67030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67030):map__67030);
var w = map__67030__$1;
var message = cljs.core.get.call(null,map__67030__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__67038 = cljs.core.seq.call(null,plugins);
var chunk__67039 = null;
var count__67040 = (0);
var i__67041 = (0);
while(true){
if((i__67041 < count__67040)){
var vec__67042 = cljs.core._nth.call(null,chunk__67039,i__67041);
var k = cljs.core.nth.call(null,vec__67042,(0),null);
var plugin = cljs.core.nth.call(null,vec__67042,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67044 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67038,chunk__67039,count__67040,i__67041,pl_67044,vec__67042,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_67044.call(null,msg_hist);
});})(seq__67038,chunk__67039,count__67040,i__67041,pl_67044,vec__67042,k,plugin))
);
} else {
}

var G__67045 = seq__67038;
var G__67046 = chunk__67039;
var G__67047 = count__67040;
var G__67048 = (i__67041 + (1));
seq__67038 = G__67045;
chunk__67039 = G__67046;
count__67040 = G__67047;
i__67041 = G__67048;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__67038);
if(temp__4425__auto__){
var seq__67038__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67038__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__67038__$1);
var G__67049 = cljs.core.chunk_rest.call(null,seq__67038__$1);
var G__67050 = c__17629__auto__;
var G__67051 = cljs.core.count.call(null,c__17629__auto__);
var G__67052 = (0);
seq__67038 = G__67049;
chunk__67039 = G__67050;
count__67040 = G__67051;
i__67041 = G__67052;
continue;
} else {
var vec__67043 = cljs.core.first.call(null,seq__67038__$1);
var k = cljs.core.nth.call(null,vec__67043,(0),null);
var plugin = cljs.core.nth.call(null,vec__67043,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67038,chunk__67039,count__67040,i__67041,pl_67053,vec__67043,k,plugin,seq__67038__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_67053.call(null,msg_hist);
});})(seq__67038,chunk__67039,count__67040,i__67041,pl_67053,vec__67043,k,plugin,seq__67038__$1,temp__4425__auto__))
);
} else {
}

var G__67054 = cljs.core.next.call(null,seq__67038__$1);
var G__67055 = null;
var G__67056 = (0);
var G__67057 = (0);
seq__67038 = G__67054;
chunk__67039 = G__67055;
count__67040 = G__67056;
i__67041 = G__67057;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args67058 = [];
var len__17884__auto___67061 = arguments.length;
var i__17885__auto___67062 = (0);
while(true){
if((i__17885__auto___67062 < len__17884__auto___67061)){
args67058.push((arguments[i__17885__auto___67062]));

var G__67063 = (i__17885__auto___67062 + (1));
i__17885__auto___67062 = G__67063;
continue;
} else {
}
break;
}

var G__67060 = args67058.length;
switch (G__67060) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67058.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___67069 = arguments.length;
var i__17885__auto___67070 = (0);
while(true){
if((i__17885__auto___67070 < len__17884__auto___67069)){
args__17891__auto__.push((arguments[i__17885__auto___67070]));

var G__67071 = (i__17885__auto___67070 + (1));
i__17885__auto___67070 = G__67071;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__67066){
var map__67067 = p__67066;
var map__67067__$1 = ((((!((map__67067 == null)))?((((map__67067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67067):map__67067);
var opts = map__67067__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq67065){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67065));
});

//# sourceMappingURL=client.js.map?rel=1453136835692