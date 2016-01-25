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
var args54090 = [];
var len__17884__auto___54096 = arguments.length;
var i__17885__auto___54097 = (0);
while(true){
if((i__17885__auto___54097 < len__17884__auto___54096)){
args54090.push((arguments[i__17885__auto___54097]));

var G__54098 = (i__17885__auto___54097 + (1));
i__17885__auto___54097 = G__54098;
continue;
} else {
}
break;
}

var G__54092 = args54090.length;
switch (G__54092) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54090.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async54093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54093 = (function (f,blockable,meta54094){
this.f = f;
this.blockable = blockable;
this.meta54094 = meta54094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54095,meta54094__$1){
var self__ = this;
var _54095__$1 = this;
return (new cljs.core.async.t_cljs$core$async54093(self__.f,self__.blockable,meta54094__$1));
});

cljs.core.async.t_cljs$core$async54093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54095){
var self__ = this;
var _54095__$1 = this;
return self__.meta54094;
});

cljs.core.async.t_cljs$core$async54093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async54093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async54093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54094","meta54094",-71439702,null)], null);
});

cljs.core.async.t_cljs$core$async54093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54093";

cljs.core.async.t_cljs$core$async54093.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async54093");
});

cljs.core.async.__GT_t_cljs$core$async54093 = (function cljs$core$async$__GT_t_cljs$core$async54093(f__$1,blockable__$1,meta54094){
return (new cljs.core.async.t_cljs$core$async54093(f__$1,blockable__$1,meta54094));
});

}

return (new cljs.core.async.t_cljs$core$async54093(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args54102 = [];
var len__17884__auto___54105 = arguments.length;
var i__17885__auto___54106 = (0);
while(true){
if((i__17885__auto___54106 < len__17884__auto___54105)){
args54102.push((arguments[i__17885__auto___54106]));

var G__54107 = (i__17885__auto___54106 + (1));
i__17885__auto___54106 = G__54107;
continue;
} else {
}
break;
}

var G__54104 = args54102.length;
switch (G__54104) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54102.length)].join('')));

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
var args54109 = [];
var len__17884__auto___54112 = arguments.length;
var i__17885__auto___54113 = (0);
while(true){
if((i__17885__auto___54113 < len__17884__auto___54112)){
args54109.push((arguments[i__17885__auto___54113]));

var G__54114 = (i__17885__auto___54113 + (1));
i__17885__auto___54113 = G__54114;
continue;
} else {
}
break;
}

var G__54111 = args54109.length;
switch (G__54111) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54109.length)].join('')));

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
var args54116 = [];
var len__17884__auto___54119 = arguments.length;
var i__17885__auto___54120 = (0);
while(true){
if((i__17885__auto___54120 < len__17884__auto___54119)){
args54116.push((arguments[i__17885__auto___54120]));

var G__54121 = (i__17885__auto___54120 + (1));
i__17885__auto___54120 = G__54121;
continue;
} else {
}
break;
}

var G__54118 = args54116.length;
switch (G__54118) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54116.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_54123 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_54123);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_54123,ret){
return (function (){
return fn1.call(null,val_54123);
});})(val_54123,ret))
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
var args54124 = [];
var len__17884__auto___54127 = arguments.length;
var i__17885__auto___54128 = (0);
while(true){
if((i__17885__auto___54128 < len__17884__auto___54127)){
args54124.push((arguments[i__17885__auto___54128]));

var G__54129 = (i__17885__auto___54128 + (1));
i__17885__auto___54128 = G__54129;
continue;
} else {
}
break;
}

var G__54126 = args54124.length;
switch (G__54126) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54124.length)].join('')));

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
var n__17729__auto___54131 = n;
var x_54132 = (0);
while(true){
if((x_54132 < n__17729__auto___54131)){
(a[x_54132] = (0));

var G__54133 = (x_54132 + (1));
x_54132 = G__54133;
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

var G__54134 = (i + (1));
i = G__54134;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async54138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54138 = (function (alt_flag,flag,meta54139){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta54139 = meta54139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_54140,meta54139__$1){
var self__ = this;
var _54140__$1 = this;
return (new cljs.core.async.t_cljs$core$async54138(self__.alt_flag,self__.flag,meta54139__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async54138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_54140){
var self__ = this;
var _54140__$1 = this;
return self__.meta54139;
});})(flag))
;

cljs.core.async.t_cljs$core$async54138.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async54138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async54138.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54139","meta54139",964584920,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async54138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54138";

cljs.core.async.t_cljs$core$async54138.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async54138");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async54138 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54138(alt_flag__$1,flag__$1,meta54139){
return (new cljs.core.async.t_cljs$core$async54138(alt_flag__$1,flag__$1,meta54139));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async54138(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async54144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54144 = (function (alt_handler,flag,cb,meta54145){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta54145 = meta54145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54146,meta54145__$1){
var self__ = this;
var _54146__$1 = this;
return (new cljs.core.async.t_cljs$core$async54144(self__.alt_handler,self__.flag,self__.cb,meta54145__$1));
});

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54146){
var self__ = this;
var _54146__$1 = this;
return self__.meta54145;
});

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async54144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async54144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54145","meta54145",-1158782321,null)], null);
});

cljs.core.async.t_cljs$core$async54144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54144";

cljs.core.async.t_cljs$core$async54144.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async54144");
});

cljs.core.async.__GT_t_cljs$core$async54144 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54144(alt_handler__$1,flag__$1,cb__$1,meta54145){
return (new cljs.core.async.t_cljs$core$async54144(alt_handler__$1,flag__$1,cb__$1,meta54145));
});

}

