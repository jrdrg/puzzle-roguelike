// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args61559 = [];
var len__17884__auto___61565 = arguments.length;
var i__17885__auto___61566 = (0);
while(true){
if((i__17885__auto___61566 < len__17884__auto___61565)){
args61559.push((arguments[i__17885__auto___61566]));

var G__61567 = (i__17885__auto___61566 + (1));
i__17885__auto___61566 = G__61567;
continue;
} else {
}
break;
}

var G__61561 = args61559.length;
switch (G__61561) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61559.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async61562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61562 = (function (f,blockable,meta61563){
this.f = f;
this.blockable = blockable;
this.meta61563 = meta61563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61564,meta61563__$1){
var self__ = this;
var _61564__$1 = this;
return (new cljs.core.async.t_cljs$core$async61562(self__.f,self__.blockable,meta61563__$1));
});

cljs.core.async.t_cljs$core$async61562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61564){
var self__ = this;
var _61564__$1 = this;
return self__.meta61563;
});

cljs.core.async.t_cljs$core$async61562.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async61562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async61562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async61562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61563","meta61563",186555707,null)], null);
});

cljs.core.async.t_cljs$core$async61562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61562";

cljs.core.async.t_cljs$core$async61562.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async61562");
});

cljs.core.async.__GT_t_cljs$core$async61562 = (function cljs$core$async$__GT_t_cljs$core$async61562(f__$1,blockable__$1,meta61563){
return (new cljs.core.async.t_cljs$core$async61562(f__$1,blockable__$1,meta61563));
});

}

return (new cljs.core.async.t_cljs$core$async61562(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args61571 = [];
var len__17884__auto___61574 = arguments.length;
var i__17885__auto___61575 = (0);
while(true){
if((i__17885__auto___61575 < len__17884__auto___61574)){
args61571.push((arguments[i__17885__auto___61575]));

var G__61576 = (i__17885__auto___61575 + (1));
i__17885__auto___61575 = G__61576;
continue;
} else {
}
break;
}

var G__61573 = args61571.length;
switch (G__61573) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61571.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args61578 = [];
var len__17884__auto___61581 = arguments.length;
var i__17885__auto___61582 = (0);
while(true){
if((i__17885__auto___61582 < len__17884__auto___61581)){
args61578.push((arguments[i__17885__auto___61582]));

var G__61583 = (i__17885__auto___61582 + (1));
i__17885__auto___61582 = G__61583;
continue;
} else {
}
break;
}

var G__61580 = args61578.length;
switch (G__61580) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61578.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args61585 = [];
var len__17884__auto___61588 = arguments.length;
var i__17885__auto___61589 = (0);
while(true){
if((i__17885__auto___61589 < len__17884__auto___61588)){
args61585.push((arguments[i__17885__auto___61589]));

var G__61590 = (i__17885__auto___61589 + (1));
i__17885__auto___61589 = G__61590;
continue;
} else {
}
break;
}

var G__61587 = args61585.length;
switch (G__61587) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61585.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_61592 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_61592);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_61592,ret){
return (function (){
return fn1.call(null,val_61592);
});})(val_61592,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args61593 = [];
var len__17884__auto___61596 = arguments.length;
var i__17885__auto___61597 = (0);
while(true){
if((i__17885__auto___61597 < len__17884__auto___61596)){
args61593.push((arguments[i__17885__auto___61597]));

var G__61598 = (i__17885__auto___61597 + (1));
i__17885__auto___61597 = G__61598;
continue;
} else {
}
break;
}

var G__61595 = args61593.length;
switch (G__61595) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61593.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___61600 = n;
var x_61601 = (0);
while(true){
if((x_61601 < n__17729__auto___61600)){
(a[x_61601] = (0));

var G__61602 = (x_61601 + (1));
x_61601 = G__61602;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__61603 = (i + (1));
i = G__61603;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async61607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61607 = (function (alt_flag,flag,meta61608){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta61608 = meta61608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_61609,meta61608__$1){
var self__ = this;
var _61609__$1 = this;
return (new cljs.core.async.t_cljs$core$async61607(self__.alt_flag,self__.flag,meta61608__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_61609){
var self__ = this;
var _61609__$1 = this;
return self__.meta61608;
});})(flag))
;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61607.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61608","meta61608",969474768,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async61607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61607";

cljs.core.async.t_cljs$core$async61607.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async61607");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async61607 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61607(alt_flag__$1,flag__$1,meta61608){
return (new cljs.core.async.t_cljs$core$async61607(alt_flag__$1,flag__$1,meta61608));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async61607(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async61613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61613 = (function (alt_handler,flag,cb,meta61614){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta61614 = meta61614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61615,meta61614__$1){
var self__ = this;
var _61615__$1 = this;
return (new cljs.core.async.t_cljs$core$async61613(self__.alt_handler,self__.flag,self__.cb,meta61614__$1));
});

cljs.core.async.t_cljs$core$async61613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61615){
var self__ = this;
var _61615__$1 = this;
return self__.meta61614;
});

cljs.core.async.t_cljs$core$async61613.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async61613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async61613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async61613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61614","meta61614",994230935,null)], null);
});

cljs.core.async.t_cljs$core$async61613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61613";

cljs.core.async.t_cljs$core$async61613.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async61613");
});

cljs.core.async.__GT_t_cljs$core$async61613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61613(alt_handler__$1,flag__$1,cb__$1,meta61614){
return (new cljs.core.async.t_cljs$core$async61613(alt_handler__$1,flag__$1,cb__$1,meta61614));
});

}

return (new cljs.core.async.t_cljs$core$async61613(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61616_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61617_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__61618 = (i + (1));
i = G__61618;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___61624 = arguments.length;
var i__17885__auto___61625 = (0);
while(true){
if((i__17885__auto___61625 < len__17884__auto___61624)){
args__17891__auto__.push((arguments[i__17885__auto___61625]));

var G__61626 = (i__17885__auto___61625 + (1));
i__17885__auto___61625 = G__61626;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61621){
var map__61622 = p__61621;
var map__61622__$1 = ((((!((map__61622 == null)))?((((map__61622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61622):map__61622);
var opts = map__61622__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61619){
var G__61620 = cljs.core.first.call(null,seq61619);
var seq61619__$1 = cljs.core.next.call(null,seq61619);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61620,seq61619__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args61627 = [];
var len__17884__auto___61677 = arguments.length;
var i__17885__auto___61678 = (0);
while(true){
if((i__17885__auto___61678 < len__17884__auto___61677)){
args61627.push((arguments[i__17885__auto___61678]));

var G__61679 = (i__17885__auto___61678 + (1));
i__17885__auto___61678 = G__61679;
continue;
} else {
}
break;
}

var G__61629 = args61627.length;
switch (G__61629) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61627.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18924__auto___61681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___61681){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___61681){
return (function (state_61653){
var state_val_61654 = (state_61653[(1)]);
if((state_val_61654 === (7))){
var inst_61649 = (state_61653[(2)]);
var state_61653__$1 = state_61653;
var statearr_61655_61682 = state_61653__$1;
(statearr_61655_61682[(2)] = inst_61649);

(statearr_61655_61682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (1))){
var state_61653__$1 = state_61653;
var statearr_61656_61683 = state_61653__$1;
(statearr_61656_61683[(2)] = null);

(statearr_61656_61683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (4))){
var inst_61632 = (state_61653[(7)]);
var inst_61632__$1 = (state_61653[(2)]);
var inst_61633 = (inst_61632__$1 == null);
var state_61653__$1 = (function (){var statearr_61657 = state_61653;
(statearr_61657[(7)] = inst_61632__$1);

return statearr_61657;
})();
if(cljs.core.truth_(inst_61633)){
var statearr_61658_61684 = state_61653__$1;
(statearr_61658_61684[(1)] = (5));

} else {
var statearr_61659_61685 = state_61653__$1;
(statearr_61659_61685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (13))){
var state_61653__$1 = state_61653;
var statearr_61660_61686 = state_61653__$1;
(statearr_61660_61686[(2)] = null);

(statearr_61660_61686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (6))){
var inst_61632 = (state_61653[(7)]);
var state_61653__$1 = state_61653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61653__$1,(11),to,inst_61632);
} else {
if((state_val_61654 === (3))){
var inst_61651 = (state_61653[(2)]);
var state_61653__$1 = state_61653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61653__$1,inst_61651);
} else {
if((state_val_61654 === (12))){
var state_61653__$1 = state_61653;
var statearr_61661_61687 = state_61653__$1;
(statearr_61661_61687[(2)] = null);

(statearr_61661_61687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (2))){
var state_61653__$1 = state_61653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61653__$1,(4),from);
} else {
if((state_val_61654 === (11))){
var inst_61642 = (state_61653[(2)]);
var state_61653__$1 = state_61653;
if(cljs.core.truth_(inst_61642)){
var statearr_61662_61688 = state_61653__$1;
(statearr_61662_61688[(1)] = (12));

} else {
var statearr_61663_61689 = state_61653__$1;
(statearr_61663_61689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (9))){
var state_61653__$1 = state_61653;
var statearr_61664_61690 = state_61653__$1;
(statearr_61664_61690[(2)] = null);

(statearr_61664_61690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (5))){
var state_61653__$1 = state_61653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61665_61691 = state_61653__$1;
(statearr_61665_61691[(1)] = (8));

} else {
var statearr_61666_61692 = state_61653__$1;
(statearr_61666_61692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (14))){
var inst_61647 = (state_61653[(2)]);
var state_61653__$1 = state_61653;
var statearr_61667_61693 = state_61653__$1;
(statearr_61667_61693[(2)] = inst_61647);

(statearr_61667_61693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (10))){
var inst_61639 = (state_61653[(2)]);
var state_61653__$1 = state_61653;
var statearr_61668_61694 = state_61653__$1;
(statearr_61668_61694[(2)] = inst_61639);

(statearr_61668_61694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61654 === (8))){
var inst_61636 = cljs.core.async.close_BANG_.call(null,to);
var state_61653__$1 = state_61653;
var statearr_61669_61695 = state_61653__$1;
(statearr_61669_61695[(2)] = inst_61636);

(statearr_61669_61695[(1)] = (10));


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
});})(c__18924__auto___61681))
;
return ((function (switch__18903__auto__,c__18924__auto___61681){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_61673 = [null,null,null,null,null,null,null,null];
(statearr_61673[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_61673[(1)] = (1));

return statearr_61673;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_61653){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_61653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e61674){if((e61674 instanceof Object)){
var ex__18907__auto__ = e61674;
var statearr_61675_61696 = state_61653;
(statearr_61675_61696[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61697 = state_61653;
state_61653 = G__61697;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_61653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_61653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___61681))
})();
var state__18926__auto__ = (function (){var statearr_61676 = f__18925__auto__.call(null);
(statearr_61676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___61681);

return statearr_61676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___61681))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__61881){
var vec__61882 = p__61881;
var v = cljs.core.nth.call(null,vec__61882,(0),null);
var p = cljs.core.nth.call(null,vec__61882,(1),null);
var job = vec__61882;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18924__auto___62064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___62064,res,vec__61882,v,p,job,jobs,results){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___62064,res,vec__61882,v,p,job,jobs,results){
return (function (state_61887){
var state_val_61888 = (state_61887[(1)]);
if((state_val_61888 === (1))){
var state_61887__$1 = state_61887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61887__$1,(2),res,v);
} else {
if((state_val_61888 === (2))){
var inst_61884 = (state_61887[(2)]);
var inst_61885 = cljs.core.async.close_BANG_.call(null,res);
var state_61887__$1 = (function (){var statearr_61889 = state_61887;
(statearr_61889[(7)] = inst_61884);

return statearr_61889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61887__$1,inst_61885);
} else {
return null;
}
}
});})(c__18924__auto___62064,res,vec__61882,v,p,job,jobs,results))
;
return ((function (switch__18903__auto__,c__18924__auto___62064,res,vec__61882,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_61893 = [null,null,null,null,null,null,null,null];
(statearr_61893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_61893[(1)] = (1));

return statearr_61893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_61887){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_61887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e61894){if((e61894 instanceof Object)){
var ex__18907__auto__ = e61894;
var statearr_61895_62065 = state_61887;
(statearr_61895_62065[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62066 = state_61887;
state_61887 = G__62066;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_61887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_61887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___62064,res,vec__61882,v,p,job,jobs,results))
})();
var state__18926__auto__ = (function (){var statearr_61896 = f__18925__auto__.call(null);
(statearr_61896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___62064);

return statearr_61896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___62064,res,vec__61882,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__61897){
var vec__61898 = p__61897;
var v = cljs.core.nth.call(null,vec__61898,(0),null);
var p = cljs.core.nth.call(null,vec__61898,(1),null);
var job = vec__61898;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___62067 = n;
var __62068 = (0);
while(true){
if((__62068 < n__17729__auto___62067)){
var G__61899_62069 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__61899_62069) {
case "compute":
var c__18924__auto___62071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62068,c__18924__auto___62071,G__61899_62069,n__17729__auto___62067,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (__62068,c__18924__auto___62071,G__61899_62069,n__17729__auto___62067,jobs,results,process,async){
return (function (state_61912){
var state_val_61913 = (state_61912[(1)]);
if((state_val_61913 === (1))){
var state_61912__$1 = state_61912;
var statearr_61914_62072 = state_61912__$1;
(statearr_61914_62072[(2)] = null);

(statearr_61914_62072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61913 === (2))){
var state_61912__$1 = state_61912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61912__$1,(4),jobs);
} else {
if((state_val_61913 === (3))){
var inst_61910 = (state_61912[(2)]);
var state_61912__$1 = state_61912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61912__$1,inst_61910);
} else {
if((state_val_61913 === (4))){
var inst_61902 = (state_61912[(2)]);
var inst_61903 = process.call(null,inst_61902);
var state_61912__$1 = state_61912;
if(cljs.core.truth_(inst_61903)){
var statearr_61915_62073 = state_61912__$1;
(statearr_61915_62073[(1)] = (5));

} else {
var statearr_61916_62074 = state_61912__$1;
(statearr_61916_62074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61913 === (5))){
var state_61912__$1 = state_61912;
var statearr_61917_62075 = state_61912__$1;
(statearr_61917_62075[(2)] = null);

(statearr_61917_62075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61913 === (6))){
var state_61912__$1 = state_61912;
var statearr_61918_62076 = state_61912__$1;
(statearr_61918_62076[(2)] = null);

(statearr_61918_62076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61913 === (7))){
var inst_61908 = (state_61912[(2)]);
var state_61912__$1 = state_61912;
var statearr_61919_62077 = state_61912__$1;
(statearr_61919_62077[(2)] = inst_61908);

(statearr_61919_62077[(1)] = (3));


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
});})(__62068,c__18924__auto___62071,G__61899_62069,n__17729__auto___62067,jobs,results,process,async))
;
return ((function (__62068,switch__18903__auto__,c__18924__auto___62071,G__61899_62069,n__17729__auto___62067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_61923 = [null,null,null,null,null,null,null];
(statearr_61923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_61923[(1)] = (1));

return statearr_61923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_61912){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_61912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e61924){if((e61924 instanceof Object)){
var ex__18907__auto__ = e61924;
var statearr_61925_62078 = state_61912;
(statearr_61925_62078[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62079 = state_61912;
state_61912 = G__62079;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_61912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_61912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(__62068,switch__18903__auto__,c__18924__auto___62071,G__61899_62069,n__17729__auto___62067,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_61926 = f__18925__auto__.call(null);
(statearr_61926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___62071);

return statearr_61926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(__62068,c__18924__auto___62071,G__61899_62069,n__17729__auto___62067,jobs,results,process,async))
);


break;
case "async":
var c__18924__auto___62080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62068,c__18924__auto___62080,G__61899_62069,n__17729__auto___62067,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (__62068,c__18924__auto___62080,G__61899_62069,n__17729__auto___62067,jobs,results,process,async){
return (function (state_61939){
var state_val_61940 = (state_61939[(1)]);
if((state_val_61940 === (1))){
var state_61939__$1 = state_61939;
var statearr_61941_62081 = state_61939__$1;
(statearr_61941_62081[(2)] = null);

(statearr_61941_62081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61940 === (2))){
var state_61939__$1 = state_61939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61939__$1,(4),jobs);
} else {
if((state_val_61940 === (3))){
var inst_61937 = (state_61939[(2)]);
var state_61939__$1 = state_61939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61939__$1,inst_61937);
} else {
if((state_val_61940 === (4))){
var inst_61929 = (state_61939[(2)]);
var inst_61930 = async.call(null,inst_61929);
var state_61939__$1 = state_61939;
if(cljs.core.truth_(inst_61930)){
var statearr_61942_62082 = state_61939__$1;
(statearr_61942_62082[(1)] = (5));

} else {
var statearr_61943_62083 = state_61939__$1;
(statearr_61943_62083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61940 === (5))){
var state_61939__$1 = state_61939;
var statearr_61944_62084 = state_61939__$1;
(statearr_61944_62084[(2)] = null);

(statearr_61944_62084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61940 === (6))){
var state_61939__$1 = state_61939;
var statearr_61945_62085 = state_61939__$1;
(statearr_61945_62085[(2)] = null);

(statearr_61945_62085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61940 === (7))){
var inst_61935 = (state_61939[(2)]);
var state_61939__$1 = state_61939;
var statearr_61946_62086 = state_61939__$1;
(statearr_61946_62086[(2)] = inst_61935);

(statearr_61946_62086[(1)] = (3));


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
});})(__62068,c__18924__auto___62080,G__61899_62069,n__17729__auto___62067,jobs,results,process,async))
;
return ((function (__62068,switch__18903__auto__,c__18924__auto___62080,G__61899_62069,n__17729__auto___62067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_61950 = [null,null,null,null,null,null,null];
(statearr_61950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_61950[(1)] = (1));

return statearr_61950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_61939){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_61939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e61951){if((e61951 instanceof Object)){
var ex__18907__auto__ = e61951;
var statearr_61952_62087 = state_61939;
(statearr_61952_62087[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62088 = state_61939;
state_61939 = G__62088;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_61939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_61939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(__62068,switch__18903__auto__,c__18924__auto___62080,G__61899_62069,n__17729__auto___62067,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_61953 = f__18925__auto__.call(null);
(statearr_61953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___62080);

return statearr_61953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(__62068,c__18924__auto___62080,G__61899_62069,n__17729__auto___62067,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__62089 = (__62068 + (1));
__62068 = G__62089;
continue;
} else {
}
break;
}

var c__18924__auto___62090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___62090,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___62090,jobs,results,process,async){
return (function (state_61975){
var state_val_61976 = (state_61975[(1)]);
if((state_val_61976 === (1))){
var state_61975__$1 = state_61975;
var statearr_61977_62091 = state_61975__$1;
(statearr_61977_62091[(2)] = null);

(statearr_61977_62091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61976 === (2))){
var state_61975__$1 = state_61975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61975__$1,(4),from);
} else {
if((state_val_61976 === (3))){
var inst_61973 = (state_61975[(2)]);
var state_61975__$1 = state_61975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61975__$1,inst_61973);
} else {
if((state_val_61976 === (4))){
var inst_61956 = (state_61975[(7)]);
var inst_61956__$1 = (state_61975[(2)]);
var inst_61957 = (inst_61956__$1 == null);
var state_61975__$1 = (function (){var statearr_61978 = state_61975;
(statearr_61978[(7)] = inst_61956__$1);

return statearr_61978;
})();
if(cljs.core.truth_(inst_61957)){
var statearr_61979_62092 = state_61975__$1;
(statearr_61979_62092[(1)] = (5));

} else {
var statearr_61980_62093 = state_61975__$1;
(statearr_61980_62093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61976 === (5))){
var inst_61959 = cljs.core.async.close_BANG_.call(null,jobs);
var state_61975__$1 = state_61975;
var statearr_61981_62094 = state_61975__$1;
(statearr_61981_62094[(2)] = inst_61959);

(statearr_61981_62094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61976 === (6))){
var inst_61956 = (state_61975[(7)]);
var inst_61961 = (state_61975[(8)]);
var inst_61961__$1 = cljs.core.async.chan.call(null,(1));
var inst_61962 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61963 = [inst_61956,inst_61961__$1];
var inst_61964 = (new cljs.core.PersistentVector(null,2,(5),inst_61962,inst_61963,null));
var state_61975__$1 = (function (){var statearr_61982 = state_61975;
(statearr_61982[(8)] = inst_61961__$1);

return statearr_61982;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61975__$1,(8),jobs,inst_61964);
} else {
if((state_val_61976 === (7))){
var inst_61971 = (state_61975[(2)]);
var state_61975__$1 = state_61975;
var statearr_61983_62095 = state_61975__$1;
(statearr_61983_62095[(2)] = inst_61971);

(statearr_61983_62095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61976 === (8))){
var inst_61961 = (state_61975[(8)]);
var inst_61966 = (state_61975[(2)]);
var state_61975__$1 = (function (){var statearr_61984 = state_61975;
(statearr_61984[(9)] = inst_61966);

return statearr_61984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61975__$1,(9),results,inst_61961);
} else {
if((state_val_61976 === (9))){
var inst_61968 = (state_61975[(2)]);
var state_61975__$1 = (function (){var statearr_61985 = state_61975;
(statearr_61985[(10)] = inst_61968);

return statearr_61985;
})();
var statearr_61986_62096 = state_61975__$1;
(statearr_61986_62096[(2)] = null);

(statearr_61986_62096[(1)] = (2));


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
});})(c__18924__auto___62090,jobs,results,process,async))
;
return ((function (switch__18903__auto__,c__18924__auto___62090,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_61990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_61990[(1)] = (1));

return statearr_61990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_61975){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_61975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e61991){if((e61991 instanceof Object)){
var ex__18907__auto__ = e61991;
var statearr_61992_62097 = state_61975;
(statearr_61992_62097[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62098 = state_61975;
state_61975 = G__62098;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_61975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_61975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___62090,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_61993 = f__18925__auto__.call(null);
(statearr_61993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___62090);

return statearr_61993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___62090,jobs,results,process,async))
);


var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__,jobs,results,process,async){
return (function (state_62031){
var state_val_62032 = (state_62031[(1)]);
if((state_val_62032 === (7))){
var inst_62027 = (state_62031[(2)]);
var state_62031__$1 = state_62031;
var statearr_62033_62099 = state_62031__$1;
(statearr_62033_62099[(2)] = inst_62027);

(statearr_62033_62099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (20))){
var state_62031__$1 = state_62031;
var statearr_62034_62100 = state_62031__$1;
(statearr_62034_62100[(2)] = null);

(statearr_62034_62100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (1))){
var state_62031__$1 = state_62031;
var statearr_62035_62101 = state_62031__$1;
(statearr_62035_62101[(2)] = null);

(statearr_62035_62101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (4))){
var inst_61996 = (state_62031[(7)]);
var inst_61996__$1 = (state_62031[(2)]);
var inst_61997 = (inst_61996__$1 == null);
var state_62031__$1 = (function (){var statearr_62036 = state_62031;
(statearr_62036[(7)] = inst_61996__$1);

return statearr_62036;
})();
if(cljs.core.truth_(inst_61997)){
var statearr_62037_62102 = state_62031__$1;
(statearr_62037_62102[(1)] = (5));

} else {
var statearr_62038_62103 = state_62031__$1;
(statearr_62038_62103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (15))){
var inst_62009 = (state_62031[(8)]);
var state_62031__$1 = state_62031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62031__$1,(18),to,inst_62009);
} else {
if((state_val_62032 === (21))){
var inst_62022 = (state_62031[(2)]);
var state_62031__$1 = state_62031;
var statearr_62039_62104 = state_62031__$1;
(statearr_62039_62104[(2)] = inst_62022);

(statearr_62039_62104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (13))){
var inst_62024 = (state_62031[(2)]);
var state_62031__$1 = (function (){var statearr_62040 = state_62031;
(statearr_62040[(9)] = inst_62024);

return statearr_62040;
})();
var statearr_62041_62105 = state_62031__$1;
(statearr_62041_62105[(2)] = null);

(statearr_62041_62105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (6))){
var inst_61996 = (state_62031[(7)]);
var state_62031__$1 = state_62031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62031__$1,(11),inst_61996);
} else {
if((state_val_62032 === (17))){
var inst_62017 = (state_62031[(2)]);
var state_62031__$1 = state_62031;
if(cljs.core.truth_(inst_62017)){
var statearr_62042_62106 = state_62031__$1;
(statearr_62042_62106[(1)] = (19));

} else {
var statearr_62043_62107 = state_62031__$1;
(statearr_62043_62107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (3))){
var inst_62029 = (state_62031[(2)]);
var state_62031__$1 = state_62031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62031__$1,inst_62029);
} else {
if((state_val_62032 === (12))){
var inst_62006 = (state_62031[(10)]);
var state_62031__$1 = state_62031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62031__$1,(14),inst_62006);
} else {
if((state_val_62032 === (2))){
var state_62031__$1 = state_62031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62031__$1,(4),results);
} else {
if((state_val_62032 === (19))){
var state_62031__$1 = state_62031;
var statearr_62044_62108 = state_62031__$1;
(statearr_62044_62108[(2)] = null);

(statearr_62044_62108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (11))){
var inst_62006 = (state_62031[(2)]);
var state_62031__$1 = (function (){var statearr_62045 = state_62031;
(statearr_62045[(10)] = inst_62006);

return statearr_62045;
})();
var statearr_62046_62109 = state_62031__$1;
(statearr_62046_62109[(2)] = null);

(statearr_62046_62109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (9))){
var state_62031__$1 = state_62031;
var statearr_62047_62110 = state_62031__$1;
(statearr_62047_62110[(2)] = null);

(statearr_62047_62110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (5))){
var state_62031__$1 = state_62031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62048_62111 = state_62031__$1;
(statearr_62048_62111[(1)] = (8));

} else {
var statearr_62049_62112 = state_62031__$1;
(statearr_62049_62112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (14))){
var inst_62009 = (state_62031[(8)]);
var inst_62011 = (state_62031[(11)]);
var inst_62009__$1 = (state_62031[(2)]);
var inst_62010 = (inst_62009__$1 == null);
var inst_62011__$1 = cljs.core.not.call(null,inst_62010);
var state_62031__$1 = (function (){var statearr_62050 = state_62031;
(statearr_62050[(8)] = inst_62009__$1);

(statearr_62050[(11)] = inst_62011__$1);

return statearr_62050;
})();
if(inst_62011__$1){
var statearr_62051_62113 = state_62031__$1;
(statearr_62051_62113[(1)] = (15));

} else {
var statearr_62052_62114 = state_62031__$1;
(statearr_62052_62114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (16))){
var inst_62011 = (state_62031[(11)]);
var state_62031__$1 = state_62031;
var statearr_62053_62115 = state_62031__$1;
(statearr_62053_62115[(2)] = inst_62011);

(statearr_62053_62115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (10))){
var inst_62003 = (state_62031[(2)]);
var state_62031__$1 = state_62031;
var statearr_62054_62116 = state_62031__$1;
(statearr_62054_62116[(2)] = inst_62003);

(statearr_62054_62116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (18))){
var inst_62014 = (state_62031[(2)]);
var state_62031__$1 = state_62031;
var statearr_62055_62117 = state_62031__$1;
(statearr_62055_62117[(2)] = inst_62014);

(statearr_62055_62117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62032 === (8))){
var inst_62000 = cljs.core.async.close_BANG_.call(null,to);
var state_62031__$1 = state_62031;
var statearr_62056_62118 = state_62031__$1;
(statearr_62056_62118[(2)] = inst_62000);

(statearr_62056_62118[(1)] = (10));


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
}
}
}
}
});})(c__18924__auto__,jobs,results,process,async))
;
return ((function (switch__18903__auto__,c__18924__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_62060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_62060[(1)] = (1));

return statearr_62060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_62031){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_62031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e62061){if((e62061 instanceof Object)){
var ex__18907__auto__ = e62061;
var statearr_62062_62119 = state_62031;
(statearr_62062_62119[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62120 = state_62031;
state_62031 = G__62120;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_62031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_62031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_62063 = f__18925__auto__.call(null);
(statearr_62063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_62063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__,jobs,results,process,async))
);

return c__18924__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args62121 = [];
var len__17884__auto___62124 = arguments.length;
var i__17885__auto___62125 = (0);
while(true){
if((i__17885__auto___62125 < len__17884__auto___62124)){
args62121.push((arguments[i__17885__auto___62125]));

var G__62126 = (i__17885__auto___62125 + (1));
i__17885__auto___62125 = G__62126;
continue;
} else {
}
break;
}

var G__62123 = args62121.length;
switch (G__62123) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62121.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args62128 = [];
var len__17884__auto___62131 = arguments.length;
var i__17885__auto___62132 = (0);
while(true){
if((i__17885__auto___62132 < len__17884__auto___62131)){
args62128.push((arguments[i__17885__auto___62132]));

var G__62133 = (i__17885__auto___62132 + (1));
i__17885__auto___62132 = G__62133;
continue;
} else {
}
break;
}

var G__62130 = args62128.length;
switch (G__62130) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62128.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args62135 = [];
var len__17884__auto___62188 = arguments.length;
var i__17885__auto___62189 = (0);
while(true){
if((i__17885__auto___62189 < len__17884__auto___62188)){
args62135.push((arguments[i__17885__auto___62189]));

var G__62190 = (i__17885__auto___62189 + (1));
i__17885__auto___62189 = G__62190;
continue;
} else {
}
break;
}

var G__62137 = args62135.length;
switch (G__62137) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62135.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18924__auto___62192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___62192,tc,fc){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___62192,tc,fc){
return (function (state_62163){
var state_val_62164 = (state_62163[(1)]);
if((state_val_62164 === (7))){
var inst_62159 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
var statearr_62165_62193 = state_62163__$1;
(statearr_62165_62193[(2)] = inst_62159);

(statearr_62165_62193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (1))){
var state_62163__$1 = state_62163;
var statearr_62166_62194 = state_62163__$1;
(statearr_62166_62194[(2)] = null);

(statearr_62166_62194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (4))){
var inst_62140 = (state_62163[(7)]);
var inst_62140__$1 = (state_62163[(2)]);
var inst_62141 = (inst_62140__$1 == null);
var state_62163__$1 = (function (){var statearr_62167 = state_62163;
(statearr_62167[(7)] = inst_62140__$1);

return statearr_62167;
})();
if(cljs.core.truth_(inst_62141)){
var statearr_62168_62195 = state_62163__$1;
(statearr_62168_62195[(1)] = (5));

} else {
var statearr_62169_62196 = state_62163__$1;
(statearr_62169_62196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (13))){
var state_62163__$1 = state_62163;
var statearr_62170_62197 = state_62163__$1;
(statearr_62170_62197[(2)] = null);

(statearr_62170_62197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (6))){
var inst_62140 = (state_62163[(7)]);
var inst_62146 = p.call(null,inst_62140);
var state_62163__$1 = state_62163;
if(cljs.core.truth_(inst_62146)){
var statearr_62171_62198 = state_62163__$1;
(statearr_62171_62198[(1)] = (9));

} else {
var statearr_62172_62199 = state_62163__$1;
(statearr_62172_62199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (3))){
var inst_62161 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62163__$1,inst_62161);
} else {
if((state_val_62164 === (12))){
var state_62163__$1 = state_62163;
var statearr_62173_62200 = state_62163__$1;
(statearr_62173_62200[(2)] = null);

(statearr_62173_62200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (2))){
var state_62163__$1 = state_62163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62163__$1,(4),ch);
} else {
if((state_val_62164 === (11))){
var inst_62140 = (state_62163[(7)]);
var inst_62150 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62163__$1,(8),inst_62150,inst_62140);
} else {
if((state_val_62164 === (9))){
var state_62163__$1 = state_62163;
var statearr_62174_62201 = state_62163__$1;
(statearr_62174_62201[(2)] = tc);

(statearr_62174_62201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (5))){
var inst_62143 = cljs.core.async.close_BANG_.call(null,tc);
var inst_62144 = cljs.core.async.close_BANG_.call(null,fc);
var state_62163__$1 = (function (){var statearr_62175 = state_62163;
(statearr_62175[(8)] = inst_62143);

return statearr_62175;
})();
var statearr_62176_62202 = state_62163__$1;
(statearr_62176_62202[(2)] = inst_62144);

(statearr_62176_62202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (14))){
var inst_62157 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
var statearr_62177_62203 = state_62163__$1;
(statearr_62177_62203[(2)] = inst_62157);

(statearr_62177_62203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (10))){
var state_62163__$1 = state_62163;
var statearr_62178_62204 = state_62163__$1;
(statearr_62178_62204[(2)] = fc);

(statearr_62178_62204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (8))){
var inst_62152 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
if(cljs.core.truth_(inst_62152)){
var statearr_62179_62205 = state_62163__$1;
(statearr_62179_62205[(1)] = (12));

} else {
var statearr_62180_62206 = state_62163__$1;
(statearr_62180_62206[(1)] = (13));

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
});})(c__18924__auto___62192,tc,fc))
;
return ((function (switch__18903__auto__,c__18924__auto___62192,tc,fc){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_62184 = [null,null,null,null,null,null,null,null,null];
(statearr_62184[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_62184[(1)] = (1));

return statearr_62184;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_62163){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_62163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e62185){if((e62185 instanceof Object)){
var ex__18907__auto__ = e62185;
var statearr_62186_62207 = state_62163;
(statearr_62186_62207[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62208 = state_62163;
state_62163 = G__62208;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_62163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_62163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___62192,tc,fc))
})();
var state__18926__auto__ = (function (){var statearr_62187 = f__18925__auto__.call(null);
(statearr_62187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___62192);

return statearr_62187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___62192,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_62272){
var state_val_62273 = (state_62272[(1)]);
if((state_val_62273 === (7))){
var inst_62268 = (state_62272[(2)]);
var state_62272__$1 = state_62272;
var statearr_62274_62295 = state_62272__$1;
(statearr_62274_62295[(2)] = inst_62268);

(statearr_62274_62295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62273 === (1))){
var inst_62252 = init;
var state_62272__$1 = (function (){var statearr_62275 = state_62272;
(statearr_62275[(7)] = inst_62252);

return statearr_62275;
})();
var statearr_62276_62296 = state_62272__$1;
(statearr_62276_62296[(2)] = null);

(statearr_62276_62296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62273 === (4))){
var inst_62255 = (state_62272[(8)]);
var inst_62255__$1 = (state_62272[(2)]);
var inst_62256 = (inst_62255__$1 == null);
var state_62272__$1 = (function (){var statearr_62277 = state_62272;
(statearr_62277[(8)] = inst_62255__$1);

return statearr_62277;
})();
if(cljs.core.truth_(inst_62256)){
var statearr_62278_62297 = state_62272__$1;
(statearr_62278_62297[(1)] = (5));

} else {
var statearr_62279_62298 = state_62272__$1;
(statearr_62279_62298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62273 === (6))){
var inst_62255 = (state_62272[(8)]);
var inst_62259 = (state_62272[(9)]);
var inst_62252 = (state_62272[(7)]);
var inst_62259__$1 = f.call(null,inst_62252,inst_62255);
var inst_62260 = cljs.core.reduced_QMARK_.call(null,inst_62259__$1);
var state_62272__$1 = (function (){var statearr_62280 = state_62272;
(statearr_62280[(9)] = inst_62259__$1);

return statearr_62280;
})();
if(inst_62260){
var statearr_62281_62299 = state_62272__$1;
(statearr_62281_62299[(1)] = (8));

} else {
var statearr_62282_62300 = state_62272__$1;
(statearr_62282_62300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62273 === (3))){
var inst_62270 = (state_62272[(2)]);
var state_62272__$1 = state_62272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62272__$1,inst_62270);
} else {
if((state_val_62273 === (2))){
var state_62272__$1 = state_62272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62272__$1,(4),ch);
} else {
if((state_val_62273 === (9))){
var inst_62259 = (state_62272[(9)]);
var inst_62252 = inst_62259;
var state_62272__$1 = (function (){var statearr_62283 = state_62272;
(statearr_62283[(7)] = inst_62252);

return statearr_62283;
})();
var statearr_62284_62301 = state_62272__$1;
(statearr_62284_62301[(2)] = null);

(statearr_62284_62301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62273 === (5))){
var inst_62252 = (state_62272[(7)]);
var state_62272__$1 = state_62272;
var statearr_62285_62302 = state_62272__$1;
(statearr_62285_62302[(2)] = inst_62252);

(statearr_62285_62302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62273 === (10))){
var inst_62266 = (state_62272[(2)]);
var state_62272__$1 = state_62272;
var statearr_62286_62303 = state_62272__$1;
(statearr_62286_62303[(2)] = inst_62266);

(statearr_62286_62303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62273 === (8))){
var inst_62259 = (state_62272[(9)]);
var inst_62262 = cljs.core.deref.call(null,inst_62259);
var state_62272__$1 = state_62272;
var statearr_62287_62304 = state_62272__$1;
(statearr_62287_62304[(2)] = inst_62262);

(statearr_62287_62304[(1)] = (10));


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
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18904__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18904__auto____0 = (function (){
var statearr_62291 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62291[(0)] = cljs$core$async$reduce_$_state_machine__18904__auto__);

(statearr_62291[(1)] = (1));

return statearr_62291;
});
var cljs$core$async$reduce_$_state_machine__18904__auto____1 = (function (state_62272){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_62272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e62292){if((e62292 instanceof Object)){
var ex__18907__auto__ = e62292;
var statearr_62293_62305 = state_62272;
(statearr_62293_62305[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62306 = state_62272;
state_62272 = G__62306;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18904__auto__ = function(state_62272){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18904__auto____1.call(this,state_62272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18904__auto____0;
cljs$core$async$reduce_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18904__auto____1;
return cljs$core$async$reduce_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_62294 = f__18925__auto__.call(null);
(statearr_62294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_62294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args62307 = [];
var len__17884__auto___62359 = arguments.length;
var i__17885__auto___62360 = (0);
while(true){
if((i__17885__auto___62360 < len__17884__auto___62359)){
args62307.push((arguments[i__17885__auto___62360]));

var G__62361 = (i__17885__auto___62360 + (1));
i__17885__auto___62360 = G__62361;
continue;
} else {
}
break;
}

var G__62309 = args62307.length;
switch (G__62309) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62307.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_62334){
var state_val_62335 = (state_62334[(1)]);
if((state_val_62335 === (7))){
var inst_62316 = (state_62334[(2)]);
var state_62334__$1 = state_62334;
var statearr_62336_62363 = state_62334__$1;
(statearr_62336_62363[(2)] = inst_62316);

(statearr_62336_62363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (1))){
var inst_62310 = cljs.core.seq.call(null,coll);
var inst_62311 = inst_62310;
var state_62334__$1 = (function (){var statearr_62337 = state_62334;
(statearr_62337[(7)] = inst_62311);

return statearr_62337;
})();
var statearr_62338_62364 = state_62334__$1;
(statearr_62338_62364[(2)] = null);

(statearr_62338_62364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (4))){
var inst_62311 = (state_62334[(7)]);
var inst_62314 = cljs.core.first.call(null,inst_62311);
var state_62334__$1 = state_62334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62334__$1,(7),ch,inst_62314);
} else {
if((state_val_62335 === (13))){
var inst_62328 = (state_62334[(2)]);
var state_62334__$1 = state_62334;
var statearr_62339_62365 = state_62334__$1;
(statearr_62339_62365[(2)] = inst_62328);

(statearr_62339_62365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (6))){
var inst_62319 = (state_62334[(2)]);
var state_62334__$1 = state_62334;
if(cljs.core.truth_(inst_62319)){
var statearr_62340_62366 = state_62334__$1;
(statearr_62340_62366[(1)] = (8));

} else {
var statearr_62341_62367 = state_62334__$1;
(statearr_62341_62367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (3))){
var inst_62332 = (state_62334[(2)]);
var state_62334__$1 = state_62334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62334__$1,inst_62332);
} else {
if((state_val_62335 === (12))){
var state_62334__$1 = state_62334;
var statearr_62342_62368 = state_62334__$1;
(statearr_62342_62368[(2)] = null);

(statearr_62342_62368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (2))){
var inst_62311 = (state_62334[(7)]);
var state_62334__$1 = state_62334;
if(cljs.core.truth_(inst_62311)){
var statearr_62343_62369 = state_62334__$1;
(statearr_62343_62369[(1)] = (4));

} else {
var statearr_62344_62370 = state_62334__$1;
(statearr_62344_62370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (11))){
var inst_62325 = cljs.core.async.close_BANG_.call(null,ch);
var state_62334__$1 = state_62334;
var statearr_62345_62371 = state_62334__$1;
(statearr_62345_62371[(2)] = inst_62325);

(statearr_62345_62371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (9))){
var state_62334__$1 = state_62334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62346_62372 = state_62334__$1;
(statearr_62346_62372[(1)] = (11));

} else {
var statearr_62347_62373 = state_62334__$1;
(statearr_62347_62373[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (5))){
var inst_62311 = (state_62334[(7)]);
var state_62334__$1 = state_62334;
var statearr_62348_62374 = state_62334__$1;
(statearr_62348_62374[(2)] = inst_62311);

(statearr_62348_62374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (10))){
var inst_62330 = (state_62334[(2)]);
var state_62334__$1 = state_62334;
var statearr_62349_62375 = state_62334__$1;
(statearr_62349_62375[(2)] = inst_62330);

(statearr_62349_62375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62335 === (8))){
var inst_62311 = (state_62334[(7)]);
var inst_62321 = cljs.core.next.call(null,inst_62311);
var inst_62311__$1 = inst_62321;
var state_62334__$1 = (function (){var statearr_62350 = state_62334;
(statearr_62350[(7)] = inst_62311__$1);

return statearr_62350;
})();
var statearr_62351_62376 = state_62334__$1;
(statearr_62351_62376[(2)] = null);

(statearr_62351_62376[(1)] = (2));


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
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_62355 = [null,null,null,null,null,null,null,null];
(statearr_62355[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_62355[(1)] = (1));

return statearr_62355;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_62334){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_62334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e62356){if((e62356 instanceof Object)){
var ex__18907__auto__ = e62356;
var statearr_62357_62377 = state_62334;
(statearr_62357_62377[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62378 = state_62334;
state_62334 = G__62378;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_62334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_62334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_62358 = f__18925__auto__.call(null);
(statearr_62358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_62358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async62600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62600 = (function (mult,ch,cs,meta62601){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta62601 = meta62601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_62602,meta62601__$1){
var self__ = this;
var _62602__$1 = this;
return (new cljs.core.async.t_cljs$core$async62600(self__.mult,self__.ch,self__.cs,meta62601__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_62602){
var self__ = this;
var _62602__$1 = this;
return self__.meta62601;
});})(cs))
;

cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62600.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62600.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62601","meta62601",806656743,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async62600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62600";

cljs.core.async.t_cljs$core$async62600.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async62600");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async62600 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async62600(mult__$1,ch__$1,cs__$1,meta62601){
return (new cljs.core.async.t_cljs$core$async62600(mult__$1,ch__$1,cs__$1,meta62601));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async62600(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18924__auto___62821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___62821,cs,m,dchan,dctr,done){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___62821,cs,m,dchan,dctr,done){
return (function (state_62733){
var state_val_62734 = (state_62733[(1)]);
if((state_val_62734 === (7))){
var inst_62729 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62735_62822 = state_62733__$1;
(statearr_62735_62822[(2)] = inst_62729);

(statearr_62735_62822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (20))){
var inst_62634 = (state_62733[(7)]);
var inst_62644 = cljs.core.first.call(null,inst_62634);
var inst_62645 = cljs.core.nth.call(null,inst_62644,(0),null);
var inst_62646 = cljs.core.nth.call(null,inst_62644,(1),null);
var state_62733__$1 = (function (){var statearr_62736 = state_62733;
(statearr_62736[(8)] = inst_62645);

return statearr_62736;
})();
if(cljs.core.truth_(inst_62646)){
var statearr_62737_62823 = state_62733__$1;
(statearr_62737_62823[(1)] = (22));

} else {
var statearr_62738_62824 = state_62733__$1;
(statearr_62738_62824[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (27))){
var inst_62681 = (state_62733[(9)]);
var inst_62674 = (state_62733[(10)]);
var inst_62605 = (state_62733[(11)]);
var inst_62676 = (state_62733[(12)]);
var inst_62681__$1 = cljs.core._nth.call(null,inst_62674,inst_62676);
var inst_62682 = cljs.core.async.put_BANG_.call(null,inst_62681__$1,inst_62605,done);
var state_62733__$1 = (function (){var statearr_62739 = state_62733;
(statearr_62739[(9)] = inst_62681__$1);

return statearr_62739;
})();
if(cljs.core.truth_(inst_62682)){
var statearr_62740_62825 = state_62733__$1;
(statearr_62740_62825[(1)] = (30));

} else {
var statearr_62741_62826 = state_62733__$1;
(statearr_62741_62826[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (1))){
var state_62733__$1 = state_62733;
var statearr_62742_62827 = state_62733__$1;
(statearr_62742_62827[(2)] = null);

(statearr_62742_62827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (24))){
var inst_62634 = (state_62733[(7)]);
var inst_62651 = (state_62733[(2)]);
var inst_62652 = cljs.core.next.call(null,inst_62634);
var inst_62614 = inst_62652;
var inst_62615 = null;
var inst_62616 = (0);
var inst_62617 = (0);
var state_62733__$1 = (function (){var statearr_62743 = state_62733;
(statearr_62743[(13)] = inst_62616);

(statearr_62743[(14)] = inst_62614);

(statearr_62743[(15)] = inst_62617);

(statearr_62743[(16)] = inst_62651);

(statearr_62743[(17)] = inst_62615);

return statearr_62743;
})();
var statearr_62744_62828 = state_62733__$1;
(statearr_62744_62828[(2)] = null);

(statearr_62744_62828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (39))){
var state_62733__$1 = state_62733;
var statearr_62748_62829 = state_62733__$1;
(statearr_62748_62829[(2)] = null);

(statearr_62748_62829[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (4))){
var inst_62605 = (state_62733[(11)]);
var inst_62605__$1 = (state_62733[(2)]);
var inst_62606 = (inst_62605__$1 == null);
var state_62733__$1 = (function (){var statearr_62749 = state_62733;
(statearr_62749[(11)] = inst_62605__$1);

return statearr_62749;
})();
if(cljs.core.truth_(inst_62606)){
var statearr_62750_62830 = state_62733__$1;
(statearr_62750_62830[(1)] = (5));

} else {
var statearr_62751_62831 = state_62733__$1;
(statearr_62751_62831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (15))){
var inst_62616 = (state_62733[(13)]);
var inst_62614 = (state_62733[(14)]);
var inst_62617 = (state_62733[(15)]);
var inst_62615 = (state_62733[(17)]);
var inst_62630 = (state_62733[(2)]);
var inst_62631 = (inst_62617 + (1));
var tmp62745 = inst_62616;
var tmp62746 = inst_62614;
var tmp62747 = inst_62615;
var inst_62614__$1 = tmp62746;
var inst_62615__$1 = tmp62747;
var inst_62616__$1 = tmp62745;
var inst_62617__$1 = inst_62631;
var state_62733__$1 = (function (){var statearr_62752 = state_62733;
(statearr_62752[(13)] = inst_62616__$1);

(statearr_62752[(18)] = inst_62630);

(statearr_62752[(14)] = inst_62614__$1);

(statearr_62752[(15)] = inst_62617__$1);

(statearr_62752[(17)] = inst_62615__$1);

return statearr_62752;
})();
var statearr_62753_62832 = state_62733__$1;
(statearr_62753_62832[(2)] = null);

(statearr_62753_62832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (21))){
var inst_62655 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62757_62833 = state_62733__$1;
(statearr_62757_62833[(2)] = inst_62655);

(statearr_62757_62833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (31))){
var inst_62681 = (state_62733[(9)]);
var inst_62685 = done.call(null,null);
var inst_62686 = cljs.core.async.untap_STAR_.call(null,m,inst_62681);
var state_62733__$1 = (function (){var statearr_62758 = state_62733;
(statearr_62758[(19)] = inst_62685);

return statearr_62758;
})();
var statearr_62759_62834 = state_62733__$1;
(statearr_62759_62834[(2)] = inst_62686);

(statearr_62759_62834[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (32))){
var inst_62674 = (state_62733[(10)]);
var inst_62675 = (state_62733[(20)]);
var inst_62676 = (state_62733[(12)]);
var inst_62673 = (state_62733[(21)]);
var inst_62688 = (state_62733[(2)]);
var inst_62689 = (inst_62676 + (1));
var tmp62754 = inst_62674;
var tmp62755 = inst_62675;
var tmp62756 = inst_62673;
var inst_62673__$1 = tmp62756;
var inst_62674__$1 = tmp62754;
var inst_62675__$1 = tmp62755;
var inst_62676__$1 = inst_62689;
var state_62733__$1 = (function (){var statearr_62760 = state_62733;
(statearr_62760[(22)] = inst_62688);

(statearr_62760[(10)] = inst_62674__$1);

(statearr_62760[(20)] = inst_62675__$1);

(statearr_62760[(12)] = inst_62676__$1);

(statearr_62760[(21)] = inst_62673__$1);

return statearr_62760;
})();
var statearr_62761_62835 = state_62733__$1;
(statearr_62761_62835[(2)] = null);

(statearr_62761_62835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (40))){
var inst_62701 = (state_62733[(23)]);
var inst_62705 = done.call(null,null);
var inst_62706 = cljs.core.async.untap_STAR_.call(null,m,inst_62701);
var state_62733__$1 = (function (){var statearr_62762 = state_62733;
(statearr_62762[(24)] = inst_62705);

return statearr_62762;
})();
var statearr_62763_62836 = state_62733__$1;
(statearr_62763_62836[(2)] = inst_62706);

(statearr_62763_62836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (33))){
var inst_62692 = (state_62733[(25)]);
var inst_62694 = cljs.core.chunked_seq_QMARK_.call(null,inst_62692);
var state_62733__$1 = state_62733;
if(inst_62694){
var statearr_62764_62837 = state_62733__$1;
(statearr_62764_62837[(1)] = (36));

} else {
var statearr_62765_62838 = state_62733__$1;
(statearr_62765_62838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (13))){
var inst_62624 = (state_62733[(26)]);
var inst_62627 = cljs.core.async.close_BANG_.call(null,inst_62624);
var state_62733__$1 = state_62733;
var statearr_62766_62839 = state_62733__$1;
(statearr_62766_62839[(2)] = inst_62627);

(statearr_62766_62839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (22))){
var inst_62645 = (state_62733[(8)]);
var inst_62648 = cljs.core.async.close_BANG_.call(null,inst_62645);
var state_62733__$1 = state_62733;
var statearr_62767_62840 = state_62733__$1;
(statearr_62767_62840[(2)] = inst_62648);

(statearr_62767_62840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (36))){
var inst_62692 = (state_62733[(25)]);
var inst_62696 = cljs.core.chunk_first.call(null,inst_62692);
var inst_62697 = cljs.core.chunk_rest.call(null,inst_62692);
var inst_62698 = cljs.core.count.call(null,inst_62696);
var inst_62673 = inst_62697;
var inst_62674 = inst_62696;
var inst_62675 = inst_62698;
var inst_62676 = (0);
var state_62733__$1 = (function (){var statearr_62768 = state_62733;
(statearr_62768[(10)] = inst_62674);

(statearr_62768[(20)] = inst_62675);

(statearr_62768[(12)] = inst_62676);

(statearr_62768[(21)] = inst_62673);

return statearr_62768;
})();
var statearr_62769_62841 = state_62733__$1;
(statearr_62769_62841[(2)] = null);

(statearr_62769_62841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (41))){
var inst_62692 = (state_62733[(25)]);
var inst_62708 = (state_62733[(2)]);
var inst_62709 = cljs.core.next.call(null,inst_62692);
var inst_62673 = inst_62709;
var inst_62674 = null;
var inst_62675 = (0);
var inst_62676 = (0);
var state_62733__$1 = (function (){var statearr_62770 = state_62733;
(statearr_62770[(10)] = inst_62674);

(statearr_62770[(20)] = inst_62675);

(statearr_62770[(27)] = inst_62708);

(statearr_62770[(12)] = inst_62676);

(statearr_62770[(21)] = inst_62673);

return statearr_62770;
})();
var statearr_62771_62842 = state_62733__$1;
(statearr_62771_62842[(2)] = null);

(statearr_62771_62842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (43))){
var state_62733__$1 = state_62733;
var statearr_62772_62843 = state_62733__$1;
(statearr_62772_62843[(2)] = null);

(statearr_62772_62843[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (29))){
var inst_62717 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62773_62844 = state_62733__$1;
(statearr_62773_62844[(2)] = inst_62717);

(statearr_62773_62844[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (44))){
var inst_62726 = (state_62733[(2)]);
var state_62733__$1 = (function (){var statearr_62774 = state_62733;
(statearr_62774[(28)] = inst_62726);

return statearr_62774;
})();
var statearr_62775_62845 = state_62733__$1;
(statearr_62775_62845[(2)] = null);

(statearr_62775_62845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (6))){
var inst_62665 = (state_62733[(29)]);
var inst_62664 = cljs.core.deref.call(null,cs);
var inst_62665__$1 = cljs.core.keys.call(null,inst_62664);
var inst_62666 = cljs.core.count.call(null,inst_62665__$1);
var inst_62667 = cljs.core.reset_BANG_.call(null,dctr,inst_62666);
var inst_62672 = cljs.core.seq.call(null,inst_62665__$1);
var inst_62673 = inst_62672;
var inst_62674 = null;
var inst_62675 = (0);
var inst_62676 = (0);
var state_62733__$1 = (function (){var statearr_62776 = state_62733;
(statearr_62776[(29)] = inst_62665__$1);

(statearr_62776[(30)] = inst_62667);

(statearr_62776[(10)] = inst_62674);

(statearr_62776[(20)] = inst_62675);

(statearr_62776[(12)] = inst_62676);

(statearr_62776[(21)] = inst_62673);

return statearr_62776;
})();
var statearr_62777_62846 = state_62733__$1;
(statearr_62777_62846[(2)] = null);

(statearr_62777_62846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (28))){
var inst_62692 = (state_62733[(25)]);
var inst_62673 = (state_62733[(21)]);
var inst_62692__$1 = cljs.core.seq.call(null,inst_62673);
var state_62733__$1 = (function (){var statearr_62778 = state_62733;
(statearr_62778[(25)] = inst_62692__$1);

return statearr_62778;
})();
if(inst_62692__$1){
var statearr_62779_62847 = state_62733__$1;
(statearr_62779_62847[(1)] = (33));

} else {
var statearr_62780_62848 = state_62733__$1;
(statearr_62780_62848[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (25))){
var inst_62675 = (state_62733[(20)]);
var inst_62676 = (state_62733[(12)]);
var inst_62678 = (inst_62676 < inst_62675);
var inst_62679 = inst_62678;
var state_62733__$1 = state_62733;
if(cljs.core.truth_(inst_62679)){
var statearr_62781_62849 = state_62733__$1;
(statearr_62781_62849[(1)] = (27));

} else {
var statearr_62782_62850 = state_62733__$1;
(statearr_62782_62850[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (34))){
var state_62733__$1 = state_62733;
var statearr_62783_62851 = state_62733__$1;
(statearr_62783_62851[(2)] = null);

(statearr_62783_62851[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (17))){
var state_62733__$1 = state_62733;
var statearr_62784_62852 = state_62733__$1;
(statearr_62784_62852[(2)] = null);

(statearr_62784_62852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (3))){
var inst_62731 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62733__$1,inst_62731);
} else {
if((state_val_62734 === (12))){
var inst_62660 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62785_62853 = state_62733__$1;
(statearr_62785_62853[(2)] = inst_62660);

(statearr_62785_62853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (2))){
var state_62733__$1 = state_62733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62733__$1,(4),ch);
} else {
if((state_val_62734 === (23))){
var state_62733__$1 = state_62733;
var statearr_62786_62854 = state_62733__$1;
(statearr_62786_62854[(2)] = null);

(statearr_62786_62854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (35))){
var inst_62715 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62787_62855 = state_62733__$1;
(statearr_62787_62855[(2)] = inst_62715);

(statearr_62787_62855[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (19))){
var inst_62634 = (state_62733[(7)]);
var inst_62638 = cljs.core.chunk_first.call(null,inst_62634);
var inst_62639 = cljs.core.chunk_rest.call(null,inst_62634);
var inst_62640 = cljs.core.count.call(null,inst_62638);
var inst_62614 = inst_62639;
var inst_62615 = inst_62638;
var inst_62616 = inst_62640;
var inst_62617 = (0);
var state_62733__$1 = (function (){var statearr_62788 = state_62733;
(statearr_62788[(13)] = inst_62616);

(statearr_62788[(14)] = inst_62614);

(statearr_62788[(15)] = inst_62617);

(statearr_62788[(17)] = inst_62615);

return statearr_62788;
})();
var statearr_62789_62856 = state_62733__$1;
(statearr_62789_62856[(2)] = null);

(statearr_62789_62856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (11))){
var inst_62614 = (state_62733[(14)]);
var inst_62634 = (state_62733[(7)]);
var inst_62634__$1 = cljs.core.seq.call(null,inst_62614);
var state_62733__$1 = (function (){var statearr_62790 = state_62733;
(statearr_62790[(7)] = inst_62634__$1);

return statearr_62790;
})();
if(inst_62634__$1){
var statearr_62791_62857 = state_62733__$1;
(statearr_62791_62857[(1)] = (16));

} else {
var statearr_62792_62858 = state_62733__$1;
(statearr_62792_62858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (9))){
var inst_62662 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62793_62859 = state_62733__$1;
(statearr_62793_62859[(2)] = inst_62662);

(statearr_62793_62859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (5))){
var inst_62612 = cljs.core.deref.call(null,cs);
var inst_62613 = cljs.core.seq.call(null,inst_62612);
var inst_62614 = inst_62613;
var inst_62615 = null;
var inst_62616 = (0);
var inst_62617 = (0);
var state_62733__$1 = (function (){var statearr_62794 = state_62733;
(statearr_62794[(13)] = inst_62616);

(statearr_62794[(14)] = inst_62614);

(statearr_62794[(15)] = inst_62617);

(statearr_62794[(17)] = inst_62615);

return statearr_62794;
})();
var statearr_62795_62860 = state_62733__$1;
(statearr_62795_62860[(2)] = null);

(statearr_62795_62860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (14))){
var state_62733__$1 = state_62733;
var statearr_62796_62861 = state_62733__$1;
(statearr_62796_62861[(2)] = null);

(statearr_62796_62861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (45))){
var inst_62723 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62797_62862 = state_62733__$1;
(statearr_62797_62862[(2)] = inst_62723);

(statearr_62797_62862[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (26))){
var inst_62665 = (state_62733[(29)]);
var inst_62719 = (state_62733[(2)]);
var inst_62720 = cljs.core.seq.call(null,inst_62665);
var state_62733__$1 = (function (){var statearr_62798 = state_62733;
(statearr_62798[(31)] = inst_62719);

return statearr_62798;
})();
if(inst_62720){
var statearr_62799_62863 = state_62733__$1;
(statearr_62799_62863[(1)] = (42));

} else {
var statearr_62800_62864 = state_62733__$1;
(statearr_62800_62864[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (16))){
var inst_62634 = (state_62733[(7)]);
var inst_62636 = cljs.core.chunked_seq_QMARK_.call(null,inst_62634);
var state_62733__$1 = state_62733;
if(inst_62636){
var statearr_62801_62865 = state_62733__$1;
(statearr_62801_62865[(1)] = (19));

} else {
var statearr_62802_62866 = state_62733__$1;
(statearr_62802_62866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (38))){
var inst_62712 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62803_62867 = state_62733__$1;
(statearr_62803_62867[(2)] = inst_62712);

(statearr_62803_62867[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (30))){
var state_62733__$1 = state_62733;
var statearr_62804_62868 = state_62733__$1;
(statearr_62804_62868[(2)] = null);

(statearr_62804_62868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (10))){
var inst_62617 = (state_62733[(15)]);
var inst_62615 = (state_62733[(17)]);
var inst_62623 = cljs.core._nth.call(null,inst_62615,inst_62617);
var inst_62624 = cljs.core.nth.call(null,inst_62623,(0),null);
var inst_62625 = cljs.core.nth.call(null,inst_62623,(1),null);
var state_62733__$1 = (function (){var statearr_62805 = state_62733;
(statearr_62805[(26)] = inst_62624);

return statearr_62805;
})();
if(cljs.core.truth_(inst_62625)){
var statearr_62806_62869 = state_62733__$1;
(statearr_62806_62869[(1)] = (13));

} else {
var statearr_62807_62870 = state_62733__$1;
(statearr_62807_62870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (18))){
var inst_62658 = (state_62733[(2)]);
var state_62733__$1 = state_62733;
var statearr_62808_62871 = state_62733__$1;
(statearr_62808_62871[(2)] = inst_62658);

(statearr_62808_62871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (42))){
var state_62733__$1 = state_62733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62733__$1,(45),dchan);
} else {
if((state_val_62734 === (37))){
var inst_62701 = (state_62733[(23)]);
var inst_62692 = (state_62733[(25)]);
var inst_62605 = (state_62733[(11)]);
var inst_62701__$1 = cljs.core.first.call(null,inst_62692);
var inst_62702 = cljs.core.async.put_BANG_.call(null,inst_62701__$1,inst_62605,done);
var state_62733__$1 = (function (){var statearr_62809 = state_62733;
(statearr_62809[(23)] = inst_62701__$1);

return statearr_62809;
})();
if(cljs.core.truth_(inst_62702)){
var statearr_62810_62872 = state_62733__$1;
(statearr_62810_62872[(1)] = (39));

} else {
var statearr_62811_62873 = state_62733__$1;
(statearr_62811_62873[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62734 === (8))){
var inst_62616 = (state_62733[(13)]);
var inst_62617 = (state_62733[(15)]);
var inst_62619 = (inst_62617 < inst_62616);
var inst_62620 = inst_62619;
var state_62733__$1 = state_62733;
if(cljs.core.truth_(inst_62620)){
var statearr_62812_62874 = state_62733__$1;
(statearr_62812_62874[(1)] = (10));

} else {
var statearr_62813_62875 = state_62733__$1;
(statearr_62813_62875[(1)] = (11));

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
});})(c__18924__auto___62821,cs,m,dchan,dctr,done))
;
return ((function (switch__18903__auto__,c__18924__auto___62821,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18904__auto__ = null;
var cljs$core$async$mult_$_state_machine__18904__auto____0 = (function (){
var statearr_62817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62817[(0)] = cljs$core$async$mult_$_state_machine__18904__auto__);

(statearr_62817[(1)] = (1));

return statearr_62817;
});
var cljs$core$async$mult_$_state_machine__18904__auto____1 = (function (state_62733){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_62733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e62818){if((e62818 instanceof Object)){
var ex__18907__auto__ = e62818;
var statearr_62819_62876 = state_62733;
(statearr_62819_62876[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62877 = state_62733;
state_62733 = G__62877;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18904__auto__ = function(state_62733){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18904__auto____1.call(this,state_62733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18904__auto____0;
cljs$core$async$mult_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18904__auto____1;
return cljs$core$async$mult_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___62821,cs,m,dchan,dctr,done))
})();
var state__18926__auto__ = (function (){var statearr_62820 = f__18925__auto__.call(null);
(statearr_62820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___62821);

return statearr_62820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___62821,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args62878 = [];
var len__17884__auto___62881 = arguments.length;
var i__17885__auto___62882 = (0);
while(true){
if((i__17885__auto___62882 < len__17884__auto___62881)){
args62878.push((arguments[i__17885__auto___62882]));

var G__62883 = (i__17885__auto___62882 + (1));
i__17885__auto___62882 = G__62883;
continue;
} else {
}
break;
}

var G__62880 = args62878.length;
switch (G__62880) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62878.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___62895 = arguments.length;
var i__17885__auto___62896 = (0);
while(true){
if((i__17885__auto___62896 < len__17884__auto___62895)){
args__17891__auto__.push((arguments[i__17885__auto___62896]));

var G__62897 = (i__17885__auto___62896 + (1));
i__17885__auto___62896 = G__62897;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62889){
var map__62890 = p__62889;
var map__62890__$1 = ((((!((map__62890 == null)))?((((map__62890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62890):map__62890);
var opts = map__62890__$1;
var statearr_62892_62898 = state;
(statearr_62892_62898[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__62890,map__62890__$1,opts){
return (function (val){
var statearr_62893_62899 = state;
(statearr_62893_62899[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__62890,map__62890__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_62894_62900 = state;
(statearr_62894_62900[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62885){
var G__62886 = cljs.core.first.call(null,seq62885);
var seq62885__$1 = cljs.core.next.call(null,seq62885);
var G__62887 = cljs.core.first.call(null,seq62885__$1);
var seq62885__$2 = cljs.core.next.call(null,seq62885__$1);
var G__62888 = cljs.core.first.call(null,seq62885__$2);
var seq62885__$3 = cljs.core.next.call(null,seq62885__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62886,G__62887,G__62888,seq62885__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async63064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63064 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63065){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63065 = meta63065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63066,meta63065__$1){
var self__ = this;
var _63066__$1 = this;
return (new cljs.core.async.t_cljs$core$async63064(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63065__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63066){
var self__ = this;
var _63066__$1 = this;
return self__.meta63065;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63065","meta63065",-21303078,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63064";

cljs.core.async.t_cljs$core$async63064.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async63064");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async63064 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async63064(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63065){
return (new cljs.core.async.t_cljs$core$async63064(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63065));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async63064(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18924__auto___63227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___63227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___63227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_63164){
var state_val_63165 = (state_63164[(1)]);
if((state_val_63165 === (7))){
var inst_63082 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63166_63228 = state_63164__$1;
(statearr_63166_63228[(2)] = inst_63082);

(statearr_63166_63228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (20))){
var inst_63094 = (state_63164[(7)]);
var state_63164__$1 = state_63164;
var statearr_63167_63229 = state_63164__$1;
(statearr_63167_63229[(2)] = inst_63094);

(statearr_63167_63229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (27))){
var state_63164__$1 = state_63164;
var statearr_63168_63230 = state_63164__$1;
(statearr_63168_63230[(2)] = null);

(statearr_63168_63230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (1))){
var inst_63070 = (state_63164[(8)]);
var inst_63070__$1 = calc_state.call(null);
var inst_63072 = (inst_63070__$1 == null);
var inst_63073 = cljs.core.not.call(null,inst_63072);
var state_63164__$1 = (function (){var statearr_63169 = state_63164;
(statearr_63169[(8)] = inst_63070__$1);

return statearr_63169;
})();
if(inst_63073){
var statearr_63170_63231 = state_63164__$1;
(statearr_63170_63231[(1)] = (2));

} else {
var statearr_63171_63232 = state_63164__$1;
(statearr_63171_63232[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (24))){
var inst_63117 = (state_63164[(9)]);
var inst_63138 = (state_63164[(10)]);
var inst_63124 = (state_63164[(11)]);
var inst_63138__$1 = inst_63117.call(null,inst_63124);
var state_63164__$1 = (function (){var statearr_63172 = state_63164;
(statearr_63172[(10)] = inst_63138__$1);

return statearr_63172;
})();
if(cljs.core.truth_(inst_63138__$1)){
var statearr_63173_63233 = state_63164__$1;
(statearr_63173_63233[(1)] = (29));

} else {
var statearr_63174_63234 = state_63164__$1;
(statearr_63174_63234[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (4))){
var inst_63085 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63085)){
var statearr_63175_63235 = state_63164__$1;
(statearr_63175_63235[(1)] = (8));

} else {
var statearr_63176_63236 = state_63164__$1;
(statearr_63176_63236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (15))){
var inst_63111 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63111)){
var statearr_63177_63237 = state_63164__$1;
(statearr_63177_63237[(1)] = (19));

} else {
var statearr_63178_63238 = state_63164__$1;
(statearr_63178_63238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (21))){
var inst_63116 = (state_63164[(12)]);
var inst_63116__$1 = (state_63164[(2)]);
var inst_63117 = cljs.core.get.call(null,inst_63116__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63118 = cljs.core.get.call(null,inst_63116__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63119 = cljs.core.get.call(null,inst_63116__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63164__$1 = (function (){var statearr_63179 = state_63164;
(statearr_63179[(9)] = inst_63117);

(statearr_63179[(12)] = inst_63116__$1);

(statearr_63179[(13)] = inst_63118);

return statearr_63179;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_63164__$1,(22),inst_63119);
} else {
if((state_val_63165 === (31))){
var inst_63146 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63146)){
var statearr_63180_63239 = state_63164__$1;
(statearr_63180_63239[(1)] = (32));

} else {
var statearr_63181_63240 = state_63164__$1;
(statearr_63181_63240[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (32))){
var inst_63123 = (state_63164[(14)]);
var state_63164__$1 = state_63164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63164__$1,(35),out,inst_63123);
} else {
if((state_val_63165 === (33))){
var inst_63116 = (state_63164[(12)]);
var inst_63094 = inst_63116;
var state_63164__$1 = (function (){var statearr_63182 = state_63164;
(statearr_63182[(7)] = inst_63094);

return statearr_63182;
})();
var statearr_63183_63241 = state_63164__$1;
(statearr_63183_63241[(2)] = null);

(statearr_63183_63241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (13))){
var inst_63094 = (state_63164[(7)]);
var inst_63101 = inst_63094.cljs$lang$protocol_mask$partition0$;
var inst_63102 = (inst_63101 & (64));
var inst_63103 = inst_63094.cljs$core$ISeq$;
var inst_63104 = (inst_63102) || (inst_63103);
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63104)){
var statearr_63184_63242 = state_63164__$1;
(statearr_63184_63242[(1)] = (16));

} else {
var statearr_63185_63243 = state_63164__$1;
(statearr_63185_63243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (22))){
var inst_63123 = (state_63164[(14)]);
var inst_63124 = (state_63164[(11)]);
var inst_63122 = (state_63164[(2)]);
var inst_63123__$1 = cljs.core.nth.call(null,inst_63122,(0),null);
var inst_63124__$1 = cljs.core.nth.call(null,inst_63122,(1),null);
var inst_63125 = (inst_63123__$1 == null);
var inst_63126 = cljs.core._EQ_.call(null,inst_63124__$1,change);
var inst_63127 = (inst_63125) || (inst_63126);
var state_63164__$1 = (function (){var statearr_63186 = state_63164;
(statearr_63186[(14)] = inst_63123__$1);

(statearr_63186[(11)] = inst_63124__$1);

return statearr_63186;
})();
if(cljs.core.truth_(inst_63127)){
var statearr_63187_63244 = state_63164__$1;
(statearr_63187_63244[(1)] = (23));

} else {
var statearr_63188_63245 = state_63164__$1;
(statearr_63188_63245[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (36))){
var inst_63116 = (state_63164[(12)]);
var inst_63094 = inst_63116;
var state_63164__$1 = (function (){var statearr_63189 = state_63164;
(statearr_63189[(7)] = inst_63094);

return statearr_63189;
})();
var statearr_63190_63246 = state_63164__$1;
(statearr_63190_63246[(2)] = null);

(statearr_63190_63246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (29))){
var inst_63138 = (state_63164[(10)]);
var state_63164__$1 = state_63164;
var statearr_63191_63247 = state_63164__$1;
(statearr_63191_63247[(2)] = inst_63138);

(statearr_63191_63247[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (6))){
var state_63164__$1 = state_63164;
var statearr_63192_63248 = state_63164__$1;
(statearr_63192_63248[(2)] = false);

(statearr_63192_63248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (28))){
var inst_63134 = (state_63164[(2)]);
var inst_63135 = calc_state.call(null);
var inst_63094 = inst_63135;
var state_63164__$1 = (function (){var statearr_63193 = state_63164;
(statearr_63193[(7)] = inst_63094);

(statearr_63193[(15)] = inst_63134);

return statearr_63193;
})();
var statearr_63194_63249 = state_63164__$1;
(statearr_63194_63249[(2)] = null);

(statearr_63194_63249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (25))){
var inst_63160 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63195_63250 = state_63164__$1;
(statearr_63195_63250[(2)] = inst_63160);

(statearr_63195_63250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (34))){
var inst_63158 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63196_63251 = state_63164__$1;
(statearr_63196_63251[(2)] = inst_63158);

(statearr_63196_63251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (17))){
var state_63164__$1 = state_63164;
var statearr_63197_63252 = state_63164__$1;
(statearr_63197_63252[(2)] = false);

(statearr_63197_63252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (3))){
var state_63164__$1 = state_63164;
var statearr_63198_63253 = state_63164__$1;
(statearr_63198_63253[(2)] = false);

(statearr_63198_63253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (12))){
var inst_63162 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63164__$1,inst_63162);
} else {
if((state_val_63165 === (2))){
var inst_63070 = (state_63164[(8)]);
var inst_63075 = inst_63070.cljs$lang$protocol_mask$partition0$;
var inst_63076 = (inst_63075 & (64));
var inst_63077 = inst_63070.cljs$core$ISeq$;
var inst_63078 = (inst_63076) || (inst_63077);
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63078)){
var statearr_63199_63254 = state_63164__$1;
(statearr_63199_63254[(1)] = (5));

} else {
var statearr_63200_63255 = state_63164__$1;
(statearr_63200_63255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (23))){
var inst_63123 = (state_63164[(14)]);
var inst_63129 = (inst_63123 == null);
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63129)){
var statearr_63201_63256 = state_63164__$1;
(statearr_63201_63256[(1)] = (26));

} else {
var statearr_63202_63257 = state_63164__$1;
(statearr_63202_63257[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (35))){
var inst_63149 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63149)){
var statearr_63203_63258 = state_63164__$1;
(statearr_63203_63258[(1)] = (36));

} else {
var statearr_63204_63259 = state_63164__$1;
(statearr_63204_63259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (19))){
var inst_63094 = (state_63164[(7)]);
var inst_63113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63094);
var state_63164__$1 = state_63164;
var statearr_63205_63260 = state_63164__$1;
(statearr_63205_63260[(2)] = inst_63113);

(statearr_63205_63260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (11))){
var inst_63094 = (state_63164[(7)]);
var inst_63098 = (inst_63094 == null);
var inst_63099 = cljs.core.not.call(null,inst_63098);
var state_63164__$1 = state_63164;
if(inst_63099){
var statearr_63206_63261 = state_63164__$1;
(statearr_63206_63261[(1)] = (13));

} else {
var statearr_63207_63262 = state_63164__$1;
(statearr_63207_63262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (9))){
var inst_63070 = (state_63164[(8)]);
var state_63164__$1 = state_63164;
var statearr_63208_63263 = state_63164__$1;
(statearr_63208_63263[(2)] = inst_63070);

(statearr_63208_63263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (5))){
var state_63164__$1 = state_63164;
var statearr_63209_63264 = state_63164__$1;
(statearr_63209_63264[(2)] = true);

(statearr_63209_63264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (14))){
var state_63164__$1 = state_63164;
var statearr_63210_63265 = state_63164__$1;
(statearr_63210_63265[(2)] = false);

(statearr_63210_63265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (26))){
var inst_63124 = (state_63164[(11)]);
var inst_63131 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_63124);
var state_63164__$1 = state_63164;
var statearr_63211_63266 = state_63164__$1;
(statearr_63211_63266[(2)] = inst_63131);

(statearr_63211_63266[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (16))){
var state_63164__$1 = state_63164;
var statearr_63212_63267 = state_63164__$1;
(statearr_63212_63267[(2)] = true);

(statearr_63212_63267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (38))){
var inst_63154 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63213_63268 = state_63164__$1;
(statearr_63213_63268[(2)] = inst_63154);

(statearr_63213_63268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (30))){
var inst_63117 = (state_63164[(9)]);
var inst_63118 = (state_63164[(13)]);
var inst_63124 = (state_63164[(11)]);
var inst_63141 = cljs.core.empty_QMARK_.call(null,inst_63117);
var inst_63142 = inst_63118.call(null,inst_63124);
var inst_63143 = cljs.core.not.call(null,inst_63142);
var inst_63144 = (inst_63141) && (inst_63143);
var state_63164__$1 = state_63164;
var statearr_63214_63269 = state_63164__$1;
(statearr_63214_63269[(2)] = inst_63144);

(statearr_63214_63269[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (10))){
var inst_63070 = (state_63164[(8)]);
var inst_63090 = (state_63164[(2)]);
var inst_63091 = cljs.core.get.call(null,inst_63090,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63092 = cljs.core.get.call(null,inst_63090,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63093 = cljs.core.get.call(null,inst_63090,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63094 = inst_63070;
var state_63164__$1 = (function (){var statearr_63215 = state_63164;
(statearr_63215[(16)] = inst_63091);

(statearr_63215[(7)] = inst_63094);

(statearr_63215[(17)] = inst_63092);

(statearr_63215[(18)] = inst_63093);

return statearr_63215;
})();
var statearr_63216_63270 = state_63164__$1;
(statearr_63216_63270[(2)] = null);

(statearr_63216_63270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (18))){
var inst_63108 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63217_63271 = state_63164__$1;
(statearr_63217_63271[(2)] = inst_63108);

(statearr_63217_63271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (37))){
var state_63164__$1 = state_63164;
var statearr_63218_63272 = state_63164__$1;
(statearr_63218_63272[(2)] = null);

(statearr_63218_63272[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (8))){
var inst_63070 = (state_63164[(8)]);
var inst_63087 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63070);
var state_63164__$1 = state_63164;
var statearr_63219_63273 = state_63164__$1;
(statearr_63219_63273[(2)] = inst_63087);

(statearr_63219_63273[(1)] = (10));


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
});})(c__18924__auto___63227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18903__auto__,c__18924__auto___63227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18904__auto__ = null;
var cljs$core$async$mix_$_state_machine__18904__auto____0 = (function (){
var statearr_63223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63223[(0)] = cljs$core$async$mix_$_state_machine__18904__auto__);

(statearr_63223[(1)] = (1));

return statearr_63223;
});
var cljs$core$async$mix_$_state_machine__18904__auto____1 = (function (state_63164){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_63164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e63224){if((e63224 instanceof Object)){
var ex__18907__auto__ = e63224;
var statearr_63225_63274 = state_63164;
(statearr_63225_63274[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63275 = state_63164;
state_63164 = G__63275;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18904__auto__ = function(state_63164){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18904__auto____1.call(this,state_63164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18904__auto____0;
cljs$core$async$mix_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18904__auto____1;
return cljs$core$async$mix_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___63227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18926__auto__ = (function (){var statearr_63226 = f__18925__auto__.call(null);
(statearr_63226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___63227);

return statearr_63226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___63227,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args63276 = [];
var len__17884__auto___63279 = arguments.length;
var i__17885__auto___63280 = (0);
while(true){
if((i__17885__auto___63280 < len__17884__auto___63279)){
args63276.push((arguments[i__17885__auto___63280]));

var G__63281 = (i__17885__auto___63280 + (1));
i__17885__auto___63280 = G__63281;
continue;
} else {
}
break;
}

var G__63278 = args63276.length;
switch (G__63278) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63276.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args63284 = [];
var len__17884__auto___63409 = arguments.length;
var i__17885__auto___63410 = (0);
while(true){
if((i__17885__auto___63410 < len__17884__auto___63409)){
args63284.push((arguments[i__17885__auto___63410]));

var G__63411 = (i__17885__auto___63410 + (1));
i__17885__auto___63410 = G__63411;
continue;
} else {
}
break;
}

var G__63286 = args63284.length;
switch (G__63286) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63284.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__63283_SHARP_){
if(cljs.core.truth_(p1__63283_SHARP_.call(null,topic))){
return p1__63283_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__63283_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async63287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63287 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63288){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63288 = meta63288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_63289,meta63288__$1){
var self__ = this;
var _63289__$1 = this;
return (new cljs.core.async.t_cljs$core$async63287(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63288__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_63289){
var self__ = this;
var _63289__$1 = this;
return self__.meta63288;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63288","meta63288",83306931,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63287";

cljs.core.async.t_cljs$core$async63287.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async63287");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async63287 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async63287(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63288){
return (new cljs.core.async.t_cljs$core$async63287(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63288));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async63287(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18924__auto___63413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___63413,mults,ensure_mult,p){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___63413,mults,ensure_mult,p){
return (function (state_63361){
var state_val_63362 = (state_63361[(1)]);
if((state_val_63362 === (7))){
var inst_63357 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63363_63414 = state_63361__$1;
(statearr_63363_63414[(2)] = inst_63357);

(statearr_63363_63414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (20))){
var state_63361__$1 = state_63361;
var statearr_63364_63415 = state_63361__$1;
(statearr_63364_63415[(2)] = null);

(statearr_63364_63415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (1))){
var state_63361__$1 = state_63361;
var statearr_63365_63416 = state_63361__$1;
(statearr_63365_63416[(2)] = null);

(statearr_63365_63416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (24))){
var inst_63340 = (state_63361[(7)]);
var inst_63349 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_63340);
var state_63361__$1 = state_63361;
var statearr_63366_63417 = state_63361__$1;
(statearr_63366_63417[(2)] = inst_63349);

(statearr_63366_63417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (4))){
var inst_63292 = (state_63361[(8)]);
var inst_63292__$1 = (state_63361[(2)]);
var inst_63293 = (inst_63292__$1 == null);
var state_63361__$1 = (function (){var statearr_63367 = state_63361;
(statearr_63367[(8)] = inst_63292__$1);

return statearr_63367;
})();
if(cljs.core.truth_(inst_63293)){
var statearr_63368_63418 = state_63361__$1;
(statearr_63368_63418[(1)] = (5));

} else {
var statearr_63369_63419 = state_63361__$1;
(statearr_63369_63419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (15))){
var inst_63334 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63370_63420 = state_63361__$1;
(statearr_63370_63420[(2)] = inst_63334);

(statearr_63370_63420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (21))){
var inst_63354 = (state_63361[(2)]);
var state_63361__$1 = (function (){var statearr_63371 = state_63361;
(statearr_63371[(9)] = inst_63354);

return statearr_63371;
})();
var statearr_63372_63421 = state_63361__$1;
(statearr_63372_63421[(2)] = null);

(statearr_63372_63421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (13))){
var inst_63316 = (state_63361[(10)]);
var inst_63318 = cljs.core.chunked_seq_QMARK_.call(null,inst_63316);
var state_63361__$1 = state_63361;
if(inst_63318){
var statearr_63373_63422 = state_63361__$1;
(statearr_63373_63422[(1)] = (16));

} else {
var statearr_63374_63423 = state_63361__$1;
(statearr_63374_63423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (22))){
var inst_63346 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
if(cljs.core.truth_(inst_63346)){
var statearr_63375_63424 = state_63361__$1;
(statearr_63375_63424[(1)] = (23));

} else {
var statearr_63376_63425 = state_63361__$1;
(statearr_63376_63425[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (6))){
var inst_63292 = (state_63361[(8)]);
var inst_63342 = (state_63361[(11)]);
var inst_63340 = (state_63361[(7)]);
var inst_63340__$1 = topic_fn.call(null,inst_63292);
var inst_63341 = cljs.core.deref.call(null,mults);
var inst_63342__$1 = cljs.core.get.call(null,inst_63341,inst_63340__$1);
var state_63361__$1 = (function (){var statearr_63377 = state_63361;
(statearr_63377[(11)] = inst_63342__$1);

(statearr_63377[(7)] = inst_63340__$1);

return statearr_63377;
})();
if(cljs.core.truth_(inst_63342__$1)){
var statearr_63378_63426 = state_63361__$1;
(statearr_63378_63426[(1)] = (19));

} else {
var statearr_63379_63427 = state_63361__$1;
(statearr_63379_63427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (25))){
var inst_63351 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63380_63428 = state_63361__$1;
(statearr_63380_63428[(2)] = inst_63351);

(statearr_63380_63428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (17))){
var inst_63316 = (state_63361[(10)]);
var inst_63325 = cljs.core.first.call(null,inst_63316);
var inst_63326 = cljs.core.async.muxch_STAR_.call(null,inst_63325);
var inst_63327 = cljs.core.async.close_BANG_.call(null,inst_63326);
var inst_63328 = cljs.core.next.call(null,inst_63316);
var inst_63302 = inst_63328;
var inst_63303 = null;
var inst_63304 = (0);
var inst_63305 = (0);
var state_63361__$1 = (function (){var statearr_63381 = state_63361;
(statearr_63381[(12)] = inst_63303);

(statearr_63381[(13)] = inst_63305);

(statearr_63381[(14)] = inst_63304);

(statearr_63381[(15)] = inst_63302);

(statearr_63381[(16)] = inst_63327);

return statearr_63381;
})();
var statearr_63382_63429 = state_63361__$1;
(statearr_63382_63429[(2)] = null);

(statearr_63382_63429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (3))){
var inst_63359 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63361__$1,inst_63359);
} else {
if((state_val_63362 === (12))){
var inst_63336 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63383_63430 = state_63361__$1;
(statearr_63383_63430[(2)] = inst_63336);

(statearr_63383_63430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (2))){
var state_63361__$1 = state_63361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63361__$1,(4),ch);
} else {
if((state_val_63362 === (23))){
var state_63361__$1 = state_63361;
var statearr_63384_63431 = state_63361__$1;
(statearr_63384_63431[(2)] = null);

(statearr_63384_63431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (19))){
var inst_63292 = (state_63361[(8)]);
var inst_63342 = (state_63361[(11)]);
var inst_63344 = cljs.core.async.muxch_STAR_.call(null,inst_63342);
var state_63361__$1 = state_63361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63361__$1,(22),inst_63344,inst_63292);
} else {
if((state_val_63362 === (11))){
var inst_63316 = (state_63361[(10)]);
var inst_63302 = (state_63361[(15)]);
var inst_63316__$1 = cljs.core.seq.call(null,inst_63302);
var state_63361__$1 = (function (){var statearr_63385 = state_63361;
(statearr_63385[(10)] = inst_63316__$1);

return statearr_63385;
})();
if(inst_63316__$1){
var statearr_63386_63432 = state_63361__$1;
(statearr_63386_63432[(1)] = (13));

} else {
var statearr_63387_63433 = state_63361__$1;
(statearr_63387_63433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (9))){
var inst_63338 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63388_63434 = state_63361__$1;
(statearr_63388_63434[(2)] = inst_63338);

(statearr_63388_63434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (5))){
var inst_63299 = cljs.core.deref.call(null,mults);
var inst_63300 = cljs.core.vals.call(null,inst_63299);
var inst_63301 = cljs.core.seq.call(null,inst_63300);
var inst_63302 = inst_63301;
var inst_63303 = null;
var inst_63304 = (0);
var inst_63305 = (0);
var state_63361__$1 = (function (){var statearr_63389 = state_63361;
(statearr_63389[(12)] = inst_63303);

(statearr_63389[(13)] = inst_63305);

(statearr_63389[(14)] = inst_63304);

(statearr_63389[(15)] = inst_63302);

return statearr_63389;
})();
var statearr_63390_63435 = state_63361__$1;
(statearr_63390_63435[(2)] = null);

(statearr_63390_63435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (14))){
var state_63361__$1 = state_63361;
var statearr_63394_63436 = state_63361__$1;
(statearr_63394_63436[(2)] = null);

(statearr_63394_63436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (16))){
var inst_63316 = (state_63361[(10)]);
var inst_63320 = cljs.core.chunk_first.call(null,inst_63316);
var inst_63321 = cljs.core.chunk_rest.call(null,inst_63316);
var inst_63322 = cljs.core.count.call(null,inst_63320);
var inst_63302 = inst_63321;
var inst_63303 = inst_63320;
var inst_63304 = inst_63322;
var inst_63305 = (0);
var state_63361__$1 = (function (){var statearr_63395 = state_63361;
(statearr_63395[(12)] = inst_63303);

(statearr_63395[(13)] = inst_63305);

(statearr_63395[(14)] = inst_63304);

(statearr_63395[(15)] = inst_63302);

return statearr_63395;
})();
var statearr_63396_63437 = state_63361__$1;
(statearr_63396_63437[(2)] = null);

(statearr_63396_63437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (10))){
var inst_63303 = (state_63361[(12)]);
var inst_63305 = (state_63361[(13)]);
var inst_63304 = (state_63361[(14)]);
var inst_63302 = (state_63361[(15)]);
var inst_63310 = cljs.core._nth.call(null,inst_63303,inst_63305);
var inst_63311 = cljs.core.async.muxch_STAR_.call(null,inst_63310);
var inst_63312 = cljs.core.async.close_BANG_.call(null,inst_63311);
var inst_63313 = (inst_63305 + (1));
var tmp63391 = inst_63303;
var tmp63392 = inst_63304;
var tmp63393 = inst_63302;
var inst_63302__$1 = tmp63393;
var inst_63303__$1 = tmp63391;
var inst_63304__$1 = tmp63392;
var inst_63305__$1 = inst_63313;
var state_63361__$1 = (function (){var statearr_63397 = state_63361;
(statearr_63397[(12)] = inst_63303__$1);

(statearr_63397[(13)] = inst_63305__$1);

(statearr_63397[(14)] = inst_63304__$1);

(statearr_63397[(15)] = inst_63302__$1);

(statearr_63397[(17)] = inst_63312);

return statearr_63397;
})();
var statearr_63398_63438 = state_63361__$1;
(statearr_63398_63438[(2)] = null);

(statearr_63398_63438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (18))){
var inst_63331 = (state_63361[(2)]);
var state_63361__$1 = state_63361;
var statearr_63399_63439 = state_63361__$1;
(statearr_63399_63439[(2)] = inst_63331);

(statearr_63399_63439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63362 === (8))){
var inst_63305 = (state_63361[(13)]);
var inst_63304 = (state_63361[(14)]);
var inst_63307 = (inst_63305 < inst_63304);
var inst_63308 = inst_63307;
var state_63361__$1 = state_63361;
if(cljs.core.truth_(inst_63308)){
var statearr_63400_63440 = state_63361__$1;
(statearr_63400_63440[(1)] = (10));

} else {
var statearr_63401_63441 = state_63361__$1;
(statearr_63401_63441[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18924__auto___63413,mults,ensure_mult,p))
;
return ((function (switch__18903__auto__,c__18924__auto___63413,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_63405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63405[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_63405[(1)] = (1));

return statearr_63405;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_63361){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_63361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e63406){if((e63406 instanceof Object)){
var ex__18907__auto__ = e63406;
var statearr_63407_63442 = state_63361;
(statearr_63407_63442[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63443 = state_63361;
state_63361 = G__63443;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_63361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_63361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___63413,mults,ensure_mult,p))
})();
var state__18926__auto__ = (function (){var statearr_63408 = f__18925__auto__.call(null);
(statearr_63408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___63413);

return statearr_63408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___63413,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args63444 = [];
var len__17884__auto___63447 = arguments.length;
var i__17885__auto___63448 = (0);
while(true){
if((i__17885__auto___63448 < len__17884__auto___63447)){
args63444.push((arguments[i__17885__auto___63448]));

var G__63449 = (i__17885__auto___63448 + (1));
i__17885__auto___63448 = G__63449;
continue;
} else {
}
break;
}

var G__63446 = args63444.length;
switch (G__63446) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63444.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args63451 = [];
var len__17884__auto___63454 = arguments.length;
var i__17885__auto___63455 = (0);
while(true){
if((i__17885__auto___63455 < len__17884__auto___63454)){
args63451.push((arguments[i__17885__auto___63455]));

var G__63456 = (i__17885__auto___63455 + (1));
i__17885__auto___63455 = G__63456;
continue;
} else {
}
break;
}

var G__63453 = args63451.length;
switch (G__63453) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63451.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args63458 = [];
var len__17884__auto___63529 = arguments.length;
var i__17885__auto___63530 = (0);
while(true){
if((i__17885__auto___63530 < len__17884__auto___63529)){
args63458.push((arguments[i__17885__auto___63530]));

var G__63531 = (i__17885__auto___63530 + (1));
i__17885__auto___63530 = G__63531;
continue;
} else {
}
break;
}

var G__63460 = args63458.length;
switch (G__63460) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63458.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18924__auto___63533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___63533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___63533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_63499){
var state_val_63500 = (state_63499[(1)]);
if((state_val_63500 === (7))){
var state_63499__$1 = state_63499;
var statearr_63501_63534 = state_63499__$1;
(statearr_63501_63534[(2)] = null);

(statearr_63501_63534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (1))){
var state_63499__$1 = state_63499;
var statearr_63502_63535 = state_63499__$1;
(statearr_63502_63535[(2)] = null);

(statearr_63502_63535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (4))){
var inst_63463 = (state_63499[(7)]);
var inst_63465 = (inst_63463 < cnt);
var state_63499__$1 = state_63499;
if(cljs.core.truth_(inst_63465)){
var statearr_63503_63536 = state_63499__$1;
(statearr_63503_63536[(1)] = (6));

} else {
var statearr_63504_63537 = state_63499__$1;
(statearr_63504_63537[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (15))){
var inst_63495 = (state_63499[(2)]);
var state_63499__$1 = state_63499;
var statearr_63505_63538 = state_63499__$1;
(statearr_63505_63538[(2)] = inst_63495);

(statearr_63505_63538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (13))){
var inst_63488 = cljs.core.async.close_BANG_.call(null,out);
var state_63499__$1 = state_63499;
var statearr_63506_63539 = state_63499__$1;
(statearr_63506_63539[(2)] = inst_63488);

(statearr_63506_63539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (6))){
var state_63499__$1 = state_63499;
var statearr_63507_63540 = state_63499__$1;
(statearr_63507_63540[(2)] = null);

(statearr_63507_63540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (3))){
var inst_63497 = (state_63499[(2)]);
var state_63499__$1 = state_63499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63499__$1,inst_63497);
} else {
if((state_val_63500 === (12))){
var inst_63485 = (state_63499[(8)]);
var inst_63485__$1 = (state_63499[(2)]);
var inst_63486 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_63485__$1);
var state_63499__$1 = (function (){var statearr_63508 = state_63499;
(statearr_63508[(8)] = inst_63485__$1);

return statearr_63508;
})();
if(cljs.core.truth_(inst_63486)){
var statearr_63509_63541 = state_63499__$1;
(statearr_63509_63541[(1)] = (13));

} else {
var statearr_63510_63542 = state_63499__$1;
(statearr_63510_63542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (2))){
var inst_63462 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_63463 = (0);
var state_63499__$1 = (function (){var statearr_63511 = state_63499;
(statearr_63511[(7)] = inst_63463);

(statearr_63511[(9)] = inst_63462);

return statearr_63511;
})();
var statearr_63512_63543 = state_63499__$1;
(statearr_63512_63543[(2)] = null);

(statearr_63512_63543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (11))){
var inst_63463 = (state_63499[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63499,(10),Object,null,(9));
var inst_63472 = chs__$1.call(null,inst_63463);
var inst_63473 = done.call(null,inst_63463);
var inst_63474 = cljs.core.async.take_BANG_.call(null,inst_63472,inst_63473);
var state_63499__$1 = state_63499;
var statearr_63513_63544 = state_63499__$1;
(statearr_63513_63544[(2)] = inst_63474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63499__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (9))){
var inst_63463 = (state_63499[(7)]);
var inst_63476 = (state_63499[(2)]);
var inst_63477 = (inst_63463 + (1));
var inst_63463__$1 = inst_63477;
var state_63499__$1 = (function (){var statearr_63514 = state_63499;
(statearr_63514[(7)] = inst_63463__$1);

(statearr_63514[(10)] = inst_63476);

return statearr_63514;
})();
var statearr_63515_63545 = state_63499__$1;
(statearr_63515_63545[(2)] = null);

(statearr_63515_63545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (5))){
var inst_63483 = (state_63499[(2)]);
var state_63499__$1 = (function (){var statearr_63516 = state_63499;
(statearr_63516[(11)] = inst_63483);

return statearr_63516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63499__$1,(12),dchan);
} else {
if((state_val_63500 === (14))){
var inst_63485 = (state_63499[(8)]);
var inst_63490 = cljs.core.apply.call(null,f,inst_63485);
var state_63499__$1 = state_63499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63499__$1,(16),out,inst_63490);
} else {
if((state_val_63500 === (16))){
var inst_63492 = (state_63499[(2)]);
var state_63499__$1 = (function (){var statearr_63517 = state_63499;
(statearr_63517[(12)] = inst_63492);

return statearr_63517;
})();
var statearr_63518_63546 = state_63499__$1;
(statearr_63518_63546[(2)] = null);

(statearr_63518_63546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (10))){
var inst_63467 = (state_63499[(2)]);
var inst_63468 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_63499__$1 = (function (){var statearr_63519 = state_63499;
(statearr_63519[(13)] = inst_63467);

return statearr_63519;
})();
var statearr_63520_63547 = state_63499__$1;
(statearr_63520_63547[(2)] = inst_63468);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63499__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63500 === (8))){
var inst_63481 = (state_63499[(2)]);
var state_63499__$1 = state_63499;
var statearr_63521_63548 = state_63499__$1;
(statearr_63521_63548[(2)] = inst_63481);

(statearr_63521_63548[(1)] = (5));


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
});})(c__18924__auto___63533,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18903__auto__,c__18924__auto___63533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_63525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63525[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_63525[(1)] = (1));

return statearr_63525;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_63499){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_63499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e63526){if((e63526 instanceof Object)){
var ex__18907__auto__ = e63526;
var statearr_63527_63549 = state_63499;
(statearr_63527_63549[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63550 = state_63499;
state_63499 = G__63550;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_63499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_63499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___63533,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18926__auto__ = (function (){var statearr_63528 = f__18925__auto__.call(null);
(statearr_63528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___63533);

return statearr_63528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___63533,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args63552 = [];
var len__17884__auto___63608 = arguments.length;
var i__17885__auto___63609 = (0);
while(true){
if((i__17885__auto___63609 < len__17884__auto___63608)){
args63552.push((arguments[i__17885__auto___63609]));

var G__63610 = (i__17885__auto___63609 + (1));
i__17885__auto___63609 = G__63610;
continue;
} else {
}
break;
}

var G__63554 = args63552.length;
switch (G__63554) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63552.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___63612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___63612,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___63612,out){
return (function (state_63584){
var state_val_63585 = (state_63584[(1)]);
if((state_val_63585 === (7))){
var inst_63564 = (state_63584[(7)]);
var inst_63563 = (state_63584[(8)]);
var inst_63563__$1 = (state_63584[(2)]);
var inst_63564__$1 = cljs.core.nth.call(null,inst_63563__$1,(0),null);
var inst_63565 = cljs.core.nth.call(null,inst_63563__$1,(1),null);
var inst_63566 = (inst_63564__$1 == null);
var state_63584__$1 = (function (){var statearr_63586 = state_63584;
(statearr_63586[(9)] = inst_63565);

(statearr_63586[(7)] = inst_63564__$1);

(statearr_63586[(8)] = inst_63563__$1);

return statearr_63586;
})();
if(cljs.core.truth_(inst_63566)){
var statearr_63587_63613 = state_63584__$1;
(statearr_63587_63613[(1)] = (8));

} else {
var statearr_63588_63614 = state_63584__$1;
(statearr_63588_63614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63585 === (1))){
var inst_63555 = cljs.core.vec.call(null,chs);
var inst_63556 = inst_63555;
var state_63584__$1 = (function (){var statearr_63589 = state_63584;
(statearr_63589[(10)] = inst_63556);

return statearr_63589;
})();
var statearr_63590_63615 = state_63584__$1;
(statearr_63590_63615[(2)] = null);

(statearr_63590_63615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63585 === (4))){
var inst_63556 = (state_63584[(10)]);
var state_63584__$1 = state_63584;
return cljs.core.async.ioc_alts_BANG_.call(null,state_63584__$1,(7),inst_63556);
} else {
if((state_val_63585 === (6))){
var inst_63580 = (state_63584[(2)]);
var state_63584__$1 = state_63584;
var statearr_63591_63616 = state_63584__$1;
(statearr_63591_63616[(2)] = inst_63580);

(statearr_63591_63616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63585 === (3))){
var inst_63582 = (state_63584[(2)]);
var state_63584__$1 = state_63584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63584__$1,inst_63582);
} else {
if((state_val_63585 === (2))){
var inst_63556 = (state_63584[(10)]);
var inst_63558 = cljs.core.count.call(null,inst_63556);
var inst_63559 = (inst_63558 > (0));
var state_63584__$1 = state_63584;
if(cljs.core.truth_(inst_63559)){
var statearr_63593_63617 = state_63584__$1;
(statearr_63593_63617[(1)] = (4));

} else {
var statearr_63594_63618 = state_63584__$1;
(statearr_63594_63618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63585 === (11))){
var inst_63556 = (state_63584[(10)]);
var inst_63573 = (state_63584[(2)]);
var tmp63592 = inst_63556;
var inst_63556__$1 = tmp63592;
var state_63584__$1 = (function (){var statearr_63595 = state_63584;
(statearr_63595[(10)] = inst_63556__$1);

(statearr_63595[(11)] = inst_63573);

return statearr_63595;
})();
var statearr_63596_63619 = state_63584__$1;
(statearr_63596_63619[(2)] = null);

(statearr_63596_63619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63585 === (9))){
var inst_63564 = (state_63584[(7)]);
var state_63584__$1 = state_63584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63584__$1,(11),out,inst_63564);
} else {
if((state_val_63585 === (5))){
var inst_63578 = cljs.core.async.close_BANG_.call(null,out);
var state_63584__$1 = state_63584;
var statearr_63597_63620 = state_63584__$1;
(statearr_63597_63620[(2)] = inst_63578);

(statearr_63597_63620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63585 === (10))){
var inst_63576 = (state_63584[(2)]);
var state_63584__$1 = state_63584;
var statearr_63598_63621 = state_63584__$1;
(statearr_63598_63621[(2)] = inst_63576);

(statearr_63598_63621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63585 === (8))){
var inst_63556 = (state_63584[(10)]);
var inst_63565 = (state_63584[(9)]);
var inst_63564 = (state_63584[(7)]);
var inst_63563 = (state_63584[(8)]);
var inst_63568 = (function (){var cs = inst_63556;
var vec__63561 = inst_63563;
var v = inst_63564;
var c = inst_63565;
return ((function (cs,vec__63561,v,c,inst_63556,inst_63565,inst_63564,inst_63563,state_val_63585,c__18924__auto___63612,out){
return (function (p1__63551_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__63551_SHARP_);
});
;})(cs,vec__63561,v,c,inst_63556,inst_63565,inst_63564,inst_63563,state_val_63585,c__18924__auto___63612,out))
})();
var inst_63569 = cljs.core.filterv.call(null,inst_63568,inst_63556);
var inst_63556__$1 = inst_63569;
var state_63584__$1 = (function (){var statearr_63599 = state_63584;
(statearr_63599[(10)] = inst_63556__$1);

return statearr_63599;
})();
var statearr_63600_63622 = state_63584__$1;
(statearr_63600_63622[(2)] = null);

(statearr_63600_63622[(1)] = (2));


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
});})(c__18924__auto___63612,out))
;
return ((function (switch__18903__auto__,c__18924__auto___63612,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_63604 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63604[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_63604[(1)] = (1));

return statearr_63604;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_63584){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_63584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e63605){if((e63605 instanceof Object)){
var ex__18907__auto__ = e63605;
var statearr_63606_63623 = state_63584;
(statearr_63606_63623[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63624 = state_63584;
state_63584 = G__63624;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_63584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_63584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___63612,out))
})();
var state__18926__auto__ = (function (){var statearr_63607 = f__18925__auto__.call(null);
(statearr_63607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___63612);

return statearr_63607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___63612,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args63625 = [];
var len__17884__auto___63674 = arguments.length;
var i__17885__auto___63675 = (0);
while(true){
if((i__17885__auto___63675 < len__17884__auto___63674)){
args63625.push((arguments[i__17885__auto___63675]));

var G__63676 = (i__17885__auto___63675 + (1));
i__17885__auto___63675 = G__63676;
continue;
} else {
}
break;
}

var G__63627 = args63625.length;
switch (G__63627) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63625.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___63678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___63678,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___63678,out){
return (function (state_63651){
var state_val_63652 = (state_63651[(1)]);
if((state_val_63652 === (7))){
var inst_63633 = (state_63651[(7)]);
var inst_63633__$1 = (state_63651[(2)]);
var inst_63634 = (inst_63633__$1 == null);
var inst_63635 = cljs.core.not.call(null,inst_63634);
var state_63651__$1 = (function (){var statearr_63653 = state_63651;
(statearr_63653[(7)] = inst_63633__$1);

return statearr_63653;
})();
if(inst_63635){
var statearr_63654_63679 = state_63651__$1;
(statearr_63654_63679[(1)] = (8));

} else {
var statearr_63655_63680 = state_63651__$1;
(statearr_63655_63680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (1))){
var inst_63628 = (0);
var state_63651__$1 = (function (){var statearr_63656 = state_63651;
(statearr_63656[(8)] = inst_63628);

return statearr_63656;
})();
var statearr_63657_63681 = state_63651__$1;
(statearr_63657_63681[(2)] = null);

(statearr_63657_63681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (4))){
var state_63651__$1 = state_63651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63651__$1,(7),ch);
} else {
if((state_val_63652 === (6))){
var inst_63646 = (state_63651[(2)]);
var state_63651__$1 = state_63651;
var statearr_63658_63682 = state_63651__$1;
(statearr_63658_63682[(2)] = inst_63646);

(statearr_63658_63682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (3))){
var inst_63648 = (state_63651[(2)]);
var inst_63649 = cljs.core.async.close_BANG_.call(null,out);
var state_63651__$1 = (function (){var statearr_63659 = state_63651;
(statearr_63659[(9)] = inst_63648);

return statearr_63659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63651__$1,inst_63649);
} else {
if((state_val_63652 === (2))){
var inst_63628 = (state_63651[(8)]);
var inst_63630 = (inst_63628 < n);
var state_63651__$1 = state_63651;
if(cljs.core.truth_(inst_63630)){
var statearr_63660_63683 = state_63651__$1;
(statearr_63660_63683[(1)] = (4));

} else {
var statearr_63661_63684 = state_63651__$1;
(statearr_63661_63684[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (11))){
var inst_63628 = (state_63651[(8)]);
var inst_63638 = (state_63651[(2)]);
var inst_63639 = (inst_63628 + (1));
var inst_63628__$1 = inst_63639;
var state_63651__$1 = (function (){var statearr_63662 = state_63651;
(statearr_63662[(10)] = inst_63638);

(statearr_63662[(8)] = inst_63628__$1);

return statearr_63662;
})();
var statearr_63663_63685 = state_63651__$1;
(statearr_63663_63685[(2)] = null);

(statearr_63663_63685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (9))){
var state_63651__$1 = state_63651;
var statearr_63664_63686 = state_63651__$1;
(statearr_63664_63686[(2)] = null);

(statearr_63664_63686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (5))){
var state_63651__$1 = state_63651;
var statearr_63665_63687 = state_63651__$1;
(statearr_63665_63687[(2)] = null);

(statearr_63665_63687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (10))){
var inst_63643 = (state_63651[(2)]);
var state_63651__$1 = state_63651;
var statearr_63666_63688 = state_63651__$1;
(statearr_63666_63688[(2)] = inst_63643);

(statearr_63666_63688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63652 === (8))){
var inst_63633 = (state_63651[(7)]);
var state_63651__$1 = state_63651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63651__$1,(11),out,inst_63633);
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
});})(c__18924__auto___63678,out))
;
return ((function (switch__18903__auto__,c__18924__auto___63678,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_63670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63670[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_63670[(1)] = (1));

return statearr_63670;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_63651){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_63651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e63671){if((e63671 instanceof Object)){
var ex__18907__auto__ = e63671;
var statearr_63672_63689 = state_63651;
(statearr_63672_63689[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63690 = state_63651;
state_63651 = G__63690;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_63651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_63651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___63678,out))
})();
var state__18926__auto__ = (function (){var statearr_63673 = f__18925__auto__.call(null);
(statearr_63673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___63678);

return statearr_63673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___63678,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async63698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63698 = (function (map_LT_,f,ch,meta63699){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta63699 = meta63699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63700,meta63699__$1){
var self__ = this;
var _63700__$1 = this;
return (new cljs.core.async.t_cljs$core$async63698(self__.map_LT_,self__.f,self__.ch,meta63699__$1));
});

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63700){
var self__ = this;
var _63700__$1 = this;
return self__.meta63699;
});

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async63701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63701 = (function (map_LT_,f,ch,meta63699,_,fn1,meta63702){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta63699 = meta63699;
this._ = _;
this.fn1 = fn1;
this.meta63702 = meta63702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_63703,meta63702__$1){
var self__ = this;
var _63703__$1 = this;
return (new cljs.core.async.t_cljs$core$async63701(self__.map_LT_,self__.f,self__.ch,self__.meta63699,self__._,self__.fn1,meta63702__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async63701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_63703){
var self__ = this;
var _63703__$1 = this;
return self__.meta63702;
});})(___$1))
;

cljs.core.async.t_cljs$core$async63701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async63701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async63701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async63701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__63691_SHARP_){
return f1.call(null,(((p1__63691_SHARP_ == null))?null:self__.f.call(null,p1__63691_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async63701.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63699","meta63699",63968304,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63698","cljs.core.async/t_cljs$core$async63698",607655121,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63702","meta63702",-1924374241,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async63701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63701";

cljs.core.async.t_cljs$core$async63701.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async63701");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async63701 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63701(map_LT___$1,f__$1,ch__$1,meta63699__$1,___$2,fn1__$1,meta63702){
return (new cljs.core.async.t_cljs$core$async63701(map_LT___$1,f__$1,ch__$1,meta63699__$1,___$2,fn1__$1,meta63702));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async63701(self__.map_LT_,self__.f,self__.ch,self__.meta63699,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async63698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async63698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63699","meta63699",63968304,null)], null);
});

cljs.core.async.t_cljs$core$async63698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63698";

cljs.core.async.t_cljs$core$async63698.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async63698");
});

cljs.core.async.__GT_t_cljs$core$async63698 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63698(map_LT___$1,f__$1,ch__$1,meta63699){
return (new cljs.core.async.t_cljs$core$async63698(map_LT___$1,f__$1,ch__$1,meta63699));
});

}

return (new cljs.core.async.t_cljs$core$async63698(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async63707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63707 = (function (map_GT_,f,ch,meta63708){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta63708 = meta63708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63709,meta63708__$1){
var self__ = this;
var _63709__$1 = this;
return (new cljs.core.async.t_cljs$core$async63707(self__.map_GT_,self__.f,self__.ch,meta63708__$1));
});

cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63709){
var self__ = this;
var _63709__$1 = this;
return self__.meta63708;
});

cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async63707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async63707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63708","meta63708",-263278977,null)], null);
});

cljs.core.async.t_cljs$core$async63707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63707";

cljs.core.async.t_cljs$core$async63707.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async63707");
});

cljs.core.async.__GT_t_cljs$core$async63707 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63707(map_GT___$1,f__$1,ch__$1,meta63708){
return (new cljs.core.async.t_cljs$core$async63707(map_GT___$1,f__$1,ch__$1,meta63708));
});

}

return (new cljs.core.async.t_cljs$core$async63707(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async63713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63713 = (function (filter_GT_,p,ch,meta63714){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta63714 = meta63714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63715,meta63714__$1){
var self__ = this;
var _63715__$1 = this;
return (new cljs.core.async.t_cljs$core$async63713(self__.filter_GT_,self__.p,self__.ch,meta63714__$1));
});

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63715){
var self__ = this;
var _63715__$1 = this;
return self__.meta63714;
});

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async63713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async63713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63714","meta63714",966475077,null)], null);
});

cljs.core.async.t_cljs$core$async63713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63713";

cljs.core.async.t_cljs$core$async63713.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async63713");
});

cljs.core.async.__GT_t_cljs$core$async63713 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63713(filter_GT___$1,p__$1,ch__$1,meta63714){
return (new cljs.core.async.t_cljs$core$async63713(filter_GT___$1,p__$1,ch__$1,meta63714));
});

}

return (new cljs.core.async.t_cljs$core$async63713(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args63716 = [];
var len__17884__auto___63760 = arguments.length;
var i__17885__auto___63761 = (0);
while(true){
if((i__17885__auto___63761 < len__17884__auto___63760)){
args63716.push((arguments[i__17885__auto___63761]));

var G__63762 = (i__17885__auto___63761 + (1));
i__17885__auto___63761 = G__63762;
continue;
} else {
}
break;
}

var G__63718 = args63716.length;
switch (G__63718) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63716.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___63764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___63764,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___63764,out){
return (function (state_63739){
var state_val_63740 = (state_63739[(1)]);
if((state_val_63740 === (7))){
var inst_63735 = (state_63739[(2)]);
var state_63739__$1 = state_63739;
var statearr_63741_63765 = state_63739__$1;
(statearr_63741_63765[(2)] = inst_63735);

(statearr_63741_63765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (1))){
var state_63739__$1 = state_63739;
var statearr_63742_63766 = state_63739__$1;
(statearr_63742_63766[(2)] = null);

(statearr_63742_63766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (4))){
var inst_63721 = (state_63739[(7)]);
var inst_63721__$1 = (state_63739[(2)]);
var inst_63722 = (inst_63721__$1 == null);
var state_63739__$1 = (function (){var statearr_63743 = state_63739;
(statearr_63743[(7)] = inst_63721__$1);

return statearr_63743;
})();
if(cljs.core.truth_(inst_63722)){
var statearr_63744_63767 = state_63739__$1;
(statearr_63744_63767[(1)] = (5));

} else {
var statearr_63745_63768 = state_63739__$1;
(statearr_63745_63768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (6))){
var inst_63721 = (state_63739[(7)]);
var inst_63726 = p.call(null,inst_63721);
var state_63739__$1 = state_63739;
if(cljs.core.truth_(inst_63726)){
var statearr_63746_63769 = state_63739__$1;
(statearr_63746_63769[(1)] = (8));

} else {
var statearr_63747_63770 = state_63739__$1;
(statearr_63747_63770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (3))){
var inst_63737 = (state_63739[(2)]);
var state_63739__$1 = state_63739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63739__$1,inst_63737);
} else {
if((state_val_63740 === (2))){
var state_63739__$1 = state_63739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63739__$1,(4),ch);
} else {
if((state_val_63740 === (11))){
var inst_63729 = (state_63739[(2)]);
var state_63739__$1 = state_63739;
var statearr_63748_63771 = state_63739__$1;
(statearr_63748_63771[(2)] = inst_63729);

(statearr_63748_63771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (9))){
var state_63739__$1 = state_63739;
var statearr_63749_63772 = state_63739__$1;
(statearr_63749_63772[(2)] = null);

(statearr_63749_63772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (5))){
var inst_63724 = cljs.core.async.close_BANG_.call(null,out);
var state_63739__$1 = state_63739;
var statearr_63750_63773 = state_63739__$1;
(statearr_63750_63773[(2)] = inst_63724);

(statearr_63750_63773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (10))){
var inst_63732 = (state_63739[(2)]);
var state_63739__$1 = (function (){var statearr_63751 = state_63739;
(statearr_63751[(8)] = inst_63732);

return statearr_63751;
})();
var statearr_63752_63774 = state_63739__$1;
(statearr_63752_63774[(2)] = null);

(statearr_63752_63774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63740 === (8))){
var inst_63721 = (state_63739[(7)]);
var state_63739__$1 = state_63739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63739__$1,(11),out,inst_63721);
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
});})(c__18924__auto___63764,out))
;
return ((function (switch__18903__auto__,c__18924__auto___63764,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_63756 = [null,null,null,null,null,null,null,null,null];
(statearr_63756[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_63756[(1)] = (1));

return statearr_63756;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_63739){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_63739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e63757){if((e63757 instanceof Object)){
var ex__18907__auto__ = e63757;
var statearr_63758_63775 = state_63739;
(statearr_63758_63775[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63776 = state_63739;
state_63739 = G__63776;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_63739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_63739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___63764,out))
})();
var state__18926__auto__ = (function (){var statearr_63759 = f__18925__auto__.call(null);
(statearr_63759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___63764);

return statearr_63759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___63764,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args63777 = [];
var len__17884__auto___63780 = arguments.length;
var i__17885__auto___63781 = (0);
while(true){
if((i__17885__auto___63781 < len__17884__auto___63780)){
args63777.push((arguments[i__17885__auto___63781]));

var G__63782 = (i__17885__auto___63781 + (1));
i__17885__auto___63781 = G__63782;
continue;
} else {
}
break;
}

var G__63779 = args63777.length;
switch (G__63779) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63777.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_63949){
var state_val_63950 = (state_63949[(1)]);
if((state_val_63950 === (7))){
var inst_63945 = (state_63949[(2)]);
var state_63949__$1 = state_63949;
var statearr_63951_63992 = state_63949__$1;
(statearr_63951_63992[(2)] = inst_63945);

(statearr_63951_63992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (20))){
var inst_63915 = (state_63949[(7)]);
var inst_63926 = (state_63949[(2)]);
var inst_63927 = cljs.core.next.call(null,inst_63915);
var inst_63901 = inst_63927;
var inst_63902 = null;
var inst_63903 = (0);
var inst_63904 = (0);
var state_63949__$1 = (function (){var statearr_63952 = state_63949;
(statearr_63952[(8)] = inst_63904);

(statearr_63952[(9)] = inst_63902);

(statearr_63952[(10)] = inst_63901);

(statearr_63952[(11)] = inst_63903);

(statearr_63952[(12)] = inst_63926);

return statearr_63952;
})();
var statearr_63953_63993 = state_63949__$1;
(statearr_63953_63993[(2)] = null);

(statearr_63953_63993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (1))){
var state_63949__$1 = state_63949;
var statearr_63954_63994 = state_63949__$1;
(statearr_63954_63994[(2)] = null);

(statearr_63954_63994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (4))){
var inst_63890 = (state_63949[(13)]);
var inst_63890__$1 = (state_63949[(2)]);
var inst_63891 = (inst_63890__$1 == null);
var state_63949__$1 = (function (){var statearr_63955 = state_63949;
(statearr_63955[(13)] = inst_63890__$1);

return statearr_63955;
})();
if(cljs.core.truth_(inst_63891)){
var statearr_63956_63995 = state_63949__$1;
(statearr_63956_63995[(1)] = (5));

} else {
var statearr_63957_63996 = state_63949__$1;
(statearr_63957_63996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (15))){
var state_63949__$1 = state_63949;
var statearr_63961_63997 = state_63949__$1;
(statearr_63961_63997[(2)] = null);

(statearr_63961_63997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (21))){
var state_63949__$1 = state_63949;
var statearr_63962_63998 = state_63949__$1;
(statearr_63962_63998[(2)] = null);

(statearr_63962_63998[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (13))){
var inst_63904 = (state_63949[(8)]);
var inst_63902 = (state_63949[(9)]);
var inst_63901 = (state_63949[(10)]);
var inst_63903 = (state_63949[(11)]);
var inst_63911 = (state_63949[(2)]);
var inst_63912 = (inst_63904 + (1));
var tmp63958 = inst_63902;
var tmp63959 = inst_63901;
var tmp63960 = inst_63903;
var inst_63901__$1 = tmp63959;
var inst_63902__$1 = tmp63958;
var inst_63903__$1 = tmp63960;
var inst_63904__$1 = inst_63912;
var state_63949__$1 = (function (){var statearr_63963 = state_63949;
(statearr_63963[(14)] = inst_63911);

(statearr_63963[(8)] = inst_63904__$1);

(statearr_63963[(9)] = inst_63902__$1);

(statearr_63963[(10)] = inst_63901__$1);

(statearr_63963[(11)] = inst_63903__$1);

return statearr_63963;
})();
var statearr_63964_63999 = state_63949__$1;
(statearr_63964_63999[(2)] = null);

(statearr_63964_63999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (22))){
var state_63949__$1 = state_63949;
var statearr_63965_64000 = state_63949__$1;
(statearr_63965_64000[(2)] = null);

(statearr_63965_64000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (6))){
var inst_63890 = (state_63949[(13)]);
var inst_63899 = f.call(null,inst_63890);
var inst_63900 = cljs.core.seq.call(null,inst_63899);
var inst_63901 = inst_63900;
var inst_63902 = null;
var inst_63903 = (0);
var inst_63904 = (0);
var state_63949__$1 = (function (){var statearr_63966 = state_63949;
(statearr_63966[(8)] = inst_63904);

(statearr_63966[(9)] = inst_63902);

(statearr_63966[(10)] = inst_63901);

(statearr_63966[(11)] = inst_63903);

return statearr_63966;
})();
var statearr_63967_64001 = state_63949__$1;
(statearr_63967_64001[(2)] = null);

(statearr_63967_64001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (17))){
var inst_63915 = (state_63949[(7)]);
var inst_63919 = cljs.core.chunk_first.call(null,inst_63915);
var inst_63920 = cljs.core.chunk_rest.call(null,inst_63915);
var inst_63921 = cljs.core.count.call(null,inst_63919);
var inst_63901 = inst_63920;
var inst_63902 = inst_63919;
var inst_63903 = inst_63921;
var inst_63904 = (0);
var state_63949__$1 = (function (){var statearr_63968 = state_63949;
(statearr_63968[(8)] = inst_63904);

(statearr_63968[(9)] = inst_63902);

(statearr_63968[(10)] = inst_63901);

(statearr_63968[(11)] = inst_63903);

return statearr_63968;
})();
var statearr_63969_64002 = state_63949__$1;
(statearr_63969_64002[(2)] = null);

(statearr_63969_64002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (3))){
var inst_63947 = (state_63949[(2)]);
var state_63949__$1 = state_63949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63949__$1,inst_63947);
} else {
if((state_val_63950 === (12))){
var inst_63935 = (state_63949[(2)]);
var state_63949__$1 = state_63949;
var statearr_63970_64003 = state_63949__$1;
(statearr_63970_64003[(2)] = inst_63935);

(statearr_63970_64003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (2))){
var state_63949__$1 = state_63949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63949__$1,(4),in$);
} else {
if((state_val_63950 === (23))){
var inst_63943 = (state_63949[(2)]);
var state_63949__$1 = state_63949;
var statearr_63971_64004 = state_63949__$1;
(statearr_63971_64004[(2)] = inst_63943);

(statearr_63971_64004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (19))){
var inst_63930 = (state_63949[(2)]);
var state_63949__$1 = state_63949;
var statearr_63972_64005 = state_63949__$1;
(statearr_63972_64005[(2)] = inst_63930);

(statearr_63972_64005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (11))){
var inst_63901 = (state_63949[(10)]);
var inst_63915 = (state_63949[(7)]);
var inst_63915__$1 = cljs.core.seq.call(null,inst_63901);
var state_63949__$1 = (function (){var statearr_63973 = state_63949;
(statearr_63973[(7)] = inst_63915__$1);

return statearr_63973;
})();
if(inst_63915__$1){
var statearr_63974_64006 = state_63949__$1;
(statearr_63974_64006[(1)] = (14));

} else {
var statearr_63975_64007 = state_63949__$1;
(statearr_63975_64007[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (9))){
var inst_63937 = (state_63949[(2)]);
var inst_63938 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_63949__$1 = (function (){var statearr_63976 = state_63949;
(statearr_63976[(15)] = inst_63937);

return statearr_63976;
})();
if(cljs.core.truth_(inst_63938)){
var statearr_63977_64008 = state_63949__$1;
(statearr_63977_64008[(1)] = (21));

} else {
var statearr_63978_64009 = state_63949__$1;
(statearr_63978_64009[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (5))){
var inst_63893 = cljs.core.async.close_BANG_.call(null,out);
var state_63949__$1 = state_63949;
var statearr_63979_64010 = state_63949__$1;
(statearr_63979_64010[(2)] = inst_63893);

(statearr_63979_64010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (14))){
var inst_63915 = (state_63949[(7)]);
var inst_63917 = cljs.core.chunked_seq_QMARK_.call(null,inst_63915);
var state_63949__$1 = state_63949;
if(inst_63917){
var statearr_63980_64011 = state_63949__$1;
(statearr_63980_64011[(1)] = (17));

} else {
var statearr_63981_64012 = state_63949__$1;
(statearr_63981_64012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (16))){
var inst_63933 = (state_63949[(2)]);
var state_63949__$1 = state_63949;
var statearr_63982_64013 = state_63949__$1;
(statearr_63982_64013[(2)] = inst_63933);

(statearr_63982_64013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63950 === (10))){
var inst_63904 = (state_63949[(8)]);
var inst_63902 = (state_63949[(9)]);
var inst_63909 = cljs.core._nth.call(null,inst_63902,inst_63904);
var state_63949__$1 = state_63949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63949__$1,(13),out,inst_63909);
} else {
if((state_val_63950 === (18))){
var inst_63915 = (state_63949[(7)]);
var inst_63924 = cljs.core.first.call(null,inst_63915);
var state_63949__$1 = state_63949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63949__$1,(20),out,inst_63924);
} else {
if((state_val_63950 === (8))){
var inst_63904 = (state_63949[(8)]);
var inst_63903 = (state_63949[(11)]);
var inst_63906 = (inst_63904 < inst_63903);
var inst_63907 = inst_63906;
var state_63949__$1 = state_63949;
if(cljs.core.truth_(inst_63907)){
var statearr_63983_64014 = state_63949__$1;
(statearr_63983_64014[(1)] = (10));

} else {
var statearr_63984_64015 = state_63949__$1;
(statearr_63984_64015[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_63988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63988[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__);

(statearr_63988[(1)] = (1));

return statearr_63988;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____1 = (function (state_63949){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_63949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e63989){if((e63989 instanceof Object)){
var ex__18907__auto__ = e63989;
var statearr_63990_64016 = state_63949;
(statearr_63990_64016[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64017 = state_63949;
state_63949 = G__64017;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__ = function(state_63949){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____1.call(this,state_63949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_63991 = f__18925__auto__.call(null);
(statearr_63991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_63991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args64018 = [];
var len__17884__auto___64021 = arguments.length;
var i__17885__auto___64022 = (0);
while(true){
if((i__17885__auto___64022 < len__17884__auto___64021)){
args64018.push((arguments[i__17885__auto___64022]));

var G__64023 = (i__17885__auto___64022 + (1));
i__17885__auto___64022 = G__64023;
continue;
} else {
}
break;
}

var G__64020 = args64018.length;
switch (G__64020) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64018.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args64025 = [];
var len__17884__auto___64028 = arguments.length;
var i__17885__auto___64029 = (0);
while(true){
if((i__17885__auto___64029 < len__17884__auto___64028)){
args64025.push((arguments[i__17885__auto___64029]));

var G__64030 = (i__17885__auto___64029 + (1));
i__17885__auto___64029 = G__64030;
continue;
} else {
}
break;
}

var G__64027 = args64025.length;
switch (G__64027) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64025.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args64032 = [];
var len__17884__auto___64083 = arguments.length;
var i__17885__auto___64084 = (0);
while(true){
if((i__17885__auto___64084 < len__17884__auto___64083)){
args64032.push((arguments[i__17885__auto___64084]));

var G__64085 = (i__17885__auto___64084 + (1));
i__17885__auto___64084 = G__64085;
continue;
} else {
}
break;
}

var G__64034 = args64032.length;
switch (G__64034) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64032.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___64087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___64087,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___64087,out){
return (function (state_64058){
var state_val_64059 = (state_64058[(1)]);
if((state_val_64059 === (7))){
var inst_64053 = (state_64058[(2)]);
var state_64058__$1 = state_64058;
var statearr_64060_64088 = state_64058__$1;
(statearr_64060_64088[(2)] = inst_64053);

(statearr_64060_64088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64059 === (1))){
var inst_64035 = null;
var state_64058__$1 = (function (){var statearr_64061 = state_64058;
(statearr_64061[(7)] = inst_64035);

return statearr_64061;
})();
var statearr_64062_64089 = state_64058__$1;
(statearr_64062_64089[(2)] = null);

(statearr_64062_64089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64059 === (4))){
var inst_64038 = (state_64058[(8)]);
var inst_64038__$1 = (state_64058[(2)]);
var inst_64039 = (inst_64038__$1 == null);
var inst_64040 = cljs.core.not.call(null,inst_64039);
var state_64058__$1 = (function (){var statearr_64063 = state_64058;
(statearr_64063[(8)] = inst_64038__$1);

return statearr_64063;
})();
if(inst_64040){
var statearr_64064_64090 = state_64058__$1;
(statearr_64064_64090[(1)] = (5));

} else {
var statearr_64065_64091 = state_64058__$1;
(statearr_64065_64091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64059 === (6))){
var state_64058__$1 = state_64058;
var statearr_64066_64092 = state_64058__$1;
(statearr_64066_64092[(2)] = null);

(statearr_64066_64092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64059 === (3))){
var inst_64055 = (state_64058[(2)]);
var inst_64056 = cljs.core.async.close_BANG_.call(null,out);
var state_64058__$1 = (function (){var statearr_64067 = state_64058;
(statearr_64067[(9)] = inst_64055);

return statearr_64067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64058__$1,inst_64056);
} else {
if((state_val_64059 === (2))){
var state_64058__$1 = state_64058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64058__$1,(4),ch);
} else {
if((state_val_64059 === (11))){
var inst_64038 = (state_64058[(8)]);
var inst_64047 = (state_64058[(2)]);
var inst_64035 = inst_64038;
var state_64058__$1 = (function (){var statearr_64068 = state_64058;
(statearr_64068[(7)] = inst_64035);

(statearr_64068[(10)] = inst_64047);

return statearr_64068;
})();
var statearr_64069_64093 = state_64058__$1;
(statearr_64069_64093[(2)] = null);

(statearr_64069_64093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64059 === (9))){
var inst_64038 = (state_64058[(8)]);
var state_64058__$1 = state_64058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64058__$1,(11),out,inst_64038);
} else {
if((state_val_64059 === (5))){
var inst_64035 = (state_64058[(7)]);
var inst_64038 = (state_64058[(8)]);
var inst_64042 = cljs.core._EQ_.call(null,inst_64038,inst_64035);
var state_64058__$1 = state_64058;
if(inst_64042){
var statearr_64071_64094 = state_64058__$1;
(statearr_64071_64094[(1)] = (8));

} else {
var statearr_64072_64095 = state_64058__$1;
(statearr_64072_64095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64059 === (10))){
var inst_64050 = (state_64058[(2)]);
var state_64058__$1 = state_64058;
var statearr_64073_64096 = state_64058__$1;
(statearr_64073_64096[(2)] = inst_64050);

(statearr_64073_64096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64059 === (8))){
var inst_64035 = (state_64058[(7)]);
var tmp64070 = inst_64035;
var inst_64035__$1 = tmp64070;
var state_64058__$1 = (function (){var statearr_64074 = state_64058;
(statearr_64074[(7)] = inst_64035__$1);

return statearr_64074;
})();
var statearr_64075_64097 = state_64058__$1;
(statearr_64075_64097[(2)] = null);

(statearr_64075_64097[(1)] = (2));


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
});})(c__18924__auto___64087,out))
;
return ((function (switch__18903__auto__,c__18924__auto___64087,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_64079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64079[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_64079[(1)] = (1));

return statearr_64079;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_64058){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_64058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e64080){if((e64080 instanceof Object)){
var ex__18907__auto__ = e64080;
var statearr_64081_64098 = state_64058;
(statearr_64081_64098[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64099 = state_64058;
state_64058 = G__64099;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_64058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_64058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___64087,out))
})();
var state__18926__auto__ = (function (){var statearr_64082 = f__18925__auto__.call(null);
(statearr_64082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___64087);

return statearr_64082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___64087,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args64100 = [];
var len__17884__auto___64170 = arguments.length;
var i__17885__auto___64171 = (0);
while(true){
if((i__17885__auto___64171 < len__17884__auto___64170)){
args64100.push((arguments[i__17885__auto___64171]));

var G__64172 = (i__17885__auto___64171 + (1));
i__17885__auto___64171 = G__64172;
continue;
} else {
}
break;
}

var G__64102 = args64100.length;
switch (G__64102) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64100.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___64174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___64174,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___64174,out){
return (function (state_64140){
var state_val_64141 = (state_64140[(1)]);
if((state_val_64141 === (7))){
var inst_64136 = (state_64140[(2)]);
var state_64140__$1 = state_64140;
var statearr_64142_64175 = state_64140__$1;
(statearr_64142_64175[(2)] = inst_64136);

(statearr_64142_64175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (1))){
var inst_64103 = (new Array(n));
var inst_64104 = inst_64103;
var inst_64105 = (0);
var state_64140__$1 = (function (){var statearr_64143 = state_64140;
(statearr_64143[(7)] = inst_64104);

(statearr_64143[(8)] = inst_64105);

return statearr_64143;
})();
var statearr_64144_64176 = state_64140__$1;
(statearr_64144_64176[(2)] = null);

(statearr_64144_64176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (4))){
var inst_64108 = (state_64140[(9)]);
var inst_64108__$1 = (state_64140[(2)]);
var inst_64109 = (inst_64108__$1 == null);
var inst_64110 = cljs.core.not.call(null,inst_64109);
var state_64140__$1 = (function (){var statearr_64145 = state_64140;
(statearr_64145[(9)] = inst_64108__$1);

return statearr_64145;
})();
if(inst_64110){
var statearr_64146_64177 = state_64140__$1;
(statearr_64146_64177[(1)] = (5));

} else {
var statearr_64147_64178 = state_64140__$1;
(statearr_64147_64178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (15))){
var inst_64130 = (state_64140[(2)]);
var state_64140__$1 = state_64140;
var statearr_64148_64179 = state_64140__$1;
(statearr_64148_64179[(2)] = inst_64130);

(statearr_64148_64179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (13))){
var state_64140__$1 = state_64140;
var statearr_64149_64180 = state_64140__$1;
(statearr_64149_64180[(2)] = null);

(statearr_64149_64180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (6))){
var inst_64105 = (state_64140[(8)]);
var inst_64126 = (inst_64105 > (0));
var state_64140__$1 = state_64140;
if(cljs.core.truth_(inst_64126)){
var statearr_64150_64181 = state_64140__$1;
(statearr_64150_64181[(1)] = (12));

} else {
var statearr_64151_64182 = state_64140__$1;
(statearr_64151_64182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (3))){
var inst_64138 = (state_64140[(2)]);
var state_64140__$1 = state_64140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64140__$1,inst_64138);
} else {
if((state_val_64141 === (12))){
var inst_64104 = (state_64140[(7)]);
var inst_64128 = cljs.core.vec.call(null,inst_64104);
var state_64140__$1 = state_64140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64140__$1,(15),out,inst_64128);
} else {
if((state_val_64141 === (2))){
var state_64140__$1 = state_64140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64140__$1,(4),ch);
} else {
if((state_val_64141 === (11))){
var inst_64120 = (state_64140[(2)]);
var inst_64121 = (new Array(n));
var inst_64104 = inst_64121;
var inst_64105 = (0);
var state_64140__$1 = (function (){var statearr_64152 = state_64140;
(statearr_64152[(7)] = inst_64104);

(statearr_64152[(10)] = inst_64120);

(statearr_64152[(8)] = inst_64105);

return statearr_64152;
})();
var statearr_64153_64183 = state_64140__$1;
(statearr_64153_64183[(2)] = null);

(statearr_64153_64183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (9))){
var inst_64104 = (state_64140[(7)]);
var inst_64118 = cljs.core.vec.call(null,inst_64104);
var state_64140__$1 = state_64140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64140__$1,(11),out,inst_64118);
} else {
if((state_val_64141 === (5))){
var inst_64104 = (state_64140[(7)]);
var inst_64105 = (state_64140[(8)]);
var inst_64113 = (state_64140[(11)]);
var inst_64108 = (state_64140[(9)]);
var inst_64112 = (inst_64104[inst_64105] = inst_64108);
var inst_64113__$1 = (inst_64105 + (1));
var inst_64114 = (inst_64113__$1 < n);
var state_64140__$1 = (function (){var statearr_64154 = state_64140;
(statearr_64154[(11)] = inst_64113__$1);

(statearr_64154[(12)] = inst_64112);

return statearr_64154;
})();
if(cljs.core.truth_(inst_64114)){
var statearr_64155_64184 = state_64140__$1;
(statearr_64155_64184[(1)] = (8));

} else {
var statearr_64156_64185 = state_64140__$1;
(statearr_64156_64185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (14))){
var inst_64133 = (state_64140[(2)]);
var inst_64134 = cljs.core.async.close_BANG_.call(null,out);
var state_64140__$1 = (function (){var statearr_64158 = state_64140;
(statearr_64158[(13)] = inst_64133);

return statearr_64158;
})();
var statearr_64159_64186 = state_64140__$1;
(statearr_64159_64186[(2)] = inst_64134);

(statearr_64159_64186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (10))){
var inst_64124 = (state_64140[(2)]);
var state_64140__$1 = state_64140;
var statearr_64160_64187 = state_64140__$1;
(statearr_64160_64187[(2)] = inst_64124);

(statearr_64160_64187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64141 === (8))){
var inst_64104 = (state_64140[(7)]);
var inst_64113 = (state_64140[(11)]);
var tmp64157 = inst_64104;
var inst_64104__$1 = tmp64157;
var inst_64105 = inst_64113;
var state_64140__$1 = (function (){var statearr_64161 = state_64140;
(statearr_64161[(7)] = inst_64104__$1);

(statearr_64161[(8)] = inst_64105);

return statearr_64161;
})();
var statearr_64162_64188 = state_64140__$1;
(statearr_64162_64188[(2)] = null);

(statearr_64162_64188[(1)] = (2));


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
});})(c__18924__auto___64174,out))
;
return ((function (switch__18903__auto__,c__18924__auto___64174,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_64166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64166[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_64166[(1)] = (1));

return statearr_64166;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_64140){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_64140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e64167){if((e64167 instanceof Object)){
var ex__18907__auto__ = e64167;
var statearr_64168_64189 = state_64140;
(statearr_64168_64189[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64190 = state_64140;
state_64140 = G__64190;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_64140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_64140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___64174,out))
})();
var state__18926__auto__ = (function (){var statearr_64169 = f__18925__auto__.call(null);
(statearr_64169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___64174);

return statearr_64169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___64174,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args64191 = [];
var len__17884__auto___64265 = arguments.length;
var i__17885__auto___64266 = (0);
while(true){
if((i__17885__auto___64266 < len__17884__auto___64265)){
args64191.push((arguments[i__17885__auto___64266]));

var G__64267 = (i__17885__auto___64266 + (1));
i__17885__auto___64266 = G__64267;
continue;
} else {
}
break;
}

var G__64193 = args64191.length;
switch (G__64193) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64191.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___64269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___64269,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___64269,out){
return (function (state_64235){
var state_val_64236 = (state_64235[(1)]);
if((state_val_64236 === (7))){
var inst_64231 = (state_64235[(2)]);
var state_64235__$1 = state_64235;
var statearr_64237_64270 = state_64235__$1;
(statearr_64237_64270[(2)] = inst_64231);

(statearr_64237_64270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (1))){
var inst_64194 = [];
var inst_64195 = inst_64194;
var inst_64196 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64235__$1 = (function (){var statearr_64238 = state_64235;
(statearr_64238[(7)] = inst_64195);

(statearr_64238[(8)] = inst_64196);

return statearr_64238;
})();
var statearr_64239_64271 = state_64235__$1;
(statearr_64239_64271[(2)] = null);

(statearr_64239_64271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (4))){
var inst_64199 = (state_64235[(9)]);
var inst_64199__$1 = (state_64235[(2)]);
var inst_64200 = (inst_64199__$1 == null);
var inst_64201 = cljs.core.not.call(null,inst_64200);
var state_64235__$1 = (function (){var statearr_64240 = state_64235;
(statearr_64240[(9)] = inst_64199__$1);

return statearr_64240;
})();
if(inst_64201){
var statearr_64241_64272 = state_64235__$1;
(statearr_64241_64272[(1)] = (5));

} else {
var statearr_64242_64273 = state_64235__$1;
(statearr_64242_64273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (15))){
var inst_64225 = (state_64235[(2)]);
var state_64235__$1 = state_64235;
var statearr_64243_64274 = state_64235__$1;
(statearr_64243_64274[(2)] = inst_64225);

(statearr_64243_64274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (13))){
var state_64235__$1 = state_64235;
var statearr_64244_64275 = state_64235__$1;
(statearr_64244_64275[(2)] = null);

(statearr_64244_64275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (6))){
var inst_64195 = (state_64235[(7)]);
var inst_64220 = inst_64195.length;
var inst_64221 = (inst_64220 > (0));
var state_64235__$1 = state_64235;
if(cljs.core.truth_(inst_64221)){
var statearr_64245_64276 = state_64235__$1;
(statearr_64245_64276[(1)] = (12));

} else {
var statearr_64246_64277 = state_64235__$1;
(statearr_64246_64277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (3))){
var inst_64233 = (state_64235[(2)]);
var state_64235__$1 = state_64235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64235__$1,inst_64233);
} else {
if((state_val_64236 === (12))){
var inst_64195 = (state_64235[(7)]);
var inst_64223 = cljs.core.vec.call(null,inst_64195);
var state_64235__$1 = state_64235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64235__$1,(15),out,inst_64223);
} else {
if((state_val_64236 === (2))){
var state_64235__$1 = state_64235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64235__$1,(4),ch);
} else {
if((state_val_64236 === (11))){
var inst_64203 = (state_64235[(10)]);
var inst_64199 = (state_64235[(9)]);
var inst_64213 = (state_64235[(2)]);
var inst_64214 = [];
var inst_64215 = inst_64214.push(inst_64199);
var inst_64195 = inst_64214;
var inst_64196 = inst_64203;
var state_64235__$1 = (function (){var statearr_64247 = state_64235;
(statearr_64247[(7)] = inst_64195);

(statearr_64247[(11)] = inst_64215);

(statearr_64247[(12)] = inst_64213);

(statearr_64247[(8)] = inst_64196);

return statearr_64247;
})();
var statearr_64248_64278 = state_64235__$1;
(statearr_64248_64278[(2)] = null);

(statearr_64248_64278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (9))){
var inst_64195 = (state_64235[(7)]);
var inst_64211 = cljs.core.vec.call(null,inst_64195);
var state_64235__$1 = state_64235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64235__$1,(11),out,inst_64211);
} else {
if((state_val_64236 === (5))){
var inst_64203 = (state_64235[(10)]);
var inst_64199 = (state_64235[(9)]);
var inst_64196 = (state_64235[(8)]);
var inst_64203__$1 = f.call(null,inst_64199);
var inst_64204 = cljs.core._EQ_.call(null,inst_64203__$1,inst_64196);
var inst_64205 = cljs.core.keyword_identical_QMARK_.call(null,inst_64196,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64206 = (inst_64204) || (inst_64205);
var state_64235__$1 = (function (){var statearr_64249 = state_64235;
(statearr_64249[(10)] = inst_64203__$1);

return statearr_64249;
})();
if(cljs.core.truth_(inst_64206)){
var statearr_64250_64279 = state_64235__$1;
(statearr_64250_64279[(1)] = (8));

} else {
var statearr_64251_64280 = state_64235__$1;
(statearr_64251_64280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (14))){
var inst_64228 = (state_64235[(2)]);
var inst_64229 = cljs.core.async.close_BANG_.call(null,out);
var state_64235__$1 = (function (){var statearr_64253 = state_64235;
(statearr_64253[(13)] = inst_64228);

return statearr_64253;
})();
var statearr_64254_64281 = state_64235__$1;
(statearr_64254_64281[(2)] = inst_64229);

(statearr_64254_64281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (10))){
var inst_64218 = (state_64235[(2)]);
var state_64235__$1 = state_64235;
var statearr_64255_64282 = state_64235__$1;
(statearr_64255_64282[(2)] = inst_64218);

(statearr_64255_64282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64236 === (8))){
var inst_64195 = (state_64235[(7)]);
var inst_64203 = (state_64235[(10)]);
var inst_64199 = (state_64235[(9)]);
var inst_64208 = inst_64195.push(inst_64199);
var tmp64252 = inst_64195;
var inst_64195__$1 = tmp64252;
var inst_64196 = inst_64203;
var state_64235__$1 = (function (){var statearr_64256 = state_64235;
(statearr_64256[(7)] = inst_64195__$1);

(statearr_64256[(14)] = inst_64208);

(statearr_64256[(8)] = inst_64196);

return statearr_64256;
})();
var statearr_64257_64283 = state_64235__$1;
(statearr_64257_64283[(2)] = null);

(statearr_64257_64283[(1)] = (2));


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
});})(c__18924__auto___64269,out))
;
return ((function (switch__18903__auto__,c__18924__auto___64269,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_64261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64261[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_64261[(1)] = (1));

return statearr_64261;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_64235){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_64235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e64262){if((e64262 instanceof Object)){
var ex__18907__auto__ = e64262;
var statearr_64263_64284 = state_64235;
(statearr_64263_64284[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64285 = state_64235;
state_64235 = G__64285;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_64235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_64235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___64269,out))
})();
var state__18926__auto__ = (function (){var statearr_64264 = f__18925__auto__.call(null);
(statearr_64264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___64269);

return statearr_64264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___64269,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453136834009