return (new cljs.core.async.t_cljs$core$async54144(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__54147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54147_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54148_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54148_SHARP_,port], null));
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
var G__54149 = (i + (1));
i = G__54149;
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
var len__17884__auto___54155 = arguments.length;
var i__17885__auto___54156 = (0);
while(true){
if((i__17885__auto___54156 < len__17884__auto___54155)){
args__17891__auto__.push((arguments[i__17885__auto___54156]));

var G__54157 = (i__17885__auto___54156 + (1));
i__17885__auto___54156 = G__54157;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54152){
var map__54153 = p__54152;
var map__54153__$1 = ((((!((map__54153 == null)))?((((map__54153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54153):map__54153);
var opts = map__54153__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54150){
var G__54151 = cljs.core.first.call(null,seq54150);
var seq54150__$1 = cljs.core.next.call(null,seq54150);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54151,seq54150__$1);
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
var args54158 = [];
var len__17884__auto___54208 = arguments.length;
var i__17885__auto___54209 = (0);
while(true){
if((i__17885__auto___54209 < len__17884__auto___54208)){
args54158.push((arguments[i__17885__auto___54209]));

var G__54210 = (i__17885__auto___54209 + (1));
i__17885__auto___54209 = G__54210;
continue;
} else {
}
break;
}

var G__54160 = args54158.length;
switch (G__54160) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54158.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18924__auto___54212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___54212){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___54212){
return (function (state_54184){
var state_val_54185 = (state_54184[(1)]);
if((state_val_54185 === (7))){
var inst_54180 = (state_54184[(2)]);
var state_54184__$1 = state_54184;
var statearr_54186_54213 = state_54184__$1;
(statearr_54186_54213[(2)] = inst_54180);

(statearr_54186_54213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (1))){
var state_54184__$1 = state_54184;
var statearr_54187_54214 = state_54184__$1;
(statearr_54187_54214[(2)] = null);

(statearr_54187_54214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (4))){
var inst_54163 = (state_54184[(7)]);
var inst_54163__$1 = (state_54184[(2)]);
var inst_54164 = (inst_54163__$1 == null);
var state_54184__$1 = (function (){var statearr_54188 = state_54184;
(statearr_54188[(7)] = inst_54163__$1);

return statearr_54188;
})();
if(cljs.core.truth_(inst_54164)){
var statearr_54189_54215 = state_54184__$1;
(statearr_54189_54215[(1)] = (5));

} else {
var statearr_54190_54216 = state_54184__$1;
(statearr_54190_54216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (13))){
var state_54184__$1 = state_54184;
var statearr_54191_54217 = state_54184__$1;
(statearr_54191_54217[(2)] = null);

(statearr_54191_54217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (6))){
var inst_54163 = (state_54184[(7)]);
var state_54184__$1 = state_54184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54184__$1,(11),to,inst_54163);
} else {
if((state_val_54185 === (3))){
var inst_54182 = (state_54184[(2)]);
var state_54184__$1 = state_54184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54184__$1,inst_54182);
} else {
if((state_val_54185 === (12))){
var state_54184__$1 = state_54184;
var statearr_54192_54218 = state_54184__$1;
(statearr_54192_54218[(2)] = null);

(statearr_54192_54218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (2))){
var state_54184__$1 = state_54184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54184__$1,(4),from);
} else {
if((state_val_54185 === (11))){
var inst_54173 = (state_54184[(2)]);
var state_54184__$1 = state_54184;
if(cljs.core.truth_(inst_54173)){
var statearr_54193_54219 = state_54184__$1;
(statearr_54193_54219[(1)] = (12));

} else {
var statearr_54194_54220 = state_54184__$1;
(statearr_54194_54220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (9))){
var state_54184__$1 = state_54184;
var statearr_54195_54221 = state_54184__$1;
(statearr_54195_54221[(2)] = null);

(statearr_54195_54221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (5))){
var state_54184__$1 = state_54184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54196_54222 = state_54184__$1;
(statearr_54196_54222[(1)] = (8));

} else {
var statearr_54197_54223 = state_54184__$1;
(statearr_54197_54223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (14))){
var inst_54178 = (state_54184[(2)]);
var state_54184__$1 = state_54184;
var statearr_54198_54224 = state_54184__$1;
(statearr_54198_54224[(2)] = inst_54178);

(statearr_54198_54224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (10))){
var inst_54170 = (state_54184[(2)]);
var state_54184__$1 = state_54184;
var statearr_54199_54225 = state_54184__$1;
(statearr_54199_54225[(2)] = inst_54170);

(statearr_54199_54225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54185 === (8))){
var inst_54167 = cljs.core.async.close_BANG_.call(null,to);
var state_54184__$1 = state_54184;
var statearr_54200_54226 = state_54184__$1;
(statearr_54200_54226[(2)] = inst_54167);

(statearr_54200_54226[(1)] = (10));


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
});})(c__18924__auto___54212))
;
return ((function (switch__18903__auto__,c__18924__auto___54212){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_54204 = [null,null,null,null,null,null,null,null];
(statearr_54204[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_54204[(1)] = (1));

return statearr_54204;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_54184){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54205){if((e54205 instanceof Object)){
var ex__18907__auto__ = e54205;
var statearr_54206_54227 = state_54184;
(statearr_54206_54227[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54228 = state_54184;
state_54184 = G__54228;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_54184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_54184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___54212))
})();
var state__18926__auto__ = (function (){var statearr_54207 = f__18925__auto__.call(null);
(statearr_54207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___54212);

return statearr_54207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___54212))
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
return (function (p__54412){
var vec__54413 = p__54412;
var v = cljs.core.nth.call(null,vec__54413,(0),null);
var p = cljs.core.nth.call(null,vec__54413,(1),null);
var job = vec__54413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18924__auto___54595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___54595,res,vec__54413,v,p,job,jobs,results){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___54595,res,vec__54413,v,p,job,jobs,results){
return (function (state_54418){
var state_val_54419 = (state_54418[(1)]);
if((state_val_54419 === (1))){
var state_54418__$1 = state_54418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54418__$1,(2),res,v);
} else {
if((state_val_54419 === (2))){
var inst_54415 = (state_54418[(2)]);
var inst_54416 = cljs.core.async.close_BANG_.call(null,res);
var state_54418__$1 = (function (){var statearr_54420 = state_54418;
(statearr_54420[(7)] = inst_54415);

return statearr_54420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54418__$1,inst_54416);
} else {
return null;
}
}
});})(c__18924__auto___54595,res,vec__54413,v,p,job,jobs,results))
;
return ((function (switch__18903__auto__,c__18924__auto___54595,res,vec__54413,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_54424 = [null,null,null,null,null,null,null,null];
(statearr_54424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_54424[(1)] = (1));

return statearr_54424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_54418){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54425){if((e54425 instanceof Object)){
var ex__18907__auto__ = e54425;
var statearr_54426_54596 = state_54418;
(statearr_54426_54596[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54597 = state_54418;
state_54418 = G__54597;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_54418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_54418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___54595,res,vec__54413,v,p,job,jobs,results))
})();
var state__18926__auto__ = (function (){var statearr_54427 = f__18925__auto__.call(null);
(statearr_54427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___54595);

return statearr_54427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___54595,res,vec__54413,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__54428){
var vec__54429 = p__54428;
var v = cljs.core.nth.call(null,vec__54429,(0),null);
var p = cljs.core.nth.call(null,vec__54429,(1),null);
var job = vec__54429;
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
var n__17729__auto___54598 = n;
var __54599 = (0);
while(true){
if((__54599 < n__17729__auto___54598)){
var G__54430_54600 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__54430_54600) {
case "compute":
var c__18924__auto___54602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54599,c__18924__auto___54602,G__54430_54600,n__17729__auto___54598,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (__54599,c__18924__auto___54602,G__54430_54600,n__17729__auto___54598,jobs,results,process,async){
return (function (state_54443){
var state_val_54444 = (state_54443[(1)]);
if((state_val_54444 === (1))){
var state_54443__$1 = state_54443;
var statearr_54445_54603 = state_54443__$1;
(statearr_54445_54603[(2)] = null);

(statearr_54445_54603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54444 === (2))){
var state_54443__$1 = state_54443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54443__$1,(4),jobs);
} else {
if((state_val_54444 === (3))){
var inst_54441 = (state_54443[(2)]);
var state_54443__$1 = state_54443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54443__$1,inst_54441);
} else {
if((state_val_54444 === (4))){
var inst_54433 = (state_54443[(2)]);
var inst_54434 = process.call(null,inst_54433);
var state_54443__$1 = state_54443;
if(cljs.core.truth_(inst_54434)){
var statearr_54446_54604 = state_54443__$1;
(statearr_54446_54604[(1)] = (5));

} else {
var statearr_54447_54605 = state_54443__$1;
(statearr_54447_54605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54444 === (5))){
var state_54443__$1 = state_54443;
var statearr_54448_54606 = state_54443__$1;
(statearr_54448_54606[(2)] = null);

(statearr_54448_54606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54444 === (6))){
var state_54443__$1 = state_54443;
var statearr_54449_54607 = state_54443__$1;
(statearr_54449_54607[(2)] = null);

(statearr_54449_54607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54444 === (7))){
var inst_54439 = (state_54443[(2)]);
var state_54443__$1 = state_54443;
var statearr_54450_54608 = state_54443__$1;
(statearr_54450_54608[(2)] = inst_54439);

(statearr_54450_54608[(1)] = (3));


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
});})(__54599,c__18924__auto___54602,G__54430_54600,n__17729__auto___54598,jobs,results,process,async))
;
return ((function (__54599,switch__18903__auto__,c__18924__auto___54602,G__54430_54600,n__17729__auto___54598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_54454 = [null,null,null,null,null,null,null];
(statearr_54454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_54454[(1)] = (1));

return statearr_54454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_54443){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54455){if((e54455 instanceof Object)){
var ex__18907__auto__ = e54455;
var statearr_54456_54609 = state_54443;
(statearr_54456_54609[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54610 = state_54443;
state_54443 = G__54610;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_54443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_54443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(__54599,switch__18903__auto__,c__18924__auto___54602,G__54430_54600,n__17729__auto___54598,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_54457 = f__18925__auto__.call(null);
(statearr_54457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___54602);

return statearr_54457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(__54599,c__18924__auto___54602,G__54430_54600,n__17729__auto___54598,jobs,results,process,async))
);


break;
case "async":
var c__18924__auto___54611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__54599,c__18924__auto___54611,G__54430_54600,n__17729__auto___54598,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (__54599,c__18924__auto___54611,G__54430_54600,n__17729__auto___54598,jobs,results,process,async){
return (function (state_54470){
var state_val_54471 = (state_54470[(1)]);
if((state_val_54471 === (1))){
var state_54470__$1 = state_54470;
var statearr_54472_54612 = state_54470__$1;
(statearr_54472_54612[(2)] = null);

(statearr_54472_54612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54471 === (2))){
var state_54470__$1 = state_54470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54470__$1,(4),jobs);
} else {
if((state_val_54471 === (3))){
var inst_54468 = (state_54470[(2)]);
var state_54470__$1 = state_54470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54470__$1,inst_54468);
} else {
if((state_val_54471 === (4))){
var inst_54460 = (state_54470[(2)]);
var inst_54461 = async.call(null,inst_54460);
var state_54470__$1 = state_54470;
if(cljs.core.truth_(inst_54461)){
var statearr_54473_54613 = state_54470__$1;
(statearr_54473_54613[(1)] = (5));

} else {
var statearr_54474_54614 = state_54470__$1;
(statearr_54474_54614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54471 === (5))){
var state_54470__$1 = state_54470;
var statearr_54475_54615 = state_54470__$1;
(statearr_54475_54615[(2)] = null);

(statearr_54475_54615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54471 === (6))){
var state_54470__$1 = state_54470;
var statearr_54476_54616 = state_54470__$1;
(statearr_54476_54616[(2)] = null);

(statearr_54476_54616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54471 === (7))){
var inst_54466 = (state_54470[(2)]);
var state_54470__$1 = state_54470;
var statearr_54477_54617 = state_54470__$1;
(statearr_54477_54617[(2)] = inst_54466);

(statearr_54477_54617[(1)] = (3));


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
});})(__54599,c__18924__auto___54611,G__54430_54600,n__17729__auto___54598,jobs,results,process,async))
;
return ((function (__54599,switch__18903__auto__,c__18924__auto___54611,G__54430_54600,n__17729__auto___54598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_54481 = [null,null,null,null,null,null,null];
(statearr_54481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_54481[(1)] = (1));

return statearr_54481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_54470){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54482){if((e54482 instanceof Object)){
var ex__18907__auto__ = e54482;
var statearr_54483_54618 = state_54470;
(statearr_54483_54618[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54619 = state_54470;
state_54470 = G__54619;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_54470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_54470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(__54599,switch__18903__auto__,c__18924__auto___54611,G__54430_54600,n__17729__auto___54598,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_54484 = f__18925__auto__.call(null);
(statearr_54484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___54611);

return statearr_54484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(__54599,c__18924__auto___54611,G__54430_54600,n__17729__auto___54598,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__54620 = (__54599 + (1));
__54599 = G__54620;
continue;
} else {
}
break;
}

var c__18924__auto___54621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___54621,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___54621,jobs,results,process,async){
return (function (state_54506){
var state_val_54507 = (state_54506[(1)]);
if((state_val_54507 === (1))){
var state_54506__$1 = state_54506;
var statearr_54508_54622 = state_54506__$1;
(statearr_54508_54622[(2)] = null);

(statearr_54508_54622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54507 === (2))){
var state_54506__$1 = state_54506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54506__$1,(4),from);
} else {
if((state_val_54507 === (3))){
var inst_54504 = (state_54506[(2)]);
var state_54506__$1 = state_54506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54506__$1,inst_54504);
} else {
if((state_val_54507 === (4))){
var inst_54487 = (state_54506[(7)]);
var inst_54487__$1 = (state_54506[(2)]);
var inst_54488 = (inst_54487__$1 == null);
var state_54506__$1 = (function (){var statearr_54509 = state_54506;
(statearr_54509[(7)] = inst_54487__$1);

return statearr_54509;
})();
if(cljs.core.truth_(inst_54488)){
var statearr_54510_54623 = state_54506__$1;
(statearr_54510_54623[(1)] = (5));

} else {
var statearr_54511_54624 = state_54506__$1;
(statearr_54511_54624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54507 === (5))){
var inst_54490 = cljs.core.async.close_BANG_.call(null,jobs);
var state_54506__$1 = state_54506;
var statearr_54512_54625 = state_54506__$1;
(statearr_54512_54625[(2)] = inst_54490);

(statearr_54512_54625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54507 === (6))){
var inst_54487 = (state_54506[(7)]);
var inst_54492 = (state_54506[(8)]);
var inst_54492__$1 = cljs.core.async.chan.call(null,(1));
var inst_54493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54494 = [inst_54487,inst_54492__$1];
var inst_54495 = (new cljs.core.PersistentVector(null,2,(5),inst_54493,inst_54494,null));
var state_54506__$1 = (function (){var statearr_54513 = state_54506;
(statearr_54513[(8)] = inst_54492__$1);

return statearr_54513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54506__$1,(8),jobs,inst_54495);
} else {
if((state_val_54507 === (7))){
var inst_54502 = (state_54506[(2)]);
var state_54506__$1 = state_54506;
var statearr_54514_54626 = state_54506__$1;
(statearr_54514_54626[(2)] = inst_54502);

(statearr_54514_54626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54507 === (8))){
var inst_54492 = (state_54506[(8)]);
var inst_54497 = (state_54506[(2)]);
var state_54506__$1 = (function (){var statearr_54515 = state_54506;
(statearr_54515[(9)] = inst_54497);

return statearr_54515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54506__$1,(9),results,inst_54492);
} else {
if((state_val_54507 === (9))){
var inst_54499 = (state_54506[(2)]);
var state_54506__$1 = (function (){var statearr_54516 = state_54506;
(statearr_54516[(10)] = inst_54499);

return statearr_54516;
})();
var statearr_54517_54627 = state_54506__$1;
(statearr_54517_54627[(2)] = null);

(statearr_54517_54627[(1)] = (2));


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
});})(c__18924__auto___54621,jobs,results,process,async))
;
return ((function (switch__18903__auto__,c__18924__auto___54621,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0 = (function (){
var statearr_54521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_54521[(1)] = (1));

return statearr_54521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_54506){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54522){if((e54522 instanceof Object)){
var ex__18907__auto__ = e54522;
var statearr_54523_54628 = state_54506;
(statearr_54523_54628[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54629 = state_54506;
state_54506 = G__54629;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_54506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_54506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___54621,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_54524 = f__18925__auto__.call(null);
(statearr_54524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___54621);

return statearr_54524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___54621,jobs,results,process,async))
);


var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__,jobs,results,process,async){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__,jobs,results,process,async){
return (function (state_54562){
var state_val_54563 = (state_54562[(1)]);
if((state_val_54563 === (7))){
var inst_54558 = (state_54562[(2)]);
var state_54562__$1 = state_54562;
var statearr_54564_54630 = state_54562__$1;
(statearr_54564_54630[(2)] = inst_54558);

(statearr_54564_54630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (20))){
var state_54562__$1 = state_54562;
var statearr_54565_54631 = state_54562__$1;
(statearr_54565_54631[(2)] = null);

(statearr_54565_54631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (1))){
var state_54562__$1 = state_54562;
var statearr_54566_54632 = state_54562__$1;
(statearr_54566_54632[(2)] = null);

(statearr_54566_54632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (4))){
var inst_54527 = (state_54562[(7)]);
var inst_54527__$1 = (state_54562[(2)]);
var inst_54528 = (inst_54527__$1 == null);
var state_54562__$1 = (function (){var statearr_54567 = state_54562;
(statearr_54567[(7)] = inst_54527__$1);

return statearr_54567;
})();
if(cljs.core.truth_(inst_54528)){
var statearr_54568_54633 = state_54562__$1;
(statearr_54568_54633[(1)] = (5));

} else {
var statearr_54569_54634 = state_54562__$1;
(statearr_54569_54634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (15))){
var inst_54540 = (state_54562[(8)]);
var state_54562__$1 = state_54562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54562__$1,(18),to,inst_54540);
} else {
if((state_val_54563 === (21))){
var inst_54553 = (state_54562[(2)]);
var state_54562__$1 = state_54562;
var statearr_54570_54635 = state_54562__$1;
(statearr_54570_54635[(2)] = inst_54553);

(statearr_54570_54635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (13))){
var inst_54555 = (state_54562[(2)]);
var state_54562__$1 = (function (){var statearr_54571 = state_54562;
(statearr_54571[(9)] = inst_54555);

return statearr_54571;
})();
var statearr_54572_54636 = state_54562__$1;
(statearr_54572_54636[(2)] = null);

(statearr_54572_54636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (6))){
var inst_54527 = (state_54562[(7)]);
var state_54562__$1 = state_54562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54562__$1,(11),inst_54527);
} else {
if((state_val_54563 === (17))){
var inst_54548 = (state_54562[(2)]);
var state_54562__$1 = state_54562;
if(cljs.core.truth_(inst_54548)){
var statearr_54573_54637 = state_54562__$1;
(statearr_54573_54637[(1)] = (19));

} else {
var statearr_54574_54638 = state_54562__$1;
(statearr_54574_54638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (3))){
var inst_54560 = (state_54562[(2)]);
var state_54562__$1 = state_54562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54562__$1,inst_54560);
} else {
if((state_val_54563 === (12))){
var inst_54537 = (state_54562[(10)]);
var state_54562__$1 = state_54562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54562__$1,(14),inst_54537);
} else {
if((state_val_54563 === (2))){
var state_54562__$1 = state_54562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54562__$1,(4),results);
} else {
if((state_val_54563 === (19))){
var state_54562__$1 = state_54562;
var statearr_54575_54639 = state_54562__$1;
(statearr_54575_54639[(2)] = null);

(statearr_54575_54639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (11))){
var inst_54537 = (state_54562[(2)]);
var state_54562__$1 = (function (){var statearr_54576 = state_54562;
(statearr_54576[(10)] = inst_54537);

return statearr_54576;
})();
var statearr_54577_54640 = state_54562__$1;
(statearr_54577_54640[(2)] = null);

(statearr_54577_54640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (9))){
var state_54562__$1 = state_54562;
var statearr_54578_54641 = state_54562__$1;
(statearr_54578_54641[(2)] = null);

(statearr_54578_54641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (5))){
var state_54562__$1 = state_54562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54579_54642 = state_54562__$1;
(statearr_54579_54642[(1)] = (8));

} else {
var statearr_54580_54643 = state_54562__$1;
(statearr_54580_54643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (14))){
var inst_54540 = (state_54562[(8)]);
var inst_54542 = (state_54562[(11)]);
var inst_54540__$1 = (state_54562[(2)]);
var inst_54541 = (inst_54540__$1 == null);
var inst_54542__$1 = cljs.core.not.call(null,inst_54541);
var state_54562__$1 = (function (){var statearr_54581 = state_54562;
(statearr_54581[(8)] = inst_54540__$1);

(statearr_54581[(11)] = inst_54542__$1);

return statearr_54581;
})();
if(inst_54542__$1){
var statearr_54582_54644 = state_54562__$1;
(statearr_54582_54644[(1)] = (15));

} else {
var statearr_54583_54645 = state_54562__$1;
(statearr_54583_54645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (16))){
var inst_54542 = (state_54562[(11)]);
var state_54562__$1 = state_54562;
var statearr_54584_54646 = state_54562__$1;
(statearr_54584_54646[(2)] = inst_54542);

(statearr_54584_54646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (10))){
var inst_54534 = (state_54562[(2)]);
var state_54562__$1 = state_54562;
var statearr_54585_54647 = state_54562__$1;
(statearr_54585_54647[(2)] = inst_54534);

(statearr_54585_54647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (18))){
var inst_54545 = (state_54562[(2)]);
var state_54562__$1 = state_54562;
var statearr_54586_54648 = state_54562__$1;
(statearr_54586_54648[(2)] = inst_54545);

(statearr_54586_54648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54563 === (8))){
var inst_54531 = cljs.core.async.close_BANG_.call(null,to);
var state_54562__$1 = state_54562;
var statearr_54587_54649 = state_54562__$1;
(statearr_54587_54649[(2)] = inst_54531);

(statearr_54587_54649[(1)] = (10));


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
var statearr_54591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__);

(statearr_54591[(1)] = (1));

return statearr_54591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1 = (function (state_54562){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54592){if((e54592 instanceof Object)){
var ex__18907__auto__ = e54592;
var statearr_54593_54650 = state_54562;
(statearr_54593_54650[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54651 = state_54562;
state_54562 = G__54651;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__ = function(state_54562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1.call(this,state_54562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__,jobs,results,process,async))
})();
var state__18926__auto__ = (function (){var statearr_54594 = f__18925__auto__.call(null);
(statearr_54594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_54594;
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
var args54652 = [];
var len__17884__auto___54655 = arguments.length;
var i__17885__auto___54656 = (0);
while(true){
if((i__17885__auto___54656 < len__17884__auto___54655)){
args54652.push((arguments[i__17885__auto___54656]));

var G__54657 = (i__17885__auto___54656 + (1));
i__17885__auto___54656 = G__54657;
continue;
} else {
}
break;
}

var G__54654 = args54652.length;
switch (G__54654) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54652.length)].join('')));

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
var args54659 = [];
var len__17884__auto___54662 = arguments.length;
var i__17885__auto___54663 = (0);
while(true){
if((i__17885__auto___54663 < len__17884__auto___54662)){
args54659.push((arguments[i__17885__auto___54663]));

var G__54664 = (i__17885__auto___54663 + (1));
i__17885__auto___54663 = G__54664;
continue;
} else {
}
break;
}

var G__54661 = args54659.length;
switch (G__54661) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54659.length)].join('')));

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
var args54666 = [];
var len__17884__auto___54719 = arguments.length;
var i__17885__auto___54720 = (0);
while(true){
if((i__17885__auto___54720 < len__17884__auto___54719)){
args54666.push((arguments[i__17885__auto___54720]));

var G__54721 = (i__17885__auto___54720 + (1));
i__17885__auto___54720 = G__54721;
continue;
} else {
}
break;
}

var G__54668 = args54666.length;
switch (G__54668) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54666.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18924__auto___54723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___54723,tc,fc){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___54723,tc,fc){
return (function (state_54694){
var state_val_54695 = (state_54694[(1)]);
if((state_val_54695 === (7))){
var inst_54690 = (state_54694[(2)]);
var state_54694__$1 = state_54694;
var statearr_54696_54724 = state_54694__$1;
(statearr_54696_54724[(2)] = inst_54690);

(statearr_54696_54724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (1))){
var state_54694__$1 = state_54694;
var statearr_54697_54725 = state_54694__$1;
(statearr_54697_54725[(2)] = null);

(statearr_54697_54725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (4))){
var inst_54671 = (state_54694[(7)]);
var inst_54671__$1 = (state_54694[(2)]);
var inst_54672 = (inst_54671__$1 == null);
var state_54694__$1 = (function (){var statearr_54698 = state_54694;
(statearr_54698[(7)] = inst_54671__$1);

return statearr_54698;
})();
if(cljs.core.truth_(inst_54672)){
var statearr_54699_54726 = state_54694__$1;
(statearr_54699_54726[(1)] = (5));

} else {
var statearr_54700_54727 = state_54694__$1;
(statearr_54700_54727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (13))){
var state_54694__$1 = state_54694;
var statearr_54701_54728 = state_54694__$1;
(statearr_54701_54728[(2)] = null);

(statearr_54701_54728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (6))){
var inst_54671 = (state_54694[(7)]);
var inst_54677 = p.call(null,inst_54671);
var state_54694__$1 = state_54694;
if(cljs.core.truth_(inst_54677)){
var statearr_54702_54729 = state_54694__$1;
(statearr_54702_54729[(1)] = (9));

} else {
var statearr_54703_54730 = state_54694__$1;
(statearr_54703_54730[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (3))){
var inst_54692 = (state_54694[(2)]);
var state_54694__$1 = state_54694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54694__$1,inst_54692);
} else {
if((state_val_54695 === (12))){
var state_54694__$1 = state_54694;
var statearr_54704_54731 = state_54694__$1;
(statearr_54704_54731[(2)] = null);

(statearr_54704_54731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (2))){
var state_54694__$1 = state_54694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54694__$1,(4),ch);
} else {
if((state_val_54695 === (11))){
var inst_54671 = (state_54694[(7)]);
var inst_54681 = (state_54694[(2)]);
var state_54694__$1 = state_54694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54694__$1,(8),inst_54681,inst_54671);
} else {
if((state_val_54695 === (9))){
var state_54694__$1 = state_54694;
var statearr_54705_54732 = state_54694__$1;
(statearr_54705_54732[(2)] = tc);

(statearr_54705_54732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (5))){
var inst_54674 = cljs.core.async.close_BANG_.call(null,tc);
var inst_54675 = cljs.core.async.close_BANG_.call(null,fc);
var state_54694__$1 = (function (){var statearr_54706 = state_54694;
(statearr_54706[(8)] = inst_54674);

return statearr_54706;
})();
var statearr_54707_54733 = state_54694__$1;
(statearr_54707_54733[(2)] = inst_54675);

(statearr_54707_54733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (14))){
var inst_54688 = (state_54694[(2)]);
var state_54694__$1 = state_54694;
var statearr_54708_54734 = state_54694__$1;
(statearr_54708_54734[(2)] = inst_54688);

(statearr_54708_54734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (10))){
var state_54694__$1 = state_54694;
var statearr_54709_54735 = state_54694__$1;
(statearr_54709_54735[(2)] = fc);

(statearr_54709_54735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54695 === (8))){
var inst_54683 = (state_54694[(2)]);
var state_54694__$1 = state_54694;
if(cljs.core.truth_(inst_54683)){
var statearr_54710_54736 = state_54694__$1;
(statearr_54710_54736[(1)] = (12));

} else {
var statearr_54711_54737 = state_54694__$1;
(statearr_54711_54737[(1)] = (13));

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
});})(c__18924__auto___54723,tc,fc))
;
return ((function (switch__18903__auto__,c__18924__auto___54723,tc,fc){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_54715 = [null,null,null,null,null,null,null,null,null];
(statearr_54715[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_54715[(1)] = (1));

return statearr_54715;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_54694){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54716){if((e54716 instanceof Object)){
var ex__18907__auto__ = e54716;
var statearr_54717_54738 = state_54694;
(statearr_54717_54738[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54739 = state_54694;
state_54694 = G__54739;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_54694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_54694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___54723,tc,fc))
})();
var state__18926__auto__ = (function (){var statearr_54718 = f__18925__auto__.call(null);
(statearr_54718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___54723);

return statearr_54718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___54723,tc,fc))
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
return (function (state_54803){
var state_val_54804 = (state_54803[(1)]);
if((state_val_54804 === (7))){
var inst_54799 = (state_54803[(2)]);
var state_54803__$1 = state_54803;
var statearr_54805_54826 = state_54803__$1;
(statearr_54805_54826[(2)] = inst_54799);

(statearr_54805_54826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (1))){
var inst_54783 = init;
var state_54803__$1 = (function (){var statearr_54806 = state_54803;
(statearr_54806[(7)] = inst_54783);

return statearr_54806;
})();
var statearr_54807_54827 = state_54803__$1;
(statearr_54807_54827[(2)] = null);

(statearr_54807_54827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (4))){
var inst_54786 = (state_54803[(8)]);
var inst_54786__$1 = (state_54803[(2)]);
var inst_54787 = (inst_54786__$1 == null);
var state_54803__$1 = (function (){var statearr_54808 = state_54803;
(statearr_54808[(8)] = inst_54786__$1);

return statearr_54808;
})();
if(cljs.core.truth_(inst_54787)){
var statearr_54809_54828 = state_54803__$1;
(statearr_54809_54828[(1)] = (5));

} else {
var statearr_54810_54829 = state_54803__$1;
(statearr_54810_54829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (6))){
var inst_54786 = (state_54803[(8)]);
var inst_54783 = (state_54803[(7)]);
var inst_54790 = (state_54803[(9)]);
var inst_54790__$1 = f.call(null,inst_54783,inst_54786);
var inst_54791 = cljs.core.reduced_QMARK_.call(null,inst_54790__$1);
var state_54803__$1 = (function (){var statearr_54811 = state_54803;
(statearr_54811[(9)] = inst_54790__$1);

return statearr_54811;
})();
if(inst_54791){
var statearr_54812_54830 = state_54803__$1;
(statearr_54812_54830[(1)] = (8));

} else {
var statearr_54813_54831 = state_54803__$1;
(statearr_54813_54831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (3))){
var inst_54801 = (state_54803[(2)]);
var state_54803__$1 = state_54803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54803__$1,inst_54801);
} else {
if((state_val_54804 === (2))){
var state_54803__$1 = state_54803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54803__$1,(4),ch);
} else {
if((state_val_54804 === (9))){
var inst_54790 = (state_54803[(9)]);
var inst_54783 = inst_54790;
var state_54803__$1 = (function (){var statearr_54814 = state_54803;
(statearr_54814[(7)] = inst_54783);

return statearr_54814;
})();
var statearr_54815_54832 = state_54803__$1;
(statearr_54815_54832[(2)] = null);

(statearr_54815_54832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (5))){
var inst_54783 = (state_54803[(7)]);
var state_54803__$1 = state_54803;
var statearr_54816_54833 = state_54803__$1;
(statearr_54816_54833[(2)] = inst_54783);

(statearr_54816_54833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (10))){
var inst_54797 = (state_54803[(2)]);
var state_54803__$1 = state_54803;
var statearr_54817_54834 = state_54803__$1;
(statearr_54817_54834[(2)] = inst_54797);

(statearr_54817_54834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (8))){
var inst_54790 = (state_54803[(9)]);
var inst_54793 = cljs.core.deref.call(null,inst_54790);
var state_54803__$1 = state_54803;
var statearr_54818_54835 = state_54803__$1;
(statearr_54818_54835[(2)] = inst_54793);

(statearr_54818_54835[(1)] = (10));


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
var statearr_54822 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54822[(0)] = cljs$core$async$reduce_$_state_machine__18904__auto__);

(statearr_54822[(1)] = (1));

return statearr_54822;
});
var cljs$core$async$reduce_$_state_machine__18904__auto____1 = (function (state_54803){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54823){if((e54823 instanceof Object)){
var ex__18907__auto__ = e54823;
var statearr_54824_54836 = state_54803;
(statearr_54824_54836[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54837 = state_54803;
state_54803 = G__54837;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18904__auto__ = function(state_54803){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18904__auto____1.call(this,state_54803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18904__auto____0;
cljs$core$async$reduce_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18904__auto____1;
return cljs$core$async$reduce_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_54825 = f__18925__auto__.call(null);
(statearr_54825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_54825;
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
var args54838 = [];
var len__17884__auto___54890 = arguments.length;
var i__17885__auto___54891 = (0);
while(true){
if((i__17885__auto___54891 < len__17884__auto___54890)){
args54838.push((arguments[i__17885__auto___54891]));

var G__54892 = (i__17885__auto___54891 + (1));
i__17885__auto___54891 = G__54892;
continue;
} else {
}
break;
}

var G__54840 = args54838.length;
switch (G__54840) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54838.length)].join('')));

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
return (function (state_54865){
var state_val_54866 = (state_54865[(1)]);
if((state_val_54866 === (7))){
var inst_54847 = (state_54865[(2)]);
var state_54865__$1 = state_54865;
var statearr_54867_54894 = state_54865__$1;
(statearr_54867_54894[(2)] = inst_54847);

(statearr_54867_54894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (1))){
var inst_54841 = cljs.core.seq.call(null,coll);
var inst_54842 = inst_54841;
var state_54865__$1 = (function (){var statearr_54868 = state_54865;
(statearr_54868[(7)] = inst_54842);

return statearr_54868;
})();
var statearr_54869_54895 = state_54865__$1;
(statearr_54869_54895[(2)] = null);

(statearr_54869_54895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (4))){
var inst_54842 = (state_54865[(7)]);
var inst_54845 = cljs.core.first.call(null,inst_54842);
var state_54865__$1 = state_54865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54865__$1,(7),ch,inst_54845);
} else {
if((state_val_54866 === (13))){
var inst_54859 = (state_54865[(2)]);
var state_54865__$1 = state_54865;
var statearr_54870_54896 = state_54865__$1;
(statearr_54870_54896[(2)] = inst_54859);

(statearr_54870_54896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (6))){
var inst_54850 = (state_54865[(2)]);
var state_54865__$1 = state_54865;
if(cljs.core.truth_(inst_54850)){
var statearr_54871_54897 = state_54865__$1;
(statearr_54871_54897[(1)] = (8));

} else {
var statearr_54872_54898 = state_54865__$1;
(statearr_54872_54898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (3))){
var inst_54863 = (state_54865[(2)]);
var state_54865__$1 = state_54865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54865__$1,inst_54863);
} else {
if((state_val_54866 === (12))){
var state_54865__$1 = state_54865;
var statearr_54873_54899 = state_54865__$1;
(statearr_54873_54899[(2)] = null);

(statearr_54873_54899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (2))){
var inst_54842 = (state_54865[(7)]);
var state_54865__$1 = state_54865;
if(cljs.core.truth_(inst_54842)){
var statearr_54874_54900 = state_54865__$1;
(statearr_54874_54900[(1)] = (4));

} else {
var statearr_54875_54901 = state_54865__$1;
(statearr_54875_54901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (11))){
var inst_54856 = cljs.core.async.close_BANG_.call(null,ch);
var state_54865__$1 = state_54865;
var statearr_54876_54902 = state_54865__$1;
(statearr_54876_54902[(2)] = inst_54856);

(statearr_54876_54902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (9))){
var state_54865__$1 = state_54865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54877_54903 = state_54865__$1;
(statearr_54877_54903[(1)] = (11));

} else {
var statearr_54878_54904 = state_54865__$1;
(statearr_54878_54904[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (5))){
var inst_54842 = (state_54865[(7)]);
var state_54865__$1 = state_54865;
var statearr_54879_54905 = state_54865__$1;
(statearr_54879_54905[(2)] = inst_54842);

(statearr_54879_54905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (10))){
var inst_54861 = (state_54865[(2)]);
var state_54865__$1 = state_54865;
var statearr_54880_54906 = state_54865__$1;
(statearr_54880_54906[(2)] = inst_54861);

(statearr_54880_54906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54866 === (8))){
var inst_54842 = (state_54865[(7)]);
var inst_54852 = cljs.core.next.call(null,inst_54842);
var inst_54842__$1 = inst_54852;
var state_54865__$1 = (function (){var statearr_54881 = state_54865;
(statearr_54881[(7)] = inst_54842__$1);

return statearr_54881;
})();
var statearr_54882_54907 = state_54865__$1;
(statearr_54882_54907[(2)] = null);

(statearr_54882_54907[(1)] = (2));


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
var statearr_54886 = [null,null,null,null,null,null,null,null];
(statearr_54886[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_54886[(1)] = (1));

return statearr_54886;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_54865){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_54865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e54887){if((e54887 instanceof Object)){
var ex__18907__auto__ = e54887;
var statearr_54888_54908 = state_54865;
(statearr_54888_54908[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54909 = state_54865;
state_54865 = G__54909;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_54865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_54865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_54889 = f__18925__auto__.call(null);
(statearr_54889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_54889;
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
if(typeof cljs.core.async.t_cljs$core$async55131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55131 = (function (mult,ch,cs,meta55132){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta55132 = meta55132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_55133,meta55132__$1){
var self__ = this;
var _55133__$1 = this;
return (new cljs.core.async.t_cljs$core$async55131(self__.mult,self__.ch,self__.cs,meta55132__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_55133){
var self__ = this;
var _55133__$1 = this;
return self__.meta55132;
});})(cs))
;

cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async55131.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55132","meta55132",697935985,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async55131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55131";

cljs.core.async.t_cljs$core$async55131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async55131");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async55131 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async55131(mult__$1,ch__$1,cs__$1,meta55132){
return (new cljs.core.async.t_cljs$core$async55131(mult__$1,ch__$1,cs__$1,meta55132));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async55131(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18924__auto___55352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___55352,cs,m,dchan,dctr,done){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___55352,cs,m,dchan,dctr,done){
return (function (state_55264){
var state_val_55265 = (state_55264[(1)]);
if((state_val_55265 === (7))){
var inst_55260 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55266_55353 = state_55264__$1;
(statearr_55266_55353[(2)] = inst_55260);

(statearr_55266_55353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (20))){
var inst_55165 = (state_55264[(7)]);
var inst_55175 = cljs.core.first.call(null,inst_55165);
var inst_55176 = cljs.core.nth.call(null,inst_55175,(0),null);
var inst_55177 = cljs.core.nth.call(null,inst_55175,(1),null);
var state_55264__$1 = (function (){var statearr_55267 = state_55264;
(statearr_55267[(8)] = inst_55176);

return statearr_55267;
})();
if(cljs.core.truth_(inst_55177)){
var statearr_55268_55354 = state_55264__$1;
(statearr_55268_55354[(1)] = (22));

} else {
var statearr_55269_55355 = state_55264__$1;
(statearr_55269_55355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (27))){
var inst_55207 = (state_55264[(9)]);
var inst_55212 = (state_55264[(10)]);
var inst_55205 = (state_55264[(11)]);
var inst_55136 = (state_55264[(12)]);
var inst_55212__$1 = cljs.core._nth.call(null,inst_55205,inst_55207);
var inst_55213 = cljs.core.async.put_BANG_.call(null,inst_55212__$1,inst_55136,done);
var state_55264__$1 = (function (){var statearr_55270 = state_55264;
(statearr_55270[(10)] = inst_55212__$1);

return statearr_55270;
})();
if(cljs.core.truth_(inst_55213)){
var statearr_55271_55356 = state_55264__$1;
(statearr_55271_55356[(1)] = (30));

} else {
var statearr_55272_55357 = state_55264__$1;
(statearr_55272_55357[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (1))){
var state_55264__$1 = state_55264;
var statearr_55273_55358 = state_55264__$1;
(statearr_55273_55358[(2)] = null);

(statearr_55273_55358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (24))){
var inst_55165 = (state_55264[(7)]);
var inst_55182 = (state_55264[(2)]);
var inst_55183 = cljs.core.next.call(null,inst_55165);
var inst_55145 = inst_55183;
var inst_55146 = null;
var inst_55147 = (0);
var inst_55148 = (0);
var state_55264__$1 = (function (){var statearr_55274 = state_55264;
(statearr_55274[(13)] = inst_55145);

(statearr_55274[(14)] = inst_55182);

(statearr_55274[(15)] = inst_55146);

(statearr_55274[(16)] = inst_55148);

(statearr_55274[(17)] = inst_55147);

return statearr_55274;
})();
var statearr_55275_55359 = state_55264__$1;
(statearr_55275_55359[(2)] = null);

(statearr_55275_55359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (39))){
var state_55264__$1 = state_55264;
var statearr_55279_55360 = state_55264__$1;
(statearr_55279_55360[(2)] = null);

(statearr_55279_55360[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (4))){
var inst_55136 = (state_55264[(12)]);
var inst_55136__$1 = (state_55264[(2)]);
var inst_55137 = (inst_55136__$1 == null);
var state_55264__$1 = (function (){var statearr_55280 = state_55264;
(statearr_55280[(12)] = inst_55136__$1);

return statearr_55280;
})();
if(cljs.core.truth_(inst_55137)){
var statearr_55281_55361 = state_55264__$1;
(statearr_55281_55361[(1)] = (5));

} else {
var statearr_55282_55362 = state_55264__$1;
(statearr_55282_55362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (15))){
var inst_55145 = (state_55264[(13)]);
var inst_55146 = (state_55264[(15)]);
var inst_55148 = (state_55264[(16)]);
var inst_55147 = (state_55264[(17)]);
var inst_55161 = (state_55264[(2)]);
var inst_55162 = (inst_55148 + (1));
var tmp55276 = inst_55145;
var tmp55277 = inst_55146;
var tmp55278 = inst_55147;
var inst_55145__$1 = tmp55276;
var inst_55146__$1 = tmp55277;
var inst_55147__$1 = tmp55278;
var inst_55148__$1 = inst_55162;
var state_55264__$1 = (function (){var statearr_55283 = state_55264;
(statearr_55283[(13)] = inst_55145__$1);

(statearr_55283[(15)] = inst_55146__$1);

(statearr_55283[(16)] = inst_55148__$1);

(statearr_55283[(18)] = inst_55161);

(statearr_55283[(17)] = inst_55147__$1);

return statearr_55283;
})();
var statearr_55284_55363 = state_55264__$1;
(statearr_55284_55363[(2)] = null);

(statearr_55284_55363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (21))){
var inst_55186 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55288_55364 = state_55264__$1;
(statearr_55288_55364[(2)] = inst_55186);

(statearr_55288_55364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (31))){
var inst_55212 = (state_55264[(10)]);
var inst_55216 = done.call(null,null);
var inst_55217 = cljs.core.async.untap_STAR_.call(null,m,inst_55212);
var state_55264__$1 = (function (){var statearr_55289 = state_55264;
(statearr_55289[(19)] = inst_55216);

return statearr_55289;
})();
var statearr_55290_55365 = state_55264__$1;
(statearr_55290_55365[(2)] = inst_55217);

(statearr_55290_55365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (32))){
var inst_55207 = (state_55264[(9)]);
var inst_55206 = (state_55264[(20)]);
var inst_55205 = (state_55264[(11)]);
var inst_55204 = (state_55264[(21)]);
var inst_55219 = (state_55264[(2)]);
var inst_55220 = (inst_55207 + (1));
var tmp55285 = inst_55206;
var tmp55286 = inst_55205;
var tmp55287 = inst_55204;
var inst_55204__$1 = tmp55287;
var inst_55205__$1 = tmp55286;
var inst_55206__$1 = tmp55285;
var inst_55207__$1 = inst_55220;
var state_55264__$1 = (function (){var statearr_55291 = state_55264;
(statearr_55291[(9)] = inst_55207__$1);

(statearr_55291[(20)] = inst_55206__$1);

(statearr_55291[(22)] = inst_55219);

(statearr_55291[(11)] = inst_55205__$1);

(statearr_55291[(21)] = inst_55204__$1);

return statearr_55291;
})();
var statearr_55292_55366 = state_55264__$1;
(statearr_55292_55366[(2)] = null);

(statearr_55292_55366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (40))){
var inst_55232 = (state_55264[(23)]);
var inst_55236 = done.call(null,null);
var inst_55237 = cljs.core.async.untap_STAR_.call(null,m,inst_55232);
var state_55264__$1 = (function (){var statearr_55293 = state_55264;
(statearr_55293[(24)] = inst_55236);

return statearr_55293;
})();
var statearr_55294_55367 = state_55264__$1;
(statearr_55294_55367[(2)] = inst_55237);

(statearr_55294_55367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (33))){
var inst_55223 = (state_55264[(25)]);
var inst_55225 = cljs.core.chunked_seq_QMARK_.call(null,inst_55223);
var state_55264__$1 = state_55264;
if(inst_55225){
var statearr_55295_55368 = state_55264__$1;
(statearr_55295_55368[(1)] = (36));

} else {
var statearr_55296_55369 = state_55264__$1;
(statearr_55296_55369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (13))){
var inst_55155 = (state_55264[(26)]);
var inst_55158 = cljs.core.async.close_BANG_.call(null,inst_55155);
var state_55264__$1 = state_55264;
var statearr_55297_55370 = state_55264__$1;
(statearr_55297_55370[(2)] = inst_55158);

(statearr_55297_55370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (22))){
var inst_55176 = (state_55264[(8)]);
var inst_55179 = cljs.core.async.close_BANG_.call(null,inst_55176);
var state_55264__$1 = state_55264;
var statearr_55298_55371 = state_55264__$1;
(statearr_55298_55371[(2)] = inst_55179);

(statearr_55298_55371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (36))){
var inst_55223 = (state_55264[(25)]);
var inst_55227 = cljs.core.chunk_first.call(null,inst_55223);
var inst_55228 = cljs.core.chunk_rest.call(null,inst_55223);
var inst_55229 = cljs.core.count.call(null,inst_55227);
var inst_55204 = inst_55228;
var inst_55205 = inst_55227;
var inst_55206 = inst_55229;
var inst_55207 = (0);
var state_55264__$1 = (function (){var statearr_55299 = state_55264;
(statearr_55299[(9)] = inst_55207);

(statearr_55299[(20)] = inst_55206);

(statearr_55299[(11)] = inst_55205);

(statearr_55299[(21)] = inst_55204);

return statearr_55299;
})();
var statearr_55300_55372 = state_55264__$1;
(statearr_55300_55372[(2)] = null);

(statearr_55300_55372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (41))){
var inst_55223 = (state_55264[(25)]);
var inst_55239 = (state_55264[(2)]);
var inst_55240 = cljs.core.next.call(null,inst_55223);
var inst_55204 = inst_55240;
var inst_55205 = null;
var inst_55206 = (0);
var inst_55207 = (0);
var state_55264__$1 = (function (){var statearr_55301 = state_55264;
(statearr_55301[(9)] = inst_55207);

(statearr_55301[(20)] = inst_55206);

(statearr_55301[(11)] = inst_55205);

(statearr_55301[(27)] = inst_55239);

(statearr_55301[(21)] = inst_55204);

return statearr_55301;
})();
var statearr_55302_55373 = state_55264__$1;
(statearr_55302_55373[(2)] = null);

(statearr_55302_55373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (43))){
var state_55264__$1 = state_55264;
var statearr_55303_55374 = state_55264__$1;
(statearr_55303_55374[(2)] = null);

(statearr_55303_55374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (29))){
var inst_55248 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55304_55375 = state_55264__$1;
(statearr_55304_55375[(2)] = inst_55248);

(statearr_55304_55375[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (44))){
var inst_55257 = (state_55264[(2)]);
var state_55264__$1 = (function (){var statearr_55305 = state_55264;
(statearr_55305[(28)] = inst_55257);

return statearr_55305;
})();
var statearr_55306_55376 = state_55264__$1;
(statearr_55306_55376[(2)] = null);

(statearr_55306_55376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (6))){
var inst_55196 = (state_55264[(29)]);
var inst_55195 = cljs.core.deref.call(null,cs);
var inst_55196__$1 = cljs.core.keys.call(null,inst_55195);
var inst_55197 = cljs.core.count.call(null,inst_55196__$1);
var inst_55198 = cljs.core.reset_BANG_.call(null,dctr,inst_55197);
var inst_55203 = cljs.core.seq.call(null,inst_55196__$1);
var inst_55204 = inst_55203;
var inst_55205 = null;
var inst_55206 = (0);
var inst_55207 = (0);
var state_55264__$1 = (function (){var statearr_55307 = state_55264;
(statearr_55307[(30)] = inst_55198);

(statearr_55307[(9)] = inst_55207);

(statearr_55307[(20)] = inst_55206);

(statearr_55307[(11)] = inst_55205);

(statearr_55307[(29)] = inst_55196__$1);

(statearr_55307[(21)] = inst_55204);

return statearr_55307;
})();
var statearr_55308_55377 = state_55264__$1;
(statearr_55308_55377[(2)] = null);

(statearr_55308_55377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (28))){
var inst_55223 = (state_55264[(25)]);
var inst_55204 = (state_55264[(21)]);
var inst_55223__$1 = cljs.core.seq.call(null,inst_55204);
var state_55264__$1 = (function (){var statearr_55309 = state_55264;
(statearr_55309[(25)] = inst_55223__$1);

return statearr_55309;
})();
if(inst_55223__$1){
var statearr_55310_55378 = state_55264__$1;
(statearr_55310_55378[(1)] = (33));

} else {
var statearr_55311_55379 = state_55264__$1;
(statearr_55311_55379[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (25))){
var inst_55207 = (state_55264[(9)]);
var inst_55206 = (state_55264[(20)]);
var inst_55209 = (inst_55207 < inst_55206);
var inst_55210 = inst_55209;
var state_55264__$1 = state_55264;
if(cljs.core.truth_(inst_55210)){
var statearr_55312_55380 = state_55264__$1;
(statearr_55312_55380[(1)] = (27));

} else {
var statearr_55313_55381 = state_55264__$1;
(statearr_55313_55381[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (34))){
var state_55264__$1 = state_55264;
var statearr_55314_55382 = state_55264__$1;
(statearr_55314_55382[(2)] = null);

(statearr_55314_55382[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (17))){
var state_55264__$1 = state_55264;
var statearr_55315_55383 = state_55264__$1;
(statearr_55315_55383[(2)] = null);

(statearr_55315_55383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (3))){
var inst_55262 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55264__$1,inst_55262);
} else {
if((state_val_55265 === (12))){
var inst_55191 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55316_55384 = state_55264__$1;
(statearr_55316_55384[(2)] = inst_55191);

(statearr_55316_55384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (2))){
var state_55264__$1 = state_55264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55264__$1,(4),ch);
} else {
if((state_val_55265 === (23))){
var state_55264__$1 = state_55264;
var statearr_55317_55385 = state_55264__$1;
(statearr_55317_55385[(2)] = null);

(statearr_55317_55385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (35))){
var inst_55246 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55318_55386 = state_55264__$1;
(statearr_55318_55386[(2)] = inst_55246);

(statearr_55318_55386[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (19))){
var inst_55165 = (state_55264[(7)]);
var inst_55169 = cljs.core.chunk_first.call(null,inst_55165);
var inst_55170 = cljs.core.chunk_rest.call(null,inst_55165);
var inst_55171 = cljs.core.count.call(null,inst_55169);
var inst_55145 = inst_55170;
var inst_55146 = inst_55169;
var inst_55147 = inst_55171;
var inst_55148 = (0);
var state_55264__$1 = (function (){var statearr_55319 = state_55264;
(statearr_55319[(13)] = inst_55145);

(statearr_55319[(15)] = inst_55146);

(statearr_55319[(16)] = inst_55148);

(statearr_55319[(17)] = inst_55147);

return statearr_55319;
})();
var statearr_55320_55387 = state_55264__$1;
(statearr_55320_55387[(2)] = null);

(statearr_55320_55387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (11))){
var inst_55145 = (state_55264[(13)]);
var inst_55165 = (state_55264[(7)]);
var inst_55165__$1 = cljs.core.seq.call(null,inst_55145);
var state_55264__$1 = (function (){var statearr_55321 = state_55264;
(statearr_55321[(7)] = inst_55165__$1);

return statearr_55321;
})();
if(inst_55165__$1){
var statearr_55322_55388 = state_55264__$1;
(statearr_55322_55388[(1)] = (16));

} else {
var statearr_55323_55389 = state_55264__$1;
(statearr_55323_55389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (9))){
var inst_55193 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55324_55390 = state_55264__$1;
(statearr_55324_55390[(2)] = inst_55193);

(statearr_55324_55390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (5))){
var inst_55143 = cljs.core.deref.call(null,cs);
var inst_55144 = cljs.core.seq.call(null,inst_55143);
var inst_55145 = inst_55144;
var inst_55146 = null;
var inst_55147 = (0);
var inst_55148 = (0);
var state_55264__$1 = (function (){var statearr_55325 = state_55264;
(statearr_55325[(13)] = inst_55145);

(statearr_55325[(15)] = inst_55146);

(statearr_55325[(16)] = inst_55148);

(statearr_55325[(17)] = inst_55147);

return statearr_55325;
})();
var statearr_55326_55391 = state_55264__$1;
(statearr_55326_55391[(2)] = null);

(statearr_55326_55391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (14))){
var state_55264__$1 = state_55264;
var statearr_55327_55392 = state_55264__$1;
(statearr_55327_55392[(2)] = null);

(statearr_55327_55392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (45))){
var inst_55254 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55328_55393 = state_55264__$1;
(statearr_55328_55393[(2)] = inst_55254);

(statearr_55328_55393[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (26))){
var inst_55196 = (state_55264[(29)]);
var inst_55250 = (state_55264[(2)]);
var inst_55251 = cljs.core.seq.call(null,inst_55196);
var state_55264__$1 = (function (){var statearr_55329 = state_55264;
(statearr_55329[(31)] = inst_55250);

return statearr_55329;
})();
if(inst_55251){
var statearr_55330_55394 = state_55264__$1;
(statearr_55330_55394[(1)] = (42));

} else {
var statearr_55331_55395 = state_55264__$1;
(statearr_55331_55395[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (16))){
var inst_55165 = (state_55264[(7)]);
var inst_55167 = cljs.core.chunked_seq_QMARK_.call(null,inst_55165);
var state_55264__$1 = state_55264;
if(inst_55167){
var statearr_55332_55396 = state_55264__$1;
(statearr_55332_55396[(1)] = (19));

} else {
var statearr_55333_55397 = state_55264__$1;
(statearr_55333_55397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (38))){
var inst_55243 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55334_55398 = state_55264__$1;
(statearr_55334_55398[(2)] = inst_55243);

(statearr_55334_55398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (30))){
var state_55264__$1 = state_55264;
var statearr_55335_55399 = state_55264__$1;
(statearr_55335_55399[(2)] = null);

(statearr_55335_55399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (10))){
var inst_55146 = (state_55264[(15)]);
var inst_55148 = (state_55264[(16)]);
var inst_55154 = cljs.core._nth.call(null,inst_55146,inst_55148);
var inst_55155 = cljs.core.nth.call(null,inst_55154,(0),null);
var inst_55156 = cljs.core.nth.call(null,inst_55154,(1),null);
var state_55264__$1 = (function (){var statearr_55336 = state_55264;
(statearr_55336[(26)] = inst_55155);

return statearr_55336;
})();
if(cljs.core.truth_(inst_55156)){
var statearr_55337_55400 = state_55264__$1;
(statearr_55337_55400[(1)] = (13));

} else {
var statearr_55338_55401 = state_55264__$1;
(statearr_55338_55401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (18))){
var inst_55189 = (state_55264[(2)]);
var state_55264__$1 = state_55264;
var statearr_55339_55402 = state_55264__$1;
(statearr_55339_55402[(2)] = inst_55189);

(statearr_55339_55402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (42))){
var state_55264__$1 = state_55264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55264__$1,(45),dchan);
} else {
if((state_val_55265 === (37))){
var inst_55136 = (state_55264[(12)]);
var inst_55232 = (state_55264[(23)]);
var inst_55223 = (state_55264[(25)]);
var inst_55232__$1 = cljs.core.first.call(null,inst_55223);
var inst_55233 = cljs.core.async.put_BANG_.call(null,inst_55232__$1,inst_55136,done);
var state_55264__$1 = (function (){var statearr_55340 = state_55264;
(statearr_55340[(23)] = inst_55232__$1);

return statearr_55340;
})();
if(cljs.core.truth_(inst_55233)){
var statearr_55341_55403 = state_55264__$1;
(statearr_55341_55403[(1)] = (39));

} else {
var statearr_55342_55404 = state_55264__$1;
(statearr_55342_55404[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55265 === (8))){
var inst_55148 = (state_55264[(16)]);
var inst_55147 = (state_55264[(17)]);
var inst_55150 = (inst_55148 < inst_55147);
var inst_55151 = inst_55150;
var state_55264__$1 = state_55264;
if(cljs.core.truth_(inst_55151)){
var statearr_55343_55405 = state_55264__$1;
(statearr_55343_55405[(1)] = (10));

} else {
var statearr_55344_55406 = state_55264__$1;
(statearr_55344_55406[(1)] = (11));

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
});})(c__18924__auto___55352,cs,m,dchan,dctr,done))
;
return ((function (switch__18903__auto__,c__18924__auto___55352,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18904__auto__ = null;
var cljs$core$async$mult_$_state_machine__18904__auto____0 = (function (){
var statearr_55348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55348[(0)] = cljs$core$async$mult_$_state_machine__18904__auto__);

(statearr_55348[(1)] = (1));

return statearr_55348;
});
var cljs$core$async$mult_$_state_machine__18904__auto____1 = (function (state_55264){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_55264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e55349){if((e55349 instanceof Object)){
var ex__18907__auto__ = e55349;
var statearr_55350_55407 = state_55264;
(statearr_55350_55407[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55408 = state_55264;
state_55264 = G__55408;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18904__auto__ = function(state_55264){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18904__auto____1.call(this,state_55264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18904__auto____0;
cljs$core$async$mult_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18904__auto____1;
return cljs$core$async$mult_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___55352,cs,m,dchan,dctr,done))
})();
var state__18926__auto__ = (function (){var statearr_55351 = f__18925__auto__.call(null);
(statearr_55351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___55352);

return statearr_55351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___55352,cs,m,dchan,dctr,done))
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
var args55409 = [];
var len__17884__auto___55412 = arguments.length;
var i__17885__auto___55413 = (0);
while(true){
if((i__17885__auto___55413 < len__17884__auto___55412)){
args55409.push((arguments[i__17885__auto___55413]));

var G__55414 = (i__17885__auto___55413 + (1));
i__17885__auto___55413 = G__55414;
continue;
} else {
}
break;
}

var G__55411 = args55409.length;
switch (G__55411) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55409.length)].join('')));

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
var len__17884__auto___55426 = arguments.length;
var i__17885__auto___55427 = (0);
while(true){
if((i__17885__auto___55427 < len__17884__auto___55426)){
args__17891__auto__.push((arguments[i__17885__auto___55427]));

var G__55428 = (i__17885__auto___55427 + (1));
i__17885__auto___55427 = G__55428;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55420){
var map__55421 = p__55420;
var map__55421__$1 = ((((!((map__55421 == null)))?((((map__55421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55421):map__55421);
var opts = map__55421__$1;
var statearr_55423_55429 = state;
(statearr_55423_55429[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__55421,map__55421__$1,opts){
return (function (val){
var statearr_55424_55430 = state;
(statearr_55424_55430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__55421,map__55421__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_55425_55431 = state;
(statearr_55425_55431[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55416){
var G__55417 = cljs.core.first.call(null,seq55416);
var seq55416__$1 = cljs.core.next.call(null,seq55416);
var G__55418 = cljs.core.first.call(null,seq55416__$1);
var seq55416__$2 = cljs.core.next.call(null,seq55416__$1);
var G__55419 = cljs.core.first.call(null,seq55416__$2);
var seq55416__$3 = cljs.core.next.call(null,seq55416__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55417,G__55418,G__55419,seq55416__$3);
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
if(typeof cljs.core.async.t_cljs$core$async55595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55595 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55596){
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
this.meta55596 = meta55596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55597,meta55596__$1){
var self__ = this;
var _55597__$1 = this;
return (new cljs.core.async.t_cljs$core$async55595(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55596__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_55597){
var self__ = this;
var _55597__$1 = this;
return self__.meta55596;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async55595.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55596","meta55596",1179806834,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async55595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55595";

cljs.core.async.t_cljs$core$async55595.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async55595");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async55595 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async55595(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55596){
return (new cljs.core.async.t_cljs$core$async55595(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55596));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async55595(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18924__auto___55758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___55758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___55758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_55695){
var state_val_55696 = (state_55695[(1)]);
if((state_val_55696 === (7))){
var inst_55613 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
var statearr_55697_55759 = state_55695__$1;
(statearr_55697_55759[(2)] = inst_55613);

(statearr_55697_55759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (20))){
var inst_55625 = (state_55695[(7)]);
var state_55695__$1 = state_55695;
var statearr_55698_55760 = state_55695__$1;
(statearr_55698_55760[(2)] = inst_55625);

(statearr_55698_55760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (27))){
var state_55695__$1 = state_55695;
var statearr_55699_55761 = state_55695__$1;
(statearr_55699_55761[(2)] = null);

(statearr_55699_55761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (1))){
var inst_55601 = (state_55695[(8)]);
var inst_55601__$1 = calc_state.call(null);
var inst_55603 = (inst_55601__$1 == null);
var inst_55604 = cljs.core.not.call(null,inst_55603);
var state_55695__$1 = (function (){var statearr_55700 = state_55695;
(statearr_55700[(8)] = inst_55601__$1);

return statearr_55700;
})();
if(inst_55604){
var statearr_55701_55762 = state_55695__$1;
(statearr_55701_55762[(1)] = (2));

} else {
var statearr_55702_55763 = state_55695__$1;
(statearr_55702_55763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (24))){
var inst_55648 = (state_55695[(9)]);
var inst_55655 = (state_55695[(10)]);
var inst_55669 = (state_55695[(11)]);
var inst_55669__$1 = inst_55648.call(null,inst_55655);
var state_55695__$1 = (function (){var statearr_55703 = state_55695;
(statearr_55703[(11)] = inst_55669__$1);

return statearr_55703;
})();
if(cljs.core.truth_(inst_55669__$1)){
var statearr_55704_55764 = state_55695__$1;
(statearr_55704_55764[(1)] = (29));

} else {
var statearr_55705_55765 = state_55695__$1;
(statearr_55705_55765[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (4))){
var inst_55616 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
if(cljs.core.truth_(inst_55616)){
var statearr_55706_55766 = state_55695__$1;
(statearr_55706_55766[(1)] = (8));

} else {
var statearr_55707_55767 = state_55695__$1;
(statearr_55707_55767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (15))){
var inst_55642 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
if(cljs.core.truth_(inst_55642)){
var statearr_55708_55768 = state_55695__$1;
(statearr_55708_55768[(1)] = (19));

} else {
var statearr_55709_55769 = state_55695__$1;
(statearr_55709_55769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (21))){
var inst_55647 = (state_55695[(12)]);
var inst_55647__$1 = (state_55695[(2)]);
var inst_55648 = cljs.core.get.call(null,inst_55647__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55649 = cljs.core.get.call(null,inst_55647__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55650 = cljs.core.get.call(null,inst_55647__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55695__$1 = (function (){var statearr_55710 = state_55695;
(statearr_55710[(12)] = inst_55647__$1);

(statearr_55710[(13)] = inst_55649);

(statearr_55710[(9)] = inst_55648);

return statearr_55710;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_55695__$1,(22),inst_55650);
} else {
if((state_val_55696 === (31))){
var inst_55677 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
if(cljs.core.truth_(inst_55677)){
var statearr_55711_55770 = state_55695__$1;
(statearr_55711_55770[(1)] = (32));

} else {
var statearr_55712_55771 = state_55695__$1;
(statearr_55712_55771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (32))){
var inst_55654 = (state_55695[(14)]);
var state_55695__$1 = state_55695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55695__$1,(35),out,inst_55654);
} else {
if((state_val_55696 === (33))){
var inst_55647 = (state_55695[(12)]);
var inst_55625 = inst_55647;
var state_55695__$1 = (function (){var statearr_55713 = state_55695;
(statearr_55713[(7)] = inst_55625);

return statearr_55713;
})();
var statearr_55714_55772 = state_55695__$1;
(statearr_55714_55772[(2)] = null);

(statearr_55714_55772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (13))){
var inst_55625 = (state_55695[(7)]);
var inst_55632 = inst_55625.cljs$lang$protocol_mask$partition0$;
var inst_55633 = (inst_55632 & (64));
var inst_55634 = inst_55625.cljs$core$ISeq$;
var inst_55635 = (inst_55633) || (inst_55634);
var state_55695__$1 = state_55695;
if(cljs.core.truth_(inst_55635)){
var statearr_55715_55773 = state_55695__$1;
(statearr_55715_55773[(1)] = (16));

} else {
var statearr_55716_55774 = state_55695__$1;
(statearr_55716_55774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (22))){
var inst_55655 = (state_55695[(10)]);
var inst_55654 = (state_55695[(14)]);
var inst_55653 = (state_55695[(2)]);
var inst_55654__$1 = cljs.core.nth.call(null,inst_55653,(0),null);
var inst_55655__$1 = cljs.core.nth.call(null,inst_55653,(1),null);
var inst_55656 = (inst_55654__$1 == null);
var inst_55657 = cljs.core._EQ_.call(null,inst_55655__$1,change);
var inst_55658 = (inst_55656) || (inst_55657);
var state_55695__$1 = (function (){var statearr_55717 = state_55695;
(statearr_55717[(10)] = inst_55655__$1);

(statearr_55717[(14)] = inst_55654__$1);

return statearr_55717;
})();
if(cljs.core.truth_(inst_55658)){
var statearr_55718_55775 = state_55695__$1;
(statearr_55718_55775[(1)] = (23));

} else {
var statearr_55719_55776 = state_55695__$1;
(statearr_55719_55776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (36))){
var inst_55647 = (state_55695[(12)]);
var inst_55625 = inst_55647;
var state_55695__$1 = (function (){var statearr_55720 = state_55695;
(statearr_55720[(7)] = inst_55625);

return statearr_55720;
})();
var statearr_55721_55777 = state_55695__$1;
(statearr_55721_55777[(2)] = null);

(statearr_55721_55777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (29))){
var inst_55669 = (state_55695[(11)]);
var state_55695__$1 = state_55695;
var statearr_55722_55778 = state_55695__$1;
(statearr_55722_55778[(2)] = inst_55669);

(statearr_55722_55778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (6))){
var state_55695__$1 = state_55695;
var statearr_55723_55779 = state_55695__$1;
(statearr_55723_55779[(2)] = false);

(statearr_55723_55779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (28))){
var inst_55665 = (state_55695[(2)]);
var inst_55666 = calc_state.call(null);
var inst_55625 = inst_55666;
var state_55695__$1 = (function (){var statearr_55724 = state_55695;
(statearr_55724[(7)] = inst_55625);

(statearr_55724[(15)] = inst_55665);

return statearr_55724;
})();
var statearr_55725_55780 = state_55695__$1;
(statearr_55725_55780[(2)] = null);

(statearr_55725_55780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (25))){
var inst_55691 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
var statearr_55726_55781 = state_55695__$1;
(statearr_55726_55781[(2)] = inst_55691);

(statearr_55726_55781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (34))){
var inst_55689 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
var statearr_55727_55782 = state_55695__$1;
(statearr_55727_55782[(2)] = inst_55689);

(statearr_55727_55782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (17))){
var state_55695__$1 = state_55695;
var statearr_55728_55783 = state_55695__$1;
(statearr_55728_55783[(2)] = false);

(statearr_55728_55783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (3))){
var state_55695__$1 = state_55695;
var statearr_55729_55784 = state_55695__$1;
(statearr_55729_55784[(2)] = false);

(statearr_55729_55784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (12))){
var inst_55693 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55695__$1,inst_55693);
} else {
if((state_val_55696 === (2))){
var inst_55601 = (state_55695[(8)]);
var inst_55606 = inst_55601.cljs$lang$protocol_mask$partition0$;
var inst_55607 = (inst_55606 & (64));
var inst_55608 = inst_55601.cljs$core$ISeq$;
var inst_55609 = (inst_55607) || (inst_55608);
var state_55695__$1 = state_55695;
if(cljs.core.truth_(inst_55609)){
var statearr_55730_55785 = state_55695__$1;
(statearr_55730_55785[(1)] = (5));

} else {
var statearr_55731_55786 = state_55695__$1;
(statearr_55731_55786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (23))){
var inst_55654 = (state_55695[(14)]);
var inst_55660 = (inst_55654 == null);
var state_55695__$1 = state_55695;
if(cljs.core.truth_(inst_55660)){
var statearr_55732_55787 = state_55695__$1;
(statearr_55732_55787[(1)] = (26));

} else {
var statearr_55733_55788 = state_55695__$1;
(statearr_55733_55788[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (35))){
var inst_55680 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
if(cljs.core.truth_(inst_55680)){
var statearr_55734_55789 = state_55695__$1;
(statearr_55734_55789[(1)] = (36));

} else {
var statearr_55735_55790 = state_55695__$1;
(statearr_55735_55790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (19))){
var inst_55625 = (state_55695[(7)]);
var inst_55644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55625);
var state_55695__$1 = state_55695;
var statearr_55736_55791 = state_55695__$1;
(statearr_55736_55791[(2)] = inst_55644);

(statearr_55736_55791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (11))){
var inst_55625 = (state_55695[(7)]);
var inst_55629 = (inst_55625 == null);
var inst_55630 = cljs.core.not.call(null,inst_55629);
var state_55695__$1 = state_55695;
if(inst_55630){
var statearr_55737_55792 = state_55695__$1;
(statearr_55737_55792[(1)] = (13));

} else {
var statearr_55738_55793 = state_55695__$1;
(statearr_55738_55793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (9))){
var inst_55601 = (state_55695[(8)]);
var state_55695__$1 = state_55695;
var statearr_55739_55794 = state_55695__$1;
(statearr_55739_55794[(2)] = inst_55601);

(statearr_55739_55794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (5))){
var state_55695__$1 = state_55695;
var statearr_55740_55795 = state_55695__$1;
(statearr_55740_55795[(2)] = true);

(statearr_55740_55795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (14))){
var state_55695__$1 = state_55695;
var statearr_55741_55796 = state_55695__$1;
(statearr_55741_55796[(2)] = false);

(statearr_55741_55796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (26))){
var inst_55655 = (state_55695[(10)]);
var inst_55662 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_55655);
var state_55695__$1 = state_55695;
var statearr_55742_55797 = state_55695__$1;
(statearr_55742_55797[(2)] = inst_55662);

(statearr_55742_55797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (16))){
var state_55695__$1 = state_55695;
var statearr_55743_55798 = state_55695__$1;
(statearr_55743_55798[(2)] = true);

(statearr_55743_55798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (38))){
var inst_55685 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
var statearr_55744_55799 = state_55695__$1;
(statearr_55744_55799[(2)] = inst_55685);

(statearr_55744_55799[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (30))){
var inst_55649 = (state_55695[(13)]);
var inst_55648 = (state_55695[(9)]);
var inst_55655 = (state_55695[(10)]);
var inst_55672 = cljs.core.empty_QMARK_.call(null,inst_55648);
var inst_55673 = inst_55649.call(null,inst_55655);
var inst_55674 = cljs.core.not.call(null,inst_55673);
var inst_55675 = (inst_55672) && (inst_55674);
var state_55695__$1 = state_55695;
var statearr_55745_55800 = state_55695__$1;
(statearr_55745_55800[(2)] = inst_55675);

(statearr_55745_55800[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (10))){
var inst_55601 = (state_55695[(8)]);
var inst_55621 = (state_55695[(2)]);
var inst_55622 = cljs.core.get.call(null,inst_55621,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55623 = cljs.core.get.call(null,inst_55621,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55624 = cljs.core.get.call(null,inst_55621,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55625 = inst_55601;
var state_55695__$1 = (function (){var statearr_55746 = state_55695;
(statearr_55746[(16)] = inst_55623);

(statearr_55746[(7)] = inst_55625);

(statearr_55746[(17)] = inst_55622);

(statearr_55746[(18)] = inst_55624);

return statearr_55746;
})();
var statearr_55747_55801 = state_55695__$1;
(statearr_55747_55801[(2)] = null);

(statearr_55747_55801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (18))){
var inst_55639 = (state_55695[(2)]);
var state_55695__$1 = state_55695;
var statearr_55748_55802 = state_55695__$1;
(statearr_55748_55802[(2)] = inst_55639);

(statearr_55748_55802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (37))){
var state_55695__$1 = state_55695;
var statearr_55749_55803 = state_55695__$1;
(statearr_55749_55803[(2)] = null);

(statearr_55749_55803[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55696 === (8))){
var inst_55601 = (state_55695[(8)]);
var inst_55618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55601);
var state_55695__$1 = state_55695;
var statearr_55750_55804 = state_55695__$1;
(statearr_55750_55804[(2)] = inst_55618);

(statearr_55750_55804[(1)] = (10));


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
});})(c__18924__auto___55758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18903__auto__,c__18924__auto___55758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18904__auto__ = null;
var cljs$core$async$mix_$_state_machine__18904__auto____0 = (function (){
var statearr_55754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55754[(0)] = cljs$core$async$mix_$_state_machine__18904__auto__);

(statearr_55754[(1)] = (1));

return statearr_55754;
});
var cljs$core$async$mix_$_state_machine__18904__auto____1 = (function (state_55695){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_55695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e55755){if((e55755 instanceof Object)){
var ex__18907__auto__ = e55755;
var statearr_55756_55805 = state_55695;
(statearr_55756_55805[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55806 = state_55695;
state_55695 = G__55806;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18904__auto__ = function(state_55695){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18904__auto____1.call(this,state_55695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18904__auto____0;
cljs$core$async$mix_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18904__auto____1;
return cljs$core$async$mix_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___55758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18926__auto__ = (function (){var statearr_55757 = f__18925__auto__.call(null);
(statearr_55757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___55758);

return statearr_55757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___55758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args55807 = [];
var len__17884__auto___55810 = arguments.length;
var i__17885__auto___55811 = (0);
while(true){
if((i__17885__auto___55811 < len__17884__auto___55810)){
args55807.push((arguments[i__17885__auto___55811]));

var G__55812 = (i__17885__auto___55811 + (1));
i__17885__auto___55811 = G__55812;
continue;
} else {
}
break;
}

var G__55809 = args55807.length;
switch (G__55809) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55807.length)].join('')));

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
var args55815 = [];
var len__17884__auto___55940 = arguments.length;
var i__17885__auto___55941 = (0);
while(true){
if((i__17885__auto___55941 < len__17884__auto___55940)){
args55815.push((arguments[i__17885__auto___55941]));

var G__55942 = (i__17885__auto___55941 + (1));
i__17885__auto___55941 = G__55942;
continue;
} else {
}
break;
}

var G__55817 = args55815.length;
switch (G__55817) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55815.length)].join('')));

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
return (function (p1__55814_SHARP_){
if(cljs.core.truth_(p1__55814_SHARP_.call(null,topic))){
return p1__55814_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__55814_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async55818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55818 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55819){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55819 = meta55819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_55820,meta55819__$1){
var self__ = this;
var _55820__$1 = this;
return (new cljs.core.async.t_cljs$core$async55818(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55819__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_55820){
var self__ = this;
var _55820__$1 = this;
return self__.meta55819;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55818.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55819","meta55819",-1942006554,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async55818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async55818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55818";

cljs.core.async.t_cljs$core$async55818.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async55818");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async55818 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async55818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55819){
return (new cljs.core.async.t_cljs$core$async55818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55819));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async55818(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18924__auto___55944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___55944,mults,ensure_mult,p){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___55944,mults,ensure_mult,p){
return (function (state_55892){
var state_val_55893 = (state_55892[(1)]);
if((state_val_55893 === (7))){
var inst_55888 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
var statearr_55894_55945 = state_55892__$1;
(statearr_55894_55945[(2)] = inst_55888);

(statearr_55894_55945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (20))){
var state_55892__$1 = state_55892;
var statearr_55895_55946 = state_55892__$1;
(statearr_55895_55946[(2)] = null);

(statearr_55895_55946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (1))){
var state_55892__$1 = state_55892;
var statearr_55896_55947 = state_55892__$1;
(statearr_55896_55947[(2)] = null);

(statearr_55896_55947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (24))){
var inst_55871 = (state_55892[(7)]);
var inst_55880 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_55871);
var state_55892__$1 = state_55892;
var statearr_55897_55948 = state_55892__$1;
(statearr_55897_55948[(2)] = inst_55880);

(statearr_55897_55948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (4))){
var inst_55823 = (state_55892[(8)]);
var inst_55823__$1 = (state_55892[(2)]);
var inst_55824 = (inst_55823__$1 == null);
var state_55892__$1 = (function (){var statearr_55898 = state_55892;
(statearr_55898[(8)] = inst_55823__$1);

return statearr_55898;
})();
if(cljs.core.truth_(inst_55824)){
var statearr_55899_55949 = state_55892__$1;
(statearr_55899_55949[(1)] = (5));

} else {
var statearr_55900_55950 = state_55892__$1;
(statearr_55900_55950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (15))){
var inst_55865 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
var statearr_55901_55951 = state_55892__$1;
(statearr_55901_55951[(2)] = inst_55865);

(statearr_55901_55951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (21))){
var inst_55885 = (state_55892[(2)]);
var state_55892__$1 = (function (){var statearr_55902 = state_55892;
(statearr_55902[(9)] = inst_55885);

return statearr_55902;
})();
var statearr_55903_55952 = state_55892__$1;
(statearr_55903_55952[(2)] = null);

(statearr_55903_55952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (13))){
var inst_55847 = (state_55892[(10)]);
var inst_55849 = cljs.core.chunked_seq_QMARK_.call(null,inst_55847);
var state_55892__$1 = state_55892;
if(inst_55849){
var statearr_55904_55953 = state_55892__$1;
(statearr_55904_55953[(1)] = (16));

} else {
var statearr_55905_55954 = state_55892__$1;
(statearr_55905_55954[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (22))){
var inst_55877 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
if(cljs.core.truth_(inst_55877)){
var statearr_55906_55955 = state_55892__$1;
(statearr_55906_55955[(1)] = (23));

} else {
var statearr_55907_55956 = state_55892__$1;
(statearr_55907_55956[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (6))){
var inst_55873 = (state_55892[(11)]);
var inst_55871 = (state_55892[(7)]);
var inst_55823 = (state_55892[(8)]);
var inst_55871__$1 = topic_fn.call(null,inst_55823);
var inst_55872 = cljs.core.deref.call(null,mults);
var inst_55873__$1 = cljs.core.get.call(null,inst_55872,inst_55871__$1);
var state_55892__$1 = (function (){var statearr_55908 = state_55892;
(statearr_55908[(11)] = inst_55873__$1);

(statearr_55908[(7)] = inst_55871__$1);

return statearr_55908;
})();
if(cljs.core.truth_(inst_55873__$1)){
var statearr_55909_55957 = state_55892__$1;
(statearr_55909_55957[(1)] = (19));

} else {
var statearr_55910_55958 = state_55892__$1;
(statearr_55910_55958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (25))){
var inst_55882 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
var statearr_55911_55959 = state_55892__$1;
(statearr_55911_55959[(2)] = inst_55882);

(statearr_55911_55959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (17))){
var inst_55847 = (state_55892[(10)]);
var inst_55856 = cljs.core.first.call(null,inst_55847);
var inst_55857 = cljs.core.async.muxch_STAR_.call(null,inst_55856);
var inst_55858 = cljs.core.async.close_BANG_.call(null,inst_55857);
var inst_55859 = cljs.core.next.call(null,inst_55847);
var inst_55833 = inst_55859;
var inst_55834 = null;
var inst_55835 = (0);
var inst_55836 = (0);
var state_55892__$1 = (function (){var statearr_55912 = state_55892;
(statearr_55912[(12)] = inst_55858);

(statearr_55912[(13)] = inst_55833);

(statearr_55912[(14)] = inst_55835);

(statearr_55912[(15)] = inst_55836);

(statearr_55912[(16)] = inst_55834);

return statearr_55912;
})();
var statearr_55913_55960 = state_55892__$1;
(statearr_55913_55960[(2)] = null);

(statearr_55913_55960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (3))){
var inst_55890 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55892__$1,inst_55890);
} else {
if((state_val_55893 === (12))){
var inst_55867 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
var statearr_55914_55961 = state_55892__$1;
(statearr_55914_55961[(2)] = inst_55867);

(statearr_55914_55961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (2))){
var state_55892__$1 = state_55892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55892__$1,(4),ch);
} else {
if((state_val_55893 === (23))){
var state_55892__$1 = state_55892;
var statearr_55915_55962 = state_55892__$1;
(statearr_55915_55962[(2)] = null);

(statearr_55915_55962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (19))){
var inst_55873 = (state_55892[(11)]);
var inst_55823 = (state_55892[(8)]);
var inst_55875 = cljs.core.async.muxch_STAR_.call(null,inst_55873);
var state_55892__$1 = state_55892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55892__$1,(22),inst_55875,inst_55823);
} else {
if((state_val_55893 === (11))){
var inst_55833 = (state_55892[(13)]);
var inst_55847 = (state_55892[(10)]);
var inst_55847__$1 = cljs.core.seq.call(null,inst_55833);
var state_55892__$1 = (function (){var statearr_55916 = state_55892;
(statearr_55916[(10)] = inst_55847__$1);

return statearr_55916;
})();
if(inst_55847__$1){
var statearr_55917_55963 = state_55892__$1;
(statearr_55917_55963[(1)] = (13));

} else {
var statearr_55918_55964 = state_55892__$1;
(statearr_55918_55964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (9))){
var inst_55869 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
var statearr_55919_55965 = state_55892__$1;
(statearr_55919_55965[(2)] = inst_55869);

(statearr_55919_55965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (5))){
var inst_55830 = cljs.core.deref.call(null,mults);
var inst_55831 = cljs.core.vals.call(null,inst_55830);
var inst_55832 = cljs.core.seq.call(null,inst_55831);
var inst_55833 = inst_55832;
var inst_55834 = null;
var inst_55835 = (0);
var inst_55836 = (0);
var state_55892__$1 = (function (){var statearr_55920 = state_55892;
(statearr_55920[(13)] = inst_55833);

(statearr_55920[(14)] = inst_55835);

(statearr_55920[(15)] = inst_55836);

(statearr_55920[(16)] = inst_55834);

return statearr_55920;
})();
var statearr_55921_55966 = state_55892__$1;
(statearr_55921_55966[(2)] = null);

(statearr_55921_55966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (14))){
var state_55892__$1 = state_55892;
var statearr_55925_55967 = state_55892__$1;
(statearr_55925_55967[(2)] = null);

(statearr_55925_55967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (16))){
var inst_55847 = (state_55892[(10)]);
var inst_55851 = cljs.core.chunk_first.call(null,inst_55847);
var inst_55852 = cljs.core.chunk_rest.call(null,inst_55847);
var inst_55853 = cljs.core.count.call(null,inst_55851);
var inst_55833 = inst_55852;
var inst_55834 = inst_55851;
var inst_55835 = inst_55853;
var inst_55836 = (0);
var state_55892__$1 = (function (){var statearr_55926 = state_55892;
(statearr_55926[(13)] = inst_55833);

(statearr_55926[(14)] = inst_55835);

(statearr_55926[(15)] = inst_55836);

(statearr_55926[(16)] = inst_55834);

return statearr_55926;
})();
var statearr_55927_55968 = state_55892__$1;
(statearr_55927_55968[(2)] = null);

(statearr_55927_55968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (10))){
var inst_55833 = (state_55892[(13)]);
var inst_55835 = (state_55892[(14)]);
var inst_55836 = (state_55892[(15)]);
var inst_55834 = (state_55892[(16)]);
var inst_55841 = cljs.core._nth.call(null,inst_55834,inst_55836);
var inst_55842 = cljs.core.async.muxch_STAR_.call(null,inst_55841);
var inst_55843 = cljs.core.async.close_BANG_.call(null,inst_55842);
var inst_55844 = (inst_55836 + (1));
var tmp55922 = inst_55833;
var tmp55923 = inst_55835;
var tmp55924 = inst_55834;
var inst_55833__$1 = tmp55922;
var inst_55834__$1 = tmp55924;
var inst_55835__$1 = tmp55923;
var inst_55836__$1 = inst_55844;
var state_55892__$1 = (function (){var statearr_55928 = state_55892;
(statearr_55928[(17)] = inst_55843);

(statearr_55928[(13)] = inst_55833__$1);

(statearr_55928[(14)] = inst_55835__$1);

(statearr_55928[(15)] = inst_55836__$1);

(statearr_55928[(16)] = inst_55834__$1);

return statearr_55928;
})();
var statearr_55929_55969 = state_55892__$1;
(statearr_55929_55969[(2)] = null);

(statearr_55929_55969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (18))){
var inst_55862 = (state_55892[(2)]);
var state_55892__$1 = state_55892;
var statearr_55930_55970 = state_55892__$1;
(statearr_55930_55970[(2)] = inst_55862);

(statearr_55930_55970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55893 === (8))){
var inst_55835 = (state_55892[(14)]);
var inst_55836 = (state_55892[(15)]);
var inst_55838 = (inst_55836 < inst_55835);
var inst_55839 = inst_55838;
var state_55892__$1 = state_55892;
if(cljs.core.truth_(inst_55839)){
var statearr_55931_55971 = state_55892__$1;
(statearr_55931_55971[(1)] = (10));

} else {
var statearr_55932_55972 = state_55892__$1;
(statearr_55932_55972[(1)] = (11));

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
});})(c__18924__auto___55944,mults,ensure_mult,p))
;
return ((function (switch__18903__auto__,c__18924__auto___55944,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_55936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55936[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_55936[(1)] = (1));

return statearr_55936;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_55892){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_55892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e55937){if((e55937 instanceof Object)){
var ex__18907__auto__ = e55937;
var statearr_55938_55973 = state_55892;
(statearr_55938_55973[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55974 = state_55892;
state_55892 = G__55974;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_55892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_55892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___55944,mults,ensure_mult,p))
})();
var state__18926__auto__ = (function (){var statearr_55939 = f__18925__auto__.call(null);
(statearr_55939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___55944);

return statearr_55939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___55944,mults,ensure_mult,p))
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
var args55975 = [];
var len__17884__auto___55978 = arguments.length;
var i__17885__auto___55979 = (0);
while(true){
if((i__17885__auto___55979 < len__17884__auto___55978)){
args55975.push((arguments[i__17885__auto___55979]));

var G__55980 = (i__17885__auto___55979 + (1));
i__17885__auto___55979 = G__55980;
continue;
} else {
}
break;
}

var G__55977 = args55975.length;
switch (G__55977) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55975.length)].join('')));

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
var args55982 = [];
var len__17884__auto___55985 = arguments.length;
var i__17885__auto___55986 = (0);
while(true){
if((i__17885__auto___55986 < len__17884__auto___55985)){
args55982.push((arguments[i__17885__auto___55986]));

var G__55987 = (i__17885__auto___55986 + (1));
i__17885__auto___55986 = G__55987;
continue;
} else {
}
break;
}

var G__55984 = args55982.length;
switch (G__55984) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55982.length)].join('')));

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
var args55989 = [];
var len__17884__auto___56060 = arguments.length;
var i__17885__auto___56061 = (0);
while(true){
if((i__17885__auto___56061 < len__17884__auto___56060)){
args55989.push((arguments[i__17885__auto___56061]));

var G__56062 = (i__17885__auto___56061 + (1));
i__17885__auto___56061 = G__56062;
continue;
} else {
}
break;
}

var G__55991 = args55989.length;
switch (G__55991) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55989.length)].join('')));

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
var c__18924__auto___56064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___56064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___56064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_56030){
var state_val_56031 = (state_56030[(1)]);
if((state_val_56031 === (7))){
var state_56030__$1 = state_56030;
var statearr_56032_56065 = state_56030__$1;
(statearr_56032_56065[(2)] = null);

(statearr_56032_56065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (1))){
var state_56030__$1 = state_56030;
var statearr_56033_56066 = state_56030__$1;
(statearr_56033_56066[(2)] = null);

(statearr_56033_56066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (4))){
var inst_55994 = (state_56030[(7)]);
var inst_55996 = (inst_55994 < cnt);
var state_56030__$1 = state_56030;
if(cljs.core.truth_(inst_55996)){
var statearr_56034_56067 = state_56030__$1;
(statearr_56034_56067[(1)] = (6));

} else {
var statearr_56035_56068 = state_56030__$1;
(statearr_56035_56068[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (15))){
var inst_56026 = (state_56030[(2)]);
var state_56030__$1 = state_56030;
var statearr_56036_56069 = state_56030__$1;
(statearr_56036_56069[(2)] = inst_56026);

(statearr_56036_56069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (13))){
var inst_56019 = cljs.core.async.close_BANG_.call(null,out);
var state_56030__$1 = state_56030;
var statearr_56037_56070 = state_56030__$1;
(statearr_56037_56070[(2)] = inst_56019);

(statearr_56037_56070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (6))){
var state_56030__$1 = state_56030;
var statearr_56038_56071 = state_56030__$1;
(statearr_56038_56071[(2)] = null);

(statearr_56038_56071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (3))){
var inst_56028 = (state_56030[(2)]);
var state_56030__$1 = state_56030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56030__$1,inst_56028);
} else {
if((state_val_56031 === (12))){
var inst_56016 = (state_56030[(8)]);
var inst_56016__$1 = (state_56030[(2)]);
var inst_56017 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_56016__$1);
var state_56030__$1 = (function (){var statearr_56039 = state_56030;
(statearr_56039[(8)] = inst_56016__$1);

return statearr_56039;
})();
if(cljs.core.truth_(inst_56017)){
var statearr_56040_56072 = state_56030__$1;
(statearr_56040_56072[(1)] = (13));

} else {
var statearr_56041_56073 = state_56030__$1;
(statearr_56041_56073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (2))){
var inst_55993 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_55994 = (0);
var state_56030__$1 = (function (){var statearr_56042 = state_56030;
(statearr_56042[(7)] = inst_55994);

(statearr_56042[(9)] = inst_55993);

return statearr_56042;
})();
var statearr_56043_56074 = state_56030__$1;
(statearr_56043_56074[(2)] = null);

(statearr_56043_56074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (11))){
var inst_55994 = (state_56030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56030,(10),Object,null,(9));
var inst_56003 = chs__$1.call(null,inst_55994);
var inst_56004 = done.call(null,inst_55994);
var inst_56005 = cljs.core.async.take_BANG_.call(null,inst_56003,inst_56004);
var state_56030__$1 = state_56030;
var statearr_56044_56075 = state_56030__$1;
(statearr_56044_56075[(2)] = inst_56005);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (9))){
var inst_55994 = (state_56030[(7)]);
var inst_56007 = (state_56030[(2)]);
var inst_56008 = (inst_55994 + (1));
var inst_55994__$1 = inst_56008;
var state_56030__$1 = (function (){var statearr_56045 = state_56030;
(statearr_56045[(7)] = inst_55994__$1);

(statearr_56045[(10)] = inst_56007);

return statearr_56045;
})();
var statearr_56046_56076 = state_56030__$1;
(statearr_56046_56076[(2)] = null);

(statearr_56046_56076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (5))){
var inst_56014 = (state_56030[(2)]);
var state_56030__$1 = (function (){var statearr_56047 = state_56030;
(statearr_56047[(11)] = inst_56014);

return statearr_56047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56030__$1,(12),dchan);
} else {
if((state_val_56031 === (14))){
var inst_56016 = (state_56030[(8)]);
var inst_56021 = cljs.core.apply.call(null,f,inst_56016);
var state_56030__$1 = state_56030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56030__$1,(16),out,inst_56021);
} else {
if((state_val_56031 === (16))){
var inst_56023 = (state_56030[(2)]);
var state_56030__$1 = (function (){var statearr_56048 = state_56030;
(statearr_56048[(12)] = inst_56023);

return statearr_56048;
})();
var statearr_56049_56077 = state_56030__$1;
(statearr_56049_56077[(2)] = null);

(statearr_56049_56077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (10))){
var inst_55998 = (state_56030[(2)]);
var inst_55999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_56030__$1 = (function (){var statearr_56050 = state_56030;
(statearr_56050[(13)] = inst_55998);

return statearr_56050;
})();
var statearr_56051_56078 = state_56030__$1;
(statearr_56051_56078[(2)] = inst_55999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56031 === (8))){
var inst_56012 = (state_56030[(2)]);
var state_56030__$1 = state_56030;
var statearr_56052_56079 = state_56030__$1;
(statearr_56052_56079[(2)] = inst_56012);

(statearr_56052_56079[(1)] = (5));


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
});})(c__18924__auto___56064,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18903__auto__,c__18924__auto___56064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_56056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56056[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_56056[(1)] = (1));

return statearr_56056;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_56030){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56057){if((e56057 instanceof Object)){
var ex__18907__auto__ = e56057;
var statearr_56058_56080 = state_56030;
(statearr_56058_56080[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56081 = state_56030;
state_56030 = G__56081;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_56030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_56030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___56064,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18926__auto__ = (function (){var statearr_56059 = f__18925__auto__.call(null);
(statearr_56059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___56064);

return statearr_56059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___56064,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args56083 = [];
var len__17884__auto___56139 = arguments.length;
var i__17885__auto___56140 = (0);
while(true){
if((i__17885__auto___56140 < len__17884__auto___56139)){
args56083.push((arguments[i__17885__auto___56140]));

var G__56141 = (i__17885__auto___56140 + (1));
i__17885__auto___56140 = G__56141;
continue;
} else {
}
break;
}

var G__56085 = args56083.length;
switch (G__56085) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56083.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___56143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___56143,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___56143,out){
return (function (state_56115){
var state_val_56116 = (state_56115[(1)]);
if((state_val_56116 === (7))){
var inst_56095 = (state_56115[(7)]);
var inst_56094 = (state_56115[(8)]);
var inst_56094__$1 = (state_56115[(2)]);
var inst_56095__$1 = cljs.core.nth.call(null,inst_56094__$1,(0),null);
var inst_56096 = cljs.core.nth.call(null,inst_56094__$1,(1),null);
var inst_56097 = (inst_56095__$1 == null);
var state_56115__$1 = (function (){var statearr_56117 = state_56115;
(statearr_56117[(7)] = inst_56095__$1);

(statearr_56117[(9)] = inst_56096);

(statearr_56117[(8)] = inst_56094__$1);

return statearr_56117;
})();
if(cljs.core.truth_(inst_56097)){
var statearr_56118_56144 = state_56115__$1;
(statearr_56118_56144[(1)] = (8));

} else {
var statearr_56119_56145 = state_56115__$1;
(statearr_56119_56145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56116 === (1))){
var inst_56086 = cljs.core.vec.call(null,chs);
var inst_56087 = inst_56086;
var state_56115__$1 = (function (){var statearr_56120 = state_56115;
(statearr_56120[(10)] = inst_56087);

return statearr_56120;
})();
var statearr_56121_56146 = state_56115__$1;
(statearr_56121_56146[(2)] = null);

(statearr_56121_56146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56116 === (4))){
var inst_56087 = (state_56115[(10)]);
var state_56115__$1 = state_56115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56115__$1,(7),inst_56087);
} else {
if((state_val_56116 === (6))){
var inst_56111 = (state_56115[(2)]);
var state_56115__$1 = state_56115;
var statearr_56122_56147 = state_56115__$1;
(statearr_56122_56147[(2)] = inst_56111);

(statearr_56122_56147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56116 === (3))){
var inst_56113 = (state_56115[(2)]);
var state_56115__$1 = state_56115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56115__$1,inst_56113);
} else {
if((state_val_56116 === (2))){
var inst_56087 = (state_56115[(10)]);
var inst_56089 = cljs.core.count.call(null,inst_56087);
var inst_56090 = (inst_56089 > (0));
var state_56115__$1 = state_56115;
if(cljs.core.truth_(inst_56090)){
var statearr_56124_56148 = state_56115__$1;
(statearr_56124_56148[(1)] = (4));

} else {
var statearr_56125_56149 = state_56115__$1;
(statearr_56125_56149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56116 === (11))){
var inst_56087 = (state_56115[(10)]);
var inst_56104 = (state_56115[(2)]);
var tmp56123 = inst_56087;
var inst_56087__$1 = tmp56123;
var state_56115__$1 = (function (){var statearr_56126 = state_56115;
(statearr_56126[(11)] = inst_56104);

(statearr_56126[(10)] = inst_56087__$1);

return statearr_56126;
})();
var statearr_56127_56150 = state_56115__$1;
(statearr_56127_56150[(2)] = null);

(statearr_56127_56150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56116 === (9))){
var inst_56095 = (state_56115[(7)]);
var state_56115__$1 = state_56115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56115__$1,(11),out,inst_56095);
} else {
if((state_val_56116 === (5))){
var inst_56109 = cljs.core.async.close_BANG_.call(null,out);
var state_56115__$1 = state_56115;
var statearr_56128_56151 = state_56115__$1;
(statearr_56128_56151[(2)] = inst_56109);

(statearr_56128_56151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56116 === (10))){
var inst_56107 = (state_56115[(2)]);
var state_56115__$1 = state_56115;
var statearr_56129_56152 = state_56115__$1;
(statearr_56129_56152[(2)] = inst_56107);

(statearr_56129_56152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56116 === (8))){
var inst_56095 = (state_56115[(7)]);
var inst_56096 = (state_56115[(9)]);
var inst_56087 = (state_56115[(10)]);
var inst_56094 = (state_56115[(8)]);
var inst_56099 = (function (){var cs = inst_56087;
var vec__56092 = inst_56094;
var v = inst_56095;
var c = inst_56096;
return ((function (cs,vec__56092,v,c,inst_56095,inst_56096,inst_56087,inst_56094,state_val_56116,c__18924__auto___56143,out){
return (function (p1__56082_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__56082_SHARP_);
});
;})(cs,vec__56092,v,c,inst_56095,inst_56096,inst_56087,inst_56094,state_val_56116,c__18924__auto___56143,out))
})();
var inst_56100 = cljs.core.filterv.call(null,inst_56099,inst_56087);
var inst_56087__$1 = inst_56100;
var state_56115__$1 = (function (){var statearr_56130 = state_56115;
(statearr_56130[(10)] = inst_56087__$1);

return statearr_56130;
})();
var statearr_56131_56153 = state_56115__$1;
(statearr_56131_56153[(2)] = null);

(statearr_56131_56153[(1)] = (2));


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
});})(c__18924__auto___56143,out))
;
return ((function (switch__18903__auto__,c__18924__auto___56143,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_56135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56135[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_56135[(1)] = (1));

return statearr_56135;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_56115){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56136){if((e56136 instanceof Object)){
var ex__18907__auto__ = e56136;
var statearr_56137_56154 = state_56115;
(statearr_56137_56154[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56155 = state_56115;
state_56115 = G__56155;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_56115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_56115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___56143,out))
})();
var state__18926__auto__ = (function (){var statearr_56138 = f__18925__auto__.call(null);
(statearr_56138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___56143);

return statearr_56138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___56143,out))
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
var args56156 = [];
var len__17884__auto___56205 = arguments.length;
var i__17885__auto___56206 = (0);
while(true){
if((i__17885__auto___56206 < len__17884__auto___56205)){
args56156.push((arguments[i__17885__auto___56206]));

var G__56207 = (i__17885__auto___56206 + (1));
i__17885__auto___56206 = G__56207;
continue;
} else {
}
break;
}

var G__56158 = args56156.length;
switch (G__56158) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56156.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___56209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___56209,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___56209,out){
return (function (state_56182){
var state_val_56183 = (state_56182[(1)]);
if((state_val_56183 === (7))){
var inst_56164 = (state_56182[(7)]);
var inst_56164__$1 = (state_56182[(2)]);
var inst_56165 = (inst_56164__$1 == null);
var inst_56166 = cljs.core.not.call(null,inst_56165);
var state_56182__$1 = (function (){var statearr_56184 = state_56182;
(statearr_56184[(7)] = inst_56164__$1);

return statearr_56184;
})();
if(inst_56166){
var statearr_56185_56210 = state_56182__$1;
(statearr_56185_56210[(1)] = (8));

} else {
var statearr_56186_56211 = state_56182__$1;
(statearr_56186_56211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (1))){
var inst_56159 = (0);
var state_56182__$1 = (function (){var statearr_56187 = state_56182;
(statearr_56187[(8)] = inst_56159);

return statearr_56187;
})();
var statearr_56188_56212 = state_56182__$1;
(statearr_56188_56212[(2)] = null);

(statearr_56188_56212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (4))){
var state_56182__$1 = state_56182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56182__$1,(7),ch);
} else {
if((state_val_56183 === (6))){
var inst_56177 = (state_56182[(2)]);
var state_56182__$1 = state_56182;
var statearr_56189_56213 = state_56182__$1;
(statearr_56189_56213[(2)] = inst_56177);

(statearr_56189_56213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (3))){
var inst_56179 = (state_56182[(2)]);
var inst_56180 = cljs.core.async.close_BANG_.call(null,out);
var state_56182__$1 = (function (){var statearr_56190 = state_56182;
(statearr_56190[(9)] = inst_56179);

return statearr_56190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56182__$1,inst_56180);
} else {
if((state_val_56183 === (2))){
var inst_56159 = (state_56182[(8)]);
var inst_56161 = (inst_56159 < n);
var state_56182__$1 = state_56182;
if(cljs.core.truth_(inst_56161)){
var statearr_56191_56214 = state_56182__$1;
(statearr_56191_56214[(1)] = (4));

} else {
var statearr_56192_56215 = state_56182__$1;
(statearr_56192_56215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (11))){
var inst_56159 = (state_56182[(8)]);
var inst_56169 = (state_56182[(2)]);
var inst_56170 = (inst_56159 + (1));
var inst_56159__$1 = inst_56170;
var state_56182__$1 = (function (){var statearr_56193 = state_56182;
(statearr_56193[(10)] = inst_56169);

(statearr_56193[(8)] = inst_56159__$1);

return statearr_56193;
})();
var statearr_56194_56216 = state_56182__$1;
(statearr_56194_56216[(2)] = null);

(statearr_56194_56216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (9))){
var state_56182__$1 = state_56182;
var statearr_56195_56217 = state_56182__$1;
(statearr_56195_56217[(2)] = null);

(statearr_56195_56217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (5))){
var state_56182__$1 = state_56182;
var statearr_56196_56218 = state_56182__$1;
(statearr_56196_56218[(2)] = null);

(statearr_56196_56218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (10))){
var inst_56174 = (state_56182[(2)]);
var state_56182__$1 = state_56182;
var statearr_56197_56219 = state_56182__$1;
(statearr_56197_56219[(2)] = inst_56174);

(statearr_56197_56219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56183 === (8))){
var inst_56164 = (state_56182[(7)]);
var state_56182__$1 = state_56182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56182__$1,(11),out,inst_56164);
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
});})(c__18924__auto___56209,out))
;
return ((function (switch__18903__auto__,c__18924__auto___56209,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_56201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56201[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_56201[(1)] = (1));

return statearr_56201;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_56182){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56202){if((e56202 instanceof Object)){
var ex__18907__auto__ = e56202;
var statearr_56203_56220 = state_56182;
(statearr_56203_56220[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56221 = state_56182;
state_56182 = G__56221;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_56182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_56182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___56209,out))
})();
var state__18926__auto__ = (function (){var statearr_56204 = f__18925__auto__.call(null);
(statearr_56204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___56209);

return statearr_56204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___56209,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async56229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56229 = (function (map_LT_,f,ch,meta56230){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta56230 = meta56230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56231,meta56230__$1){
var self__ = this;
var _56231__$1 = this;
return (new cljs.core.async.t_cljs$core$async56229(self__.map_LT_,self__.f,self__.ch,meta56230__$1));
});

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56231){
var self__ = this;
var _56231__$1 = this;
return self__.meta56230;
});

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async56232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56232 = (function (map_LT_,f,ch,meta56230,_,fn1,meta56233){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta56230 = meta56230;
this._ = _;
this.fn1 = fn1;
this.meta56233 = meta56233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_56234,meta56233__$1){
var self__ = this;
var _56234__$1 = this;
return (new cljs.core.async.t_cljs$core$async56232(self__.map_LT_,self__.f,self__.ch,self__.meta56230,self__._,self__.fn1,meta56233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async56232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_56234){
var self__ = this;
var _56234__$1 = this;
return self__.meta56233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async56232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async56232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__56222_SHARP_){
return f1.call(null,(((p1__56222_SHARP_ == null))?null:self__.f.call(null,p1__56222_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async56232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56230","meta56230",869684383,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async56229","cljs.core.async/t_cljs$core$async56229",1204820323,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta56233","meta56233",102721234,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async56232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56232";

cljs.core.async.t_cljs$core$async56232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async56232");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async56232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56232(map_LT___$1,f__$1,ch__$1,meta56230__$1,___$2,fn1__$1,meta56233){
return (new cljs.core.async.t_cljs$core$async56232(map_LT___$1,f__$1,ch__$1,meta56230__$1,___$2,fn1__$1,meta56233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async56232(self__.map_LT_,self__.f,self__.ch,self__.meta56230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async56229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async56229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56230","meta56230",869684383,null)], null);
});

cljs.core.async.t_cljs$core$async56229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56229";

cljs.core.async.t_cljs$core$async56229.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async56229");
});

cljs.core.async.__GT_t_cljs$core$async56229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56229(map_LT___$1,f__$1,ch__$1,meta56230){
return (new cljs.core.async.t_cljs$core$async56229(map_LT___$1,f__$1,ch__$1,meta56230));
});

}

return (new cljs.core.async.t_cljs$core$async56229(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async56238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56238 = (function (map_GT_,f,ch,meta56239){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta56239 = meta56239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56240,meta56239__$1){
var self__ = this;
var _56240__$1 = this;
return (new cljs.core.async.t_cljs$core$async56238(self__.map_GT_,self__.f,self__.ch,meta56239__$1));
});

cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56240){
var self__ = this;
var _56240__$1 = this;
return self__.meta56239;
});

cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async56238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async56238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56239","meta56239",1526423399,null)], null);
});

cljs.core.async.t_cljs$core$async56238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56238";

cljs.core.async.t_cljs$core$async56238.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async56238");
});

cljs.core.async.__GT_t_cljs$core$async56238 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async56238(map_GT___$1,f__$1,ch__$1,meta56239){
return (new cljs.core.async.t_cljs$core$async56238(map_GT___$1,f__$1,ch__$1,meta56239));
});

}

return (new cljs.core.async.t_cljs$core$async56238(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async56244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56244 = (function (filter_GT_,p,ch,meta56245){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta56245 = meta56245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56246,meta56245__$1){
var self__ = this;
var _56246__$1 = this;
return (new cljs.core.async.t_cljs$core$async56244(self__.filter_GT_,self__.p,self__.ch,meta56245__$1));
});

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56246){
var self__ = this;
var _56246__$1 = this;
return self__.meta56245;
});

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async56244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async56244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56245","meta56245",-1238173062,null)], null);
});

cljs.core.async.t_cljs$core$async56244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56244";

cljs.core.async.t_cljs$core$async56244.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async56244");
});

cljs.core.async.__GT_t_cljs$core$async56244 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async56244(filter_GT___$1,p__$1,ch__$1,meta56245){
return (new cljs.core.async.t_cljs$core$async56244(filter_GT___$1,p__$1,ch__$1,meta56245));
});

}

return (new cljs.core.async.t_cljs$core$async56244(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args56247 = [];
var len__17884__auto___56291 = arguments.length;
var i__17885__auto___56292 = (0);
while(true){
if((i__17885__auto___56292 < len__17884__auto___56291)){
args56247.push((arguments[i__17885__auto___56292]));

var G__56293 = (i__17885__auto___56292 + (1));
i__17885__auto___56292 = G__56293;
continue;
} else {
}
break;
}

var G__56249 = args56247.length;
switch (G__56249) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56247.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___56295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___56295,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___56295,out){
return (function (state_56270){
var state_val_56271 = (state_56270[(1)]);
if((state_val_56271 === (7))){
var inst_56266 = (state_56270[(2)]);
var state_56270__$1 = state_56270;
var statearr_56272_56296 = state_56270__$1;
(statearr_56272_56296[(2)] = inst_56266);

(statearr_56272_56296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (1))){
var state_56270__$1 = state_56270;
var statearr_56273_56297 = state_56270__$1;
(statearr_56273_56297[(2)] = null);

(statearr_56273_56297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (4))){
var inst_56252 = (state_56270[(7)]);
var inst_56252__$1 = (state_56270[(2)]);
var inst_56253 = (inst_56252__$1 == null);
var state_56270__$1 = (function (){var statearr_56274 = state_56270;
(statearr_56274[(7)] = inst_56252__$1);

return statearr_56274;
})();
if(cljs.core.truth_(inst_56253)){
var statearr_56275_56298 = state_56270__$1;
(statearr_56275_56298[(1)] = (5));

} else {
var statearr_56276_56299 = state_56270__$1;
(statearr_56276_56299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (6))){
var inst_56252 = (state_56270[(7)]);
var inst_56257 = p.call(null,inst_56252);
var state_56270__$1 = state_56270;
if(cljs.core.truth_(inst_56257)){
var statearr_56277_56300 = state_56270__$1;
(statearr_56277_56300[(1)] = (8));

} else {
var statearr_56278_56301 = state_56270__$1;
(statearr_56278_56301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (3))){
var inst_56268 = (state_56270[(2)]);
var state_56270__$1 = state_56270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56270__$1,inst_56268);
} else {
if((state_val_56271 === (2))){
var state_56270__$1 = state_56270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56270__$1,(4),ch);
} else {
if((state_val_56271 === (11))){
var inst_56260 = (state_56270[(2)]);
var state_56270__$1 = state_56270;
var statearr_56279_56302 = state_56270__$1;
(statearr_56279_56302[(2)] = inst_56260);

(statearr_56279_56302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (9))){
var state_56270__$1 = state_56270;
var statearr_56280_56303 = state_56270__$1;
(statearr_56280_56303[(2)] = null);

(statearr_56280_56303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (5))){
var inst_56255 = cljs.core.async.close_BANG_.call(null,out);
var state_56270__$1 = state_56270;
var statearr_56281_56304 = state_56270__$1;
(statearr_56281_56304[(2)] = inst_56255);

(statearr_56281_56304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (10))){
var inst_56263 = (state_56270[(2)]);
var state_56270__$1 = (function (){var statearr_56282 = state_56270;
(statearr_56282[(8)] = inst_56263);

return statearr_56282;
})();
var statearr_56283_56305 = state_56270__$1;
(statearr_56283_56305[(2)] = null);

(statearr_56283_56305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56271 === (8))){
var inst_56252 = (state_56270[(7)]);
var state_56270__$1 = state_56270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56270__$1,(11),out,inst_56252);
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
});})(c__18924__auto___56295,out))
;
return ((function (switch__18903__auto__,c__18924__auto___56295,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_56287 = [null,null,null,null,null,null,null,null,null];
(statearr_56287[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_56287[(1)] = (1));

return statearr_56287;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_56270){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56288){if((e56288 instanceof Object)){
var ex__18907__auto__ = e56288;
var statearr_56289_56306 = state_56270;
(statearr_56289_56306[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56307 = state_56270;
state_56270 = G__56307;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_56270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_56270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___56295,out))
})();
var state__18926__auto__ = (function (){var statearr_56290 = f__18925__auto__.call(null);
(statearr_56290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___56295);

return statearr_56290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___56295,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args56308 = [];
var len__17884__auto___56311 = arguments.length;
var i__17885__auto___56312 = (0);
while(true){
if((i__17885__auto___56312 < len__17884__auto___56311)){
args56308.push((arguments[i__17885__auto___56312]));

var G__56313 = (i__17885__auto___56312 + (1));
i__17885__auto___56312 = G__56313;
continue;
} else {
}
break;
}

var G__56310 = args56308.length;
switch (G__56310) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56308.length)].join('')));

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
return (function (state_56480){
var state_val_56481 = (state_56480[(1)]);
if((state_val_56481 === (7))){
var inst_56476 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
var statearr_56482_56523 = state_56480__$1;
(statearr_56482_56523[(2)] = inst_56476);

(statearr_56482_56523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (20))){
var inst_56446 = (state_56480[(7)]);
var inst_56457 = (state_56480[(2)]);
var inst_56458 = cljs.core.next.call(null,inst_56446);
var inst_56432 = inst_56458;
var inst_56433 = null;
var inst_56434 = (0);
var inst_56435 = (0);
var state_56480__$1 = (function (){var statearr_56483 = state_56480;
(statearr_56483[(8)] = inst_56432);

(statearr_56483[(9)] = inst_56435);

(statearr_56483[(10)] = inst_56433);

(statearr_56483[(11)] = inst_56457);

(statearr_56483[(12)] = inst_56434);

return statearr_56483;
})();
var statearr_56484_56524 = state_56480__$1;
(statearr_56484_56524[(2)] = null);

(statearr_56484_56524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (1))){
var state_56480__$1 = state_56480;
var statearr_56485_56525 = state_56480__$1;
(statearr_56485_56525[(2)] = null);

(statearr_56485_56525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (4))){
var inst_56421 = (state_56480[(13)]);
var inst_56421__$1 = (state_56480[(2)]);
var inst_56422 = (inst_56421__$1 == null);
var state_56480__$1 = (function (){var statearr_56486 = state_56480;
(statearr_56486[(13)] = inst_56421__$1);

return statearr_56486;
})();
if(cljs.core.truth_(inst_56422)){
var statearr_56487_56526 = state_56480__$1;
(statearr_56487_56526[(1)] = (5));

} else {
var statearr_56488_56527 = state_56480__$1;
(statearr_56488_56527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (15))){
var state_56480__$1 = state_56480;
var statearr_56492_56528 = state_56480__$1;
(statearr_56492_56528[(2)] = null);

(statearr_56492_56528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (21))){
var state_56480__$1 = state_56480;
var statearr_56493_56529 = state_56480__$1;
(statearr_56493_56529[(2)] = null);

(statearr_56493_56529[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (13))){
var inst_56432 = (state_56480[(8)]);
var inst_56435 = (state_56480[(9)]);
var inst_56433 = (state_56480[(10)]);
var inst_56434 = (state_56480[(12)]);
var inst_56442 = (state_56480[(2)]);
var inst_56443 = (inst_56435 + (1));
var tmp56489 = inst_56432;
var tmp56490 = inst_56433;
var tmp56491 = inst_56434;
var inst_56432__$1 = tmp56489;
var inst_56433__$1 = tmp56490;
var inst_56434__$1 = tmp56491;
var inst_56435__$1 = inst_56443;
var state_56480__$1 = (function (){var statearr_56494 = state_56480;
(statearr_56494[(8)] = inst_56432__$1);

(statearr_56494[(9)] = inst_56435__$1);

(statearr_56494[(10)] = inst_56433__$1);

(statearr_56494[(14)] = inst_56442);

(statearr_56494[(12)] = inst_56434__$1);

return statearr_56494;
})();
var statearr_56495_56530 = state_56480__$1;
(statearr_56495_56530[(2)] = null);

(statearr_56495_56530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (22))){
var state_56480__$1 = state_56480;
var statearr_56496_56531 = state_56480__$1;
(statearr_56496_56531[(2)] = null);

(statearr_56496_56531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (6))){
var inst_56421 = (state_56480[(13)]);
var inst_56430 = f.call(null,inst_56421);
var inst_56431 = cljs.core.seq.call(null,inst_56430);
var inst_56432 = inst_56431;
var inst_56433 = null;
var inst_56434 = (0);
var inst_56435 = (0);
var state_56480__$1 = (function (){var statearr_56497 = state_56480;
(statearr_56497[(8)] = inst_56432);

(statearr_56497[(9)] = inst_56435);

(statearr_56497[(10)] = inst_56433);

(statearr_56497[(12)] = inst_56434);

return statearr_56497;
})();
var statearr_56498_56532 = state_56480__$1;
(statearr_56498_56532[(2)] = null);

(statearr_56498_56532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (17))){
var inst_56446 = (state_56480[(7)]);
var inst_56450 = cljs.core.chunk_first.call(null,inst_56446);
var inst_56451 = cljs.core.chunk_rest.call(null,inst_56446);
var inst_56452 = cljs.core.count.call(null,inst_56450);
var inst_56432 = inst_56451;
var inst_56433 = inst_56450;
var inst_56434 = inst_56452;
var inst_56435 = (0);
var state_56480__$1 = (function (){var statearr_56499 = state_56480;
(statearr_56499[(8)] = inst_56432);

(statearr_56499[(9)] = inst_56435);

(statearr_56499[(10)] = inst_56433);

(statearr_56499[(12)] = inst_56434);

return statearr_56499;
})();
var statearr_56500_56533 = state_56480__$1;
(statearr_56500_56533[(2)] = null);

(statearr_56500_56533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (3))){
var inst_56478 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56480__$1,inst_56478);
} else {
if((state_val_56481 === (12))){
var inst_56466 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
var statearr_56501_56534 = state_56480__$1;
(statearr_56501_56534[(2)] = inst_56466);

(statearr_56501_56534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (2))){
var state_56480__$1 = state_56480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56480__$1,(4),in$);
} else {
if((state_val_56481 === (23))){
var inst_56474 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
var statearr_56502_56535 = state_56480__$1;
(statearr_56502_56535[(2)] = inst_56474);

(statearr_56502_56535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (19))){
var inst_56461 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
var statearr_56503_56536 = state_56480__$1;
(statearr_56503_56536[(2)] = inst_56461);

(statearr_56503_56536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (11))){
var inst_56432 = (state_56480[(8)]);
var inst_56446 = (state_56480[(7)]);
var inst_56446__$1 = cljs.core.seq.call(null,inst_56432);
var state_56480__$1 = (function (){var statearr_56504 = state_56480;
(statearr_56504[(7)] = inst_56446__$1);

return statearr_56504;
})();
if(inst_56446__$1){
var statearr_56505_56537 = state_56480__$1;
(statearr_56505_56537[(1)] = (14));

} else {
var statearr_56506_56538 = state_56480__$1;
(statearr_56506_56538[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (9))){
var inst_56468 = (state_56480[(2)]);
var inst_56469 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_56480__$1 = (function (){var statearr_56507 = state_56480;
(statearr_56507[(15)] = inst_56468);

return statearr_56507;
})();
if(cljs.core.truth_(inst_56469)){
var statearr_56508_56539 = state_56480__$1;
(statearr_56508_56539[(1)] = (21));

} else {
var statearr_56509_56540 = state_56480__$1;
(statearr_56509_56540[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (5))){
var inst_56424 = cljs.core.async.close_BANG_.call(null,out);
var state_56480__$1 = state_56480;
var statearr_56510_56541 = state_56480__$1;
(statearr_56510_56541[(2)] = inst_56424);

(statearr_56510_56541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (14))){
var inst_56446 = (state_56480[(7)]);
var inst_56448 = cljs.core.chunked_seq_QMARK_.call(null,inst_56446);
var state_56480__$1 = state_56480;
if(inst_56448){
var statearr_56511_56542 = state_56480__$1;
(statearr_56511_56542[(1)] = (17));

} else {
var statearr_56512_56543 = state_56480__$1;
(statearr_56512_56543[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (16))){
var inst_56464 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
var statearr_56513_56544 = state_56480__$1;
(statearr_56513_56544[(2)] = inst_56464);

(statearr_56513_56544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (10))){
var inst_56435 = (state_56480[(9)]);
var inst_56433 = (state_56480[(10)]);
var inst_56440 = cljs.core._nth.call(null,inst_56433,inst_56435);
var state_56480__$1 = state_56480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56480__$1,(13),out,inst_56440);
} else {
if((state_val_56481 === (18))){
var inst_56446 = (state_56480[(7)]);
var inst_56455 = cljs.core.first.call(null,inst_56446);
var state_56480__$1 = state_56480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56480__$1,(20),out,inst_56455);
} else {
if((state_val_56481 === (8))){
var inst_56435 = (state_56480[(9)]);
var inst_56434 = (state_56480[(12)]);
var inst_56437 = (inst_56435 < inst_56434);
var inst_56438 = inst_56437;
var state_56480__$1 = state_56480;
if(cljs.core.truth_(inst_56438)){
var statearr_56514_56545 = state_56480__$1;
(statearr_56514_56545[(1)] = (10));

} else {
var statearr_56515_56546 = state_56480__$1;
(statearr_56515_56546[(1)] = (11));

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
var statearr_56519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56519[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__);

(statearr_56519[(1)] = (1));

return statearr_56519;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____1 = (function (state_56480){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56520){if((e56520 instanceof Object)){
var ex__18907__auto__ = e56520;
var statearr_56521_56547 = state_56480;
(statearr_56521_56547[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56548 = state_56480;
state_56480 = G__56548;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__ = function(state_56480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____1.call(this,state_56480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18904__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_56522 = f__18925__auto__.call(null);
(statearr_56522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_56522;
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
var args56549 = [];
var len__17884__auto___56552 = arguments.length;
var i__17885__auto___56553 = (0);
while(true){
if((i__17885__auto___56553 < len__17884__auto___56552)){
args56549.push((arguments[i__17885__auto___56553]));

var G__56554 = (i__17885__auto___56553 + (1));
i__17885__auto___56553 = G__56554;
continue;
} else {
}
break;
}

var G__56551 = args56549.length;
switch (G__56551) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56549.length)].join('')));

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
var args56556 = [];
var len__17884__auto___56559 = arguments.length;
var i__17885__auto___56560 = (0);
while(true){
if((i__17885__auto___56560 < len__17884__auto___56559)){
args56556.push((arguments[i__17885__auto___56560]));

var G__56561 = (i__17885__auto___56560 + (1));
i__17885__auto___56560 = G__56561;
continue;
} else {
}
break;
}

var G__56558 = args56556.length;
switch (G__56558) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56556.length)].join('')));

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
var args56563 = [];
var len__17884__auto___56614 = arguments.length;
var i__17885__auto___56615 = (0);
while(true){
if((i__17885__auto___56615 < len__17884__auto___56614)){
args56563.push((arguments[i__17885__auto___56615]));

var G__56616 = (i__17885__auto___56615 + (1));
i__17885__auto___56615 = G__56616;
continue;
} else {
}
break;
}

var G__56565 = args56563.length;
switch (G__56565) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56563.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___56618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___56618,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___56618,out){
return (function (state_56589){
var state_val_56590 = (state_56589[(1)]);
if((state_val_56590 === (7))){
var inst_56584 = (state_56589[(2)]);
var state_56589__$1 = state_56589;
var statearr_56591_56619 = state_56589__$1;
(statearr_56591_56619[(2)] = inst_56584);

(statearr_56591_56619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56590 === (1))){
var inst_56566 = null;
var state_56589__$1 = (function (){var statearr_56592 = state_56589;
(statearr_56592[(7)] = inst_56566);

return statearr_56592;
})();
var statearr_56593_56620 = state_56589__$1;
(statearr_56593_56620[(2)] = null);

(statearr_56593_56620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56590 === (4))){
var inst_56569 = (state_56589[(8)]);
var inst_56569__$1 = (state_56589[(2)]);
var inst_56570 = (inst_56569__$1 == null);
var inst_56571 = cljs.core.not.call(null,inst_56570);
var state_56589__$1 = (function (){var statearr_56594 = state_56589;
(statearr_56594[(8)] = inst_56569__$1);

return statearr_56594;
})();
if(inst_56571){
var statearr_56595_56621 = state_56589__$1;
(statearr_56595_56621[(1)] = (5));

} else {
var statearr_56596_56622 = state_56589__$1;
(statearr_56596_56622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56590 === (6))){
var state_56589__$1 = state_56589;
var statearr_56597_56623 = state_56589__$1;
(statearr_56597_56623[(2)] = null);

(statearr_56597_56623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56590 === (3))){
var inst_56586 = (state_56589[(2)]);
var inst_56587 = cljs.core.async.close_BANG_.call(null,out);
var state_56589__$1 = (function (){var statearr_56598 = state_56589;
(statearr_56598[(9)] = inst_56586);

return statearr_56598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56589__$1,inst_56587);
} else {
if((state_val_56590 === (2))){
var state_56589__$1 = state_56589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56589__$1,(4),ch);
} else {
if((state_val_56590 === (11))){
var inst_56569 = (state_56589[(8)]);
var inst_56578 = (state_56589[(2)]);
var inst_56566 = inst_56569;
var state_56589__$1 = (function (){var statearr_56599 = state_56589;
(statearr_56599[(10)] = inst_56578);

(statearr_56599[(7)] = inst_56566);

return statearr_56599;
})();
var statearr_56600_56624 = state_56589__$1;
(statearr_56600_56624[(2)] = null);

(statearr_56600_56624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56590 === (9))){
var inst_56569 = (state_56589[(8)]);
var state_56589__$1 = state_56589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56589__$1,(11),out,inst_56569);
} else {
if((state_val_56590 === (5))){
var inst_56566 = (state_56589[(7)]);
var inst_56569 = (state_56589[(8)]);
var inst_56573 = cljs.core._EQ_.call(null,inst_56569,inst_56566);
var state_56589__$1 = state_56589;
if(inst_56573){
var statearr_56602_56625 = state_56589__$1;
(statearr_56602_56625[(1)] = (8));

} else {
var statearr_56603_56626 = state_56589__$1;
(statearr_56603_56626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56590 === (10))){
var inst_56581 = (state_56589[(2)]);
var state_56589__$1 = state_56589;
var statearr_56604_56627 = state_56589__$1;
(statearr_56604_56627[(2)] = inst_56581);

(statearr_56604_56627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56590 === (8))){
var inst_56566 = (state_56589[(7)]);
var tmp56601 = inst_56566;
var inst_56566__$1 = tmp56601;
var state_56589__$1 = (function (){var statearr_56605 = state_56589;
(statearr_56605[(7)] = inst_56566__$1);

return statearr_56605;
})();
var statearr_56606_56628 = state_56589__$1;
(statearr_56606_56628[(2)] = null);

(statearr_56606_56628[(1)] = (2));


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
});})(c__18924__auto___56618,out))
;
return ((function (switch__18903__auto__,c__18924__auto___56618,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_56610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56610[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_56610[(1)] = (1));

return statearr_56610;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_56589){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56611){if((e56611 instanceof Object)){
var ex__18907__auto__ = e56611;
var statearr_56612_56629 = state_56589;
(statearr_56612_56629[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56630 = state_56589;
state_56589 = G__56630;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_56589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_56589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___56618,out))
})();
var state__18926__auto__ = (function (){var statearr_56613 = f__18925__auto__.call(null);
(statearr_56613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___56618);

return statearr_56613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___56618,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args56631 = [];
var len__17884__auto___56701 = arguments.length;
var i__17885__auto___56702 = (0);
while(true){
if((i__17885__auto___56702 < len__17884__auto___56701)){
args56631.push((arguments[i__17885__auto___56702]));

var G__56703 = (i__17885__auto___56702 + (1));
i__17885__auto___56702 = G__56703;
continue;
} else {
}
break;
}

var G__56633 = args56631.length;
switch (G__56633) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56631.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___56705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___56705,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___56705,out){
return (function (state_56671){
var state_val_56672 = (state_56671[(1)]);
if((state_val_56672 === (7))){
var inst_56667 = (state_56671[(2)]);
var state_56671__$1 = state_56671;
var statearr_56673_56706 = state_56671__$1;
(statearr_56673_56706[(2)] = inst_56667);

(statearr_56673_56706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (1))){
var inst_56634 = (new Array(n));
var inst_56635 = inst_56634;
var inst_56636 = (0);
var state_56671__$1 = (function (){var statearr_56674 = state_56671;
(statearr_56674[(7)] = inst_56635);

(statearr_56674[(8)] = inst_56636);

return statearr_56674;
})();
var statearr_56675_56707 = state_56671__$1;
(statearr_56675_56707[(2)] = null);

(statearr_56675_56707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (4))){
var inst_56639 = (state_56671[(9)]);
var inst_56639__$1 = (state_56671[(2)]);
var inst_56640 = (inst_56639__$1 == null);
var inst_56641 = cljs.core.not.call(null,inst_56640);
var state_56671__$1 = (function (){var statearr_56676 = state_56671;
(statearr_56676[(9)] = inst_56639__$1);

return statearr_56676;
})();
if(inst_56641){
var statearr_56677_56708 = state_56671__$1;
(statearr_56677_56708[(1)] = (5));

} else {
var statearr_56678_56709 = state_56671__$1;
(statearr_56678_56709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (15))){
var inst_56661 = (state_56671[(2)]);
var state_56671__$1 = state_56671;
var statearr_56679_56710 = state_56671__$1;
(statearr_56679_56710[(2)] = inst_56661);

(statearr_56679_56710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (13))){
var state_56671__$1 = state_56671;
var statearr_56680_56711 = state_56671__$1;
(statearr_56680_56711[(2)] = null);

(statearr_56680_56711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (6))){
var inst_56636 = (state_56671[(8)]);
var inst_56657 = (inst_56636 > (0));
var state_56671__$1 = state_56671;
if(cljs.core.truth_(inst_56657)){
var statearr_56681_56712 = state_56671__$1;
(statearr_56681_56712[(1)] = (12));

} else {
var statearr_56682_56713 = state_56671__$1;
(statearr_56682_56713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (3))){
var inst_56669 = (state_56671[(2)]);
var state_56671__$1 = state_56671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56671__$1,inst_56669);
} else {
if((state_val_56672 === (12))){
var inst_56635 = (state_56671[(7)]);
var inst_56659 = cljs.core.vec.call(null,inst_56635);
var state_56671__$1 = state_56671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56671__$1,(15),out,inst_56659);
} else {
if((state_val_56672 === (2))){
var state_56671__$1 = state_56671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56671__$1,(4),ch);
} else {
if((state_val_56672 === (11))){
var inst_56651 = (state_56671[(2)]);
var inst_56652 = (new Array(n));
var inst_56635 = inst_56652;
var inst_56636 = (0);
var state_56671__$1 = (function (){var statearr_56683 = state_56671;
(statearr_56683[(10)] = inst_56651);

(statearr_56683[(7)] = inst_56635);

(statearr_56683[(8)] = inst_56636);

return statearr_56683;
})();
var statearr_56684_56714 = state_56671__$1;
(statearr_56684_56714[(2)] = null);

(statearr_56684_56714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (9))){
var inst_56635 = (state_56671[(7)]);
var inst_56649 = cljs.core.vec.call(null,inst_56635);
var state_56671__$1 = state_56671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56671__$1,(11),out,inst_56649);
} else {
if((state_val_56672 === (5))){
var inst_56639 = (state_56671[(9)]);
var inst_56644 = (state_56671[(11)]);
var inst_56635 = (state_56671[(7)]);
var inst_56636 = (state_56671[(8)]);
var inst_56643 = (inst_56635[inst_56636] = inst_56639);
var inst_56644__$1 = (inst_56636 + (1));
var inst_56645 = (inst_56644__$1 < n);
var state_56671__$1 = (function (){var statearr_56685 = state_56671;
(statearr_56685[(11)] = inst_56644__$1);

(statearr_56685[(12)] = inst_56643);

return statearr_56685;
})();
if(cljs.core.truth_(inst_56645)){
var statearr_56686_56715 = state_56671__$1;
(statearr_56686_56715[(1)] = (8));

} else {
var statearr_56687_56716 = state_56671__$1;
(statearr_56687_56716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (14))){
var inst_56664 = (state_56671[(2)]);
var inst_56665 = cljs.core.async.close_BANG_.call(null,out);
var state_56671__$1 = (function (){var statearr_56689 = state_56671;
(statearr_56689[(13)] = inst_56664);

return statearr_56689;
})();
var statearr_56690_56717 = state_56671__$1;
(statearr_56690_56717[(2)] = inst_56665);

(statearr_56690_56717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (10))){
var inst_56655 = (state_56671[(2)]);
var state_56671__$1 = state_56671;
var statearr_56691_56718 = state_56671__$1;
(statearr_56691_56718[(2)] = inst_56655);

(statearr_56691_56718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56672 === (8))){
var inst_56644 = (state_56671[(11)]);
var inst_56635 = (state_56671[(7)]);
var tmp56688 = inst_56635;
var inst_56635__$1 = tmp56688;
var inst_56636 = inst_56644;
var state_56671__$1 = (function (){var statearr_56692 = state_56671;
(statearr_56692[(7)] = inst_56635__$1);

(statearr_56692[(8)] = inst_56636);

return statearr_56692;
})();
var statearr_56693_56719 = state_56671__$1;
(statearr_56693_56719[(2)] = null);

(statearr_56693_56719[(1)] = (2));


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
});})(c__18924__auto___56705,out))
;
return ((function (switch__18903__auto__,c__18924__auto___56705,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_56697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56697[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_56697[(1)] = (1));

return statearr_56697;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_56671){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56698){if((e56698 instanceof Object)){
var ex__18907__auto__ = e56698;
var statearr_56699_56720 = state_56671;
(statearr_56699_56720[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56721 = state_56671;
state_56671 = G__56721;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_56671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_56671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___56705,out))
})();
var state__18926__auto__ = (function (){var statearr_56700 = f__18925__auto__.call(null);
(statearr_56700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___56705);

return statearr_56700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___56705,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args56722 = [];
var len__17884__auto___56796 = arguments.length;
var i__17885__auto___56797 = (0);
while(true){
if((i__17885__auto___56797 < len__17884__auto___56796)){
args56722.push((arguments[i__17885__auto___56797]));

var G__56798 = (i__17885__auto___56797 + (1));
i__17885__auto___56797 = G__56798;
continue;
} else {
}
break;
}

var G__56724 = args56722.length;
switch (G__56724) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56722.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18924__auto___56800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___56800,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___56800,out){
return (function (state_56766){
var state_val_56767 = (state_56766[(1)]);
if((state_val_56767 === (7))){
var inst_56762 = (state_56766[(2)]);
var state_56766__$1 = state_56766;
var statearr_56768_56801 = state_56766__$1;
(statearr_56768_56801[(2)] = inst_56762);

(statearr_56768_56801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (1))){
var inst_56725 = [];
var inst_56726 = inst_56725;
var inst_56727 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56766__$1 = (function (){var statearr_56769 = state_56766;
(statearr_56769[(7)] = inst_56727);

(statearr_56769[(8)] = inst_56726);

return statearr_56769;
})();
var statearr_56770_56802 = state_56766__$1;
(statearr_56770_56802[(2)] = null);

(statearr_56770_56802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (4))){
var inst_56730 = (state_56766[(9)]);
var inst_56730__$1 = (state_56766[(2)]);
var inst_56731 = (inst_56730__$1 == null);
var inst_56732 = cljs.core.not.call(null,inst_56731);
var state_56766__$1 = (function (){var statearr_56771 = state_56766;
(statearr_56771[(9)] = inst_56730__$1);

return statearr_56771;
})();
if(inst_56732){
var statearr_56772_56803 = state_56766__$1;
(statearr_56772_56803[(1)] = (5));

} else {
var statearr_56773_56804 = state_56766__$1;
(statearr_56773_56804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (15))){
var inst_56756 = (state_56766[(2)]);
var state_56766__$1 = state_56766;
var statearr_56774_56805 = state_56766__$1;
(statearr_56774_56805[(2)] = inst_56756);

(statearr_56774_56805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (13))){
var state_56766__$1 = state_56766;
var statearr_56775_56806 = state_56766__$1;
(statearr_56775_56806[(2)] = null);

(statearr_56775_56806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (6))){
var inst_56726 = (state_56766[(8)]);
var inst_56751 = inst_56726.length;
var inst_56752 = (inst_56751 > (0));
var state_56766__$1 = state_56766;
if(cljs.core.truth_(inst_56752)){
var statearr_56776_56807 = state_56766__$1;
(statearr_56776_56807[(1)] = (12));

} else {
var statearr_56777_56808 = state_56766__$1;
(statearr_56777_56808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (3))){
var inst_56764 = (state_56766[(2)]);
var state_56766__$1 = state_56766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56766__$1,inst_56764);
} else {
if((state_val_56767 === (12))){
var inst_56726 = (state_56766[(8)]);
var inst_56754 = cljs.core.vec.call(null,inst_56726);
var state_56766__$1 = state_56766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56766__$1,(15),out,inst_56754);
} else {
if((state_val_56767 === (2))){
var state_56766__$1 = state_56766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56766__$1,(4),ch);
} else {
if((state_val_56767 === (11))){
var inst_56734 = (state_56766[(10)]);
var inst_56730 = (state_56766[(9)]);
var inst_56744 = (state_56766[(2)]);
var inst_56745 = [];
var inst_56746 = inst_56745.push(inst_56730);
var inst_56726 = inst_56745;
var inst_56727 = inst_56734;
var state_56766__$1 = (function (){var statearr_56778 = state_56766;
(statearr_56778[(7)] = inst_56727);

(statearr_56778[(8)] = inst_56726);

(statearr_56778[(11)] = inst_56744);

(statearr_56778[(12)] = inst_56746);

return statearr_56778;
})();
var statearr_56779_56809 = state_56766__$1;
(statearr_56779_56809[(2)] = null);

(statearr_56779_56809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (9))){
var inst_56726 = (state_56766[(8)]);
var inst_56742 = cljs.core.vec.call(null,inst_56726);
var state_56766__$1 = state_56766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56766__$1,(11),out,inst_56742);
} else {
if((state_val_56767 === (5))){
var inst_56727 = (state_56766[(7)]);
var inst_56734 = (state_56766[(10)]);
var inst_56730 = (state_56766[(9)]);
var inst_56734__$1 = f.call(null,inst_56730);
var inst_56735 = cljs.core._EQ_.call(null,inst_56734__$1,inst_56727);
var inst_56736 = cljs.core.keyword_identical_QMARK_.call(null,inst_56727,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_56737 = (inst_56735) || (inst_56736);
var state_56766__$1 = (function (){var statearr_56780 = state_56766;
(statearr_56780[(10)] = inst_56734__$1);

return statearr_56780;
})();
if(cljs.core.truth_(inst_56737)){
var statearr_56781_56810 = state_56766__$1;
(statearr_56781_56810[(1)] = (8));

} else {
var statearr_56782_56811 = state_56766__$1;
(statearr_56782_56811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (14))){
var inst_56759 = (state_56766[(2)]);
var inst_56760 = cljs.core.async.close_BANG_.call(null,out);
var state_56766__$1 = (function (){var statearr_56784 = state_56766;
(statearr_56784[(13)] = inst_56759);

return statearr_56784;
})();
var statearr_56785_56812 = state_56766__$1;
(statearr_56785_56812[(2)] = inst_56760);

(statearr_56785_56812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (10))){
var inst_56749 = (state_56766[(2)]);
var state_56766__$1 = state_56766;
var statearr_56786_56813 = state_56766__$1;
(statearr_56786_56813[(2)] = inst_56749);

(statearr_56786_56813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56767 === (8))){
var inst_56734 = (state_56766[(10)]);
var inst_56726 = (state_56766[(8)]);
var inst_56730 = (state_56766[(9)]);
var inst_56739 = inst_56726.push(inst_56730);
var tmp56783 = inst_56726;
var inst_56726__$1 = tmp56783;
var inst_56727 = inst_56734;
var state_56766__$1 = (function (){var statearr_56787 = state_56766;
(statearr_56787[(7)] = inst_56727);

(statearr_56787[(8)] = inst_56726__$1);

(statearr_56787[(14)] = inst_56739);

return statearr_56787;
})();
var statearr_56788_56814 = state_56766__$1;
(statearr_56788_56814[(2)] = null);

(statearr_56788_56814[(1)] = (2));


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
});})(c__18924__auto___56800,out))
;
return ((function (switch__18903__auto__,c__18924__auto___56800,out){
return (function() {
var cljs$core$async$state_machine__18904__auto__ = null;
var cljs$core$async$state_machine__18904__auto____0 = (function (){
var statearr_56792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56792[(0)] = cljs$core$async$state_machine__18904__auto__);

(statearr_56792[(1)] = (1));

return statearr_56792;
});
var cljs$core$async$state_machine__18904__auto____1 = (function (state_56766){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_56766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e56793){if((e56793 instanceof Object)){
var ex__18907__auto__ = e56793;
var statearr_56794_56815 = state_56766;
(statearr_56794_56815[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56816 = state_56766;
state_56766 = G__56816;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
cljs$core$async$state_machine__18904__auto__ = function(state_56766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18904__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18904__auto____1.call(this,state_56766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18904__auto____0;
cljs$core$async$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18904__auto____1;
return cljs$core$async$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___56800,out))
})();
var state__18926__auto__ = (function (){var statearr_56795 = f__18925__auto__.call(null);
(statearr_56795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___56800);

return statearr_56795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___56800,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453728830934