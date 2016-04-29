/*!
 * @author electricessence / https://github.com/electricessence/
 * Original: http://linqjs.codeplex.com/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};define(["require","exports","../System/Compare","../System/Collections/Array/Compare","../System/Collections/Array/Utility","../System/Collections/Enumeration/Enumerator","../System/Types","../System/Integer","../System/Functions","../System/Collections/Enumeration/ArrayEnumerator","../System/Collections/Enumeration/EnumeratorBase","../System/Collections/Dictionaries/Dictionary","../System/Collections/Queue","../System/Disposable/dispose","../System/Disposable/DisposableBase","../System/Collections/Enumeration/UnsupportedEnumerableException","../System/Disposable/ObjectDisposedException","../System/Collections/Sorting/KeySortedContext","../System/Exceptions/ArgumentNullException","../System/Exceptions/ArgumentOutOfRangeException"],function(t,e,n,r,o,i,u,s,f,c,a,l,p,d,y,h,v,w,m,g){"use strict";function E(){return i.empty}function N(t,e){void 0===e&&(e=null);var n=new w["default"](e,t.keySelector,t.order,t.comparer);return t.parent?N(t.parent,n):n}function _(t,e){if(void 0===e&&(e="Enumerable"),t)throw new v["default"](e)}var x={},I=void 0,D=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e.prototype.Greater=function(t,e){return t>e?t:e},e.prototype.Lesser=function(t,e){return e>t?t:e},e}(f["default"]),b=new D;Object.freeze(b);var R=function(t){function e(e,n){t.call(this,n),this._enumeratorFactory=e,this._isEndless=!0}return __extends(e,t),Object.defineProperty(e.prototype,"isEndless",{get:function(){return this._isEndless},enumerable:!0,configurable:!0}),e.prototype.getEnumerator=function(){return this.throwIfDisposed(),this._enumeratorFactory()},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._enumeratorFactory=null},e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(function(){return t.getEnumerator()})},e.prototype.doAction=function(t,e,n){void 0===n&&(n=this.isEndless);var r=this,o=!r.throwIfDisposed();return new k(function(){var i,u=0;return new a["default"](function(){_(o),e&&e(),u=0,i=r.getEnumerator()},function(e){for(_(o);i.moveNext();){var n=t(i.current,u++);if(n===!1||0===n)return e.yieldBreak();if(2!==n)return e.yieldReturn(i.current)}return!1},function(){d.dispose(i)},n)},function(){o=!0},n)},e.prototype.force=function(t){void 0===t&&(t=0),this.throwIfDisposed(),this.doAction(function(e){return t})},e.prototype.skip=function(t){var e=this;return e.throwIfDisposed(),isFinite(t)?(s["default"].assert(t,"count"),this.doAction(function(e,n){return t>n?2:1})):k.empty()},e.prototype.take=function(t){if(!(t>0))return k.empty();var e=this;if(e.throwIfDisposed(),!isFinite(t))throw new g["default"]("count",t,"Must be finite.");return s["default"].assert(t,"count"),e.doAction(function(e,n){return t>n},null,!1)},e.prototype.elementAt=function(t){var e=this.elementAtOrDefault(t,x);if(e===x)throw new Error("index is greater than or equal to the number of elements in source.");return e},e.prototype.elementAtOrDefault=function(t,e){void 0===e&&(e=null);var n=this;if(n.throwIfDisposed(),isNaN(t)||0>t||!isFinite(t))throw new Error("'index' is invalid or out of bounds.");s["default"].assert(t,"index");var r=t;return d.using(this.getEnumerator(),function(t){for(var n=0;t.moveNext();){if(n==r)return t.current;n++}return e})},e.prototype.first=function(){var t=this.firstOrDefault(x);if(t===x)throw new Error("first:The sequence is empty.");return t},e.prototype.firstOrDefault=function(t){void 0===t&&(t=null);var e=this;return e.throwIfDisposed(),d.using(this.getEnumerator(),function(e){return e.moveNext()?e.current:t})},e.prototype.single=function(){var t=this;return t.throwIfDisposed(),d.using(this.getEnumerator(),function(t){if(t.moveNext()){var e=t.current;if(!t.moveNext())return e;throw new Error("single:sequence contains more than one element.")}throw new Error("single:The sequence is empty.")})},e.prototype.singleOrDefault=function(t){void 0===t&&(t=null);var e=this;return e.throwIfDisposed(),d.using(this.getEnumerator(),function(e){if(e.moveNext()){var n=e.current;if(!e.moveNext())return n}return t})},e.prototype.any=function(){var t=this;return t.throwIfDisposed(),d.using(this.getEnumerator(),function(t){return t.moveNext()})},e.prototype.traverseBreadthFirst=function(t,e){var n=this,r=n._isEndless||null;return new k(function(){var o,i,u,s=0;return new a["default"](function(){s=0,i=[],u=0,o=n.getEnumerator()},function(n){for(;;){if(o.moveNext())return i[u++]=o.current,n.yieldReturn(e(o.current,s));if(!u)return n.yieldBreak();var r=k.from(i).selectMany(t);if(!r.any())return n.yieldBreak();s++,i=[],u=0,o.dispose(),o=r.getEnumerator()}},function(){d.dispose(o),i.length=0},r)},null,r)},e.prototype.traverseDepthFirst=function(t,e){var n=this,r=n._isEndless||null;return new k(function(){var o,i,u=[];return new a["default"](function(){o=n.getEnumerator(),i=0},function(n){for(;;){if(o.moveNext()){var r=e(o.current,i);return u[i++]=o,o=t(o.current).getEnumerator(),n.yieldReturn(r)}if(0==i)return!1;o.dispose(),o=u[--i],u.length=i}},function(){try{d.dispose(o)}finally{d.dispose.these(u)}},r)},null,r)},e.prototype.flatten=function(){var t=this,e=t._isEndless||null;return new k(function(){var n,r=null;return new a["default"](function(){n=t.getEnumerator()},function(t){for(;;){if(null!=r){if(r.moveNext())return t.yieldReturn(r.current);r=null}if(n.moveNext()){var e=n.current;if(Array.isArray(e)){r.dispose(),r=k.from(e).selectMany(b.Identity).flatten().getEnumerator();continue}return t.yieldReturn(n.current)}return!1}},function(){d.dispose(n,r)},e)},null,e)},e.prototype.pairwise=function(t){var e=this;return new k(function(){var n;return new a["default"](function(){n=e.getEnumerator(),n.moveNext()},function(e){var r=n.current;return n.moveNext()&&e.yieldReturn(t(r,n.current))},function(){d.dispose(n)},e._isEndless)},null,e._isEndless)},e.prototype.scan=function(t,e){var n=e!==I,r=this;return new k(function(){var o,i,u;return new a["default"](function(){o=r.getEnumerator(),u=!0},function(r){return u?(u=!1,n?r.yieldReturn(i=e):o.moveNext()&&r.yieldReturn(i=o.current)):o.moveNext()?r.yieldReturn(i=t(i,o.current)):!1},function(){d.dispose(o)},r._isEndless)},null,r._isEndless)},e.prototype.select=function(t){var e=this,n=!e.throwIfDisposed();return t.length<2?new M(e,null,t):new k(function(){var r,o=0;return new a["default"](function(){_(n),o=0,r=e.getEnumerator()},function(e){return _(n),r.moveNext()?e.yieldReturn(t(r.current,o++)):!1},function(){d.dispose(r)},e._isEndless)},function(){n=!0},e._isEndless)},e.prototype._selectMany=function(t,e){var n=this,r=n._isEndless||null;return e||(e=function(t,e){return e}),new k(function(){var o,u,s=0;return new a["default"](function(){o=n.getEnumerator(),u=void 0,s=0},function(n){if(u===I&&!o.moveNext())return!1;do{if(!u){var r=t(o.current,s++);if(!r)continue;u=i.from(r)}if(u.moveNext())return n.yieldReturn(e(o.current,u.current));u.dispose(),u=null}while(o.moveNext());return!1},function(){d.dispose(o,u),o=null,u=null},r)},null,r)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype._choose=function(t){void 0===t&&(t=b.Identity);var e=this,n=!e.throwIfDisposed();return new k(function(){var r,o=0;return new a["default"](function(){_(n),o=0,r=e.getEnumerator()},function(e){for(_(n);r.moveNext();){var i=t(r.current,o++);if(null!==i&&i!==I)return e.yieldReturn(i)}return!1},function(){d.dispose(r)},e._isEndless)},function(){n=!0},e._isEndless)},e.prototype.choose=function(t){return void 0===t&&(t=b.Identity),this._choose(t)},e.prototype.where=function(t){var e=this,n=!e.throwIfDisposed();return t.length<2?new F(e,t):new k(function(){var r,o=0;return new a["default"](function(){_(n),o=0,r=e.getEnumerator()},function(e){for(_(n);r.moveNext();)if(t(r.current,o++))return e.yieldReturn(r.current);return!1},function(){d.dispose(r)},e._isEndless)},function(){n=!0},e._isEndless)},e.prototype.ofType=function(t){var e;switch(t){case Number:e=u["default"].NUMBER;break;case String:e=u["default"].STRING;break;case Boolean:e=u["default"].BOOLEAN;break;case Function:e=u["default"].FUNCTION;break;default:return this.where(function(e){return e instanceof t})}return this.where(function(t){return typeof t===e})},e.prototype.except=function(t,e){var n=this,r=!n.throwIfDisposed();return new k(function(){var o,u;return new a["default"](function(){_(r),o=n.getEnumerator(),u=new l["default"](e),t&&i.forEach(t,function(t){return u.addByKeyValue(t,!0)})},function(t){for(_(r);o.moveNext();){var e=o.current;if(!u.containsKey(e))return u.addByKeyValue(e,!0),t.yieldReturn(e)}return!1},function(){d.dispose(o),u.clear()},n._isEndless)},function(){r=!0},n._isEndless)},e.prototype.distinct=function(t){return this.except(null,t)},e.prototype.distinctUntilChanged=function(t){var e=this,n=!e.throwIfDisposed();return new k(function(){var r,o,i=!0;return new a["default"](function(){_(n),r=e.getEnumerator()},function(e){for(_(n);r.moveNext();){var u=t(r.current);if(i)i=!1;else if(o===u)continue;return o=u,e.yieldReturn(r.current)}return!1},function(){d.dispose(r)},e._isEndless)},function(){n=!0},e._isEndless)},e.prototype.defaultIfEmpty=function(t){void 0===t&&(t=null);var e=this,n=!e.throwIfDisposed();return new k(function(){var r,o;return new a["default"](function(){o=!0,_(n),r=e.getEnumerator()},function(e){return _(n),r.moveNext()?(o=!1,e.yieldReturn(r.current)):o?(o=!1,e.yieldReturn(t)):!1},function(){d.dispose(r)},e._isEndless)},null,e._isEndless)},e.prototype.zip=function(t,e){var n=this;return new k(function(){var r,o,u=0;return new a["default"](function(){u=0,r=n.getEnumerator(),o=i.from(t)},function(t){return r.moveNext()&&o.moveNext()&&t.yieldReturn(e(r.current,o.current,u++))},function(){d.dispose(r,o)})})},e.prototype.zipMultiple=function(t,e){var n=this;return n.throwIfDisposed(),t.length?new k(function(){var r,o,u,s=0;return new a["default"](function(){r=new p["default"](t),s=0,o=n.getEnumerator(),u=null},function(t){if(o.moveNext())for(;;){for(;!u;){if(!r.count)return t.yieldBreak();var n=r.dequeue();n&&(u=i.from(n))}if(u.moveNext())return t.yieldReturn(e(o.current,u.current,s++));u.dispose(),u=null}return t.yieldBreak()},function(){d.dispose(o,r)})}):k.empty()},e.prototype.join=function(t,e,n,r,o){void 0===o&&(o=b.Identity);var i=this;return new k(function(){var u,s,f=null,c=0;return new a["default"](function(){u=i.getEnumerator(),s=k.from(t).toLookup(n,b.Identity,o)},function(t){for(;;){if(null!=f){var n=f[c++];if(n!==I)return t.yieldReturn(r(u.current,n));n=null,c=0}if(!u.moveNext())return t.yieldBreak();var o=e(u.current);f=s.get(o)}},function(){d.dispose(u)})})},e.prototype.groupJoin=function(t,e,n,r,o){void 0===o&&(o=b.Identity);var i=this;return new k(function(){var u,s=null;return new a["default"](function(){u=i.getEnumerator(),s=k.from(t).toLookup(n,b.Identity,o)},function(t){return u.moveNext()&&t.yieldReturn(r(u.current,s.get(e(u.current))))},function(){d.dispose(u)})})},e.prototype.concatWith=function(t){var e=this,n=e._isEndless||null;return new k(function(){var r,o;return new a["default"](function(){r=e.getEnumerator()},function(e){if(null!=r){if(r.moveNext())return e.yieldReturn(r.current);o=i.from(t),r.dispose(),r=null}return o.moveNext()?e.yieldReturn(o.current):!1},function(){d.dispose(r,o)},n)},null,n)},e.prototype.merge=function(t){var e=this;return new k(function(){var n,r;return new a["default"](function(){n=e.getEnumerator(),r=new p["default"](t)},function(t){for(;;){for(;!n&&r.count;)n=i.from(r.dequeue());if(n&&n.moveNext())return t.yieldReturn(n.current);{if(!n)return t.yieldBreak();n.dispose(),n=null}}},function(){d.dispose(n,r)})})},e.prototype.concat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];var n=this;return 0==t.length?n:1==t.length?n.concatWith(t[0]):n.merge(t)},e.prototype.union=function(t,e){void 0===e&&(e=b.Identity);var n=this,r=n._isEndless||null;return new k(function(){var o,u,s;return new a["default"](function(){o=n.getEnumerator(),s=new l["default"](e)},function(e){var n;if(u===I){for(;o.moveNext();)if(n=o.current,!s.containsKey(n))return s.addByKeyValue(n,null),e.yieldReturn(n);u=i.from(t)}for(;u.moveNext();)if(n=u.current,!s.containsKey(n))return s.addByKeyValue(n,null),e.yieldReturn(n);return!1},function(){d.dispose(o,u)},r)},null,r)},e.prototype.insertAt=function(t,e){if(isNaN(t)||0>t||!isFinite(t))throw new Error("'index' is invalid or out of bounds.");s["default"].assert(t,"index");var n=t,r=this,o=r._isEndless||null;return r.throwIfDisposed(),new k(function(){var t,u,s=0,f=!1;return new a["default"](function(){s=0,t=r.getEnumerator(),u=i.from(e),f=!1},function(e){return s==n&&(f=!0,u.moveNext())?e.yieldReturn(u.current):t.moveNext()?(s++,e.yieldReturn(t.current)):!f&&u.moveNext()&&e.yieldReturn(u.current)},function(){d.dispose(t,u)},o)},null,o)},e.prototype.alternateMultiple=function(t){var e=this;return new k(function(){var n,r,o,i;return new a["default"](function(){i=new c["default"](k.toArray(t)),o=e.getEnumerator();var u=o.moveNext();r=u?1:0,u&&(n=o.current)},function(t){switch(r){case 0:return t.yieldBreak();case 2:if(i.moveNext())return t.yieldReturn(i.current);i.reset(),r=1}var e=n,u=o.moveNext();return r=u?2:0,u&&(n=o.current),t.yieldReturn(e)},function(){d.dispose(o,i)},e._isEndless)},null,e._isEndless)},e.prototype.alternateSingle=function(t){return this.alternateMultiple(k.make(t))},e.prototype.alternate=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return this.alternateMultiple(t)},e}(y["default"]);e.InfiniteEnumerable=R;var k=function(t){function e(e,n,r){void 0===r&&(r=null),t.call(this,e,n),this._isEndless=r}return __extends(e,t),e.from=function(t){if(u["default"].isObject(t)||u["default"].isString(t)){if(t instanceof e)return t;if(u["default"].isArrayLike(t))return new S(t);if(i.isEnumerable(t))return new e(function(){return t.getEnumerator()},null,t.isEndless)}throw new h["default"]},e.toArray=function(t){return t instanceof e?t.toArray():i.toArray(t)},e.choice=function(t){var e=t&&t.length;if(!e||!isFinite(e))throw new g["default"]("length",length);return new R(function(){return new a["default"](null,function(e){return e.yieldReturn(s["default"].random.select(t))},!0)})},e.chooseFrom=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];return e.choice(t)},e.cycle=function(t){var e=t&&t.length;if(!e||!isFinite(e))throw new g["default"]("length",length);return new R(function(){var e=0;return new a["default"](function(){e=0},function(n){return e>=t.length&&(e=0),n.yieldReturn(t[e++])},!0)})},e.cycleThrough=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];return e.cycle(t)},e.empty=function(){return new A(E)},e.repeat=function(t,n){return void 0===n&&(n=1/0),n>0?isFinite(n)&&s["default"].assert(n,"count")?new A(function(){var e=n,r=0;return new a["default"](function(){r=0},function(n){return r++<e&&n.yieldReturn(t)},null,!1)}):new e(function(){return new a["default"](null,function(e){return e.yieldReturn(t)},!0)}):e.empty()},e.repeatWithFinalize=function(t,e){return new R(function(){var n;return new a["default"](function(){n=t()},function(t){return t.yieldReturn(n)},function(){e(n)},!0)})},e.make=function(t){return e.repeat(t,1)},e.range=function(t,n,r){if(void 0===r&&(r=1),!isFinite(t))throw new g["default"]("start",t,"Must be a finite number.");if(!(n>0))return e.empty();if(!r)throw new g["default"]("step",r,"Must be a valid value");if(!isFinite(r))throw new g["default"]("step",r,"Must be a finite number.");return s["default"].assert(n,"count"),new A(function(){var e,o=n,i=0;return new a["default"](function(){i=0,e=t},function(t){var u=i++<o&&t.yieldReturn(e);return u&&n>i&&(e+=r),u},!1)})},e.rangeDown=function(t,n,r){return void 0===r&&(r=1),r=-1*Math.abs(r),e.range(t,n,r)},e.toInfinity=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=1),!isFinite(t))throw new g["default"]("start",t,"Must be a finite number.");if(!e)throw new g["default"]("step",e,"Must be a valid value");if(!isFinite(e))throw new g["default"]("step",e,"Must be a finite number.");return new R(function(){var n;return new a["default"](function(){n=t},function(t){var r=n;return n+=e,t.yieldReturn(r)},!0)})},e.toNegativeInfinity=function(t,n){return void 0===t&&(t=0),void 0===n&&(n=1),e.toInfinity(t,-n)},e.rangeTo=function(t,e,n){if(void 0===n&&(n=1),isNaN(e)||!isFinite(e))throw new g["default"]("to",e,"Must be a finite number.");if(n&&!isFinite(n))throw new g["default"]("step",n,"Must be a finite non-zero number.");return n=Math.abs(n),new A(function(){var r;return new a["default"](function(){r=t},e>t?function(t){var o=e>=r&&t.yieldReturn(r);return o&&(r+=n),o}:function(t){var o=r>=e&&t.yieldReturn(r);return o&&(r-=n),o},!1)})},e.matches=function(t,e,n){void 0===n&&(n="");var r=typeof t;if(r!=u["default"].STRING)throw new Error("Cannot exec RegExp matches of type '"+r+"'.");return e instanceof RegExp&&(n+=e.ignoreCase?"i":"",n+=e.multiline?"m":"",e=e.source),-1===n.indexOf("g")&&(n+="g"),new A(function(){var r;return new a["default"](function(){r=new RegExp(e,n)},function(e){var n=r.exec(t);return null!==n?e.yieldReturn(n):!1})})},e.generate=function(t,n){return void 0===n&&(n=1/0),isNaN(n)||0>=n?e.empty():isFinite(n)&&s["default"].assert(n,"count")?new A(function(){var e=n,r=0;return new a["default"](function(){r=0},function(n){var o=r++;return e>o&&n.yieldReturn(t(o))},!1)}):new R(function(){var e=0;return new a["default"](function(){e=0},function(n){return n.yieldReturn(t(e++))},!0)})},e.unfold=function(t,e,n){return void 0===n&&(n=!1),new R(function(){var r,o,i=0;return new a["default"](function(){i=0,r=t,o=!n},function(t){var n=i++;return o?o=!1:r=e(r,n),t.yieldReturn(r)},!0)})},e.forEach=function(t,e){i.forEach(t,e)},e.map=function(t,e){return i.map(t,e)},e.max=function(t){return t.takeUntil(function(t){return t==+(1/0)},!0).aggregate(b.Greater)},e.min=function(t){return t.takeUntil(function(t){return t==-(1/0)},!0).aggregate(b.Lesser)},e.prototype.doAction=function(e,n,r){return void 0===r&&(r=this.isEndless),t.prototype.doAction.call(this,e,n,r)},e.prototype.skip=function(e){return t.prototype.skip.call(this,e)},e.prototype.skipWhile=function(t){return this.throwIfDisposed(),this.doAction(function(e,n){return t(e,n)?2:1})},e.prototype.takeWhile=function(t){if(this.throwIfDisposed(),!t)throw new m["default"]("predicate");return this.doAction(function(e,n){return t(e,n)?1:0},null,null)},e.prototype.takeUntil=function(t,e){if(this.throwIfDisposed(),!t)throw new m["default"]("predicate");if(!e)return this.doAction(function(e,n){return t(e,n)?0:1},null,null);var n=!1;return this.doAction(function(e,r){return n?0:(n=t(e,r),1)},function(){n=!1},null)},e.prototype.forEach=function(t){var e=this;e.throwIfDisposed(),i.throwIfEndless(e.isEndless);var n=0;d.using(e.getEnumerator(),function(r){for(i.throwIfEndless(r.isEndless);e.throwIfDisposed()&&r.moveNext()&&t(r.current,n++)!==!1;);})},e.prototype.toArray=function(t){return t?this.where(t).toArray():this.copyTo([])},e.prototype.copyTo=function(t,e){if(void 0===e&&(e=0),this.throwIfDisposed(),!t)throw new m["default"]("target");if(s["default"].assert(e),0>e)throw new g["default"]("index",e,"Must be zero or greater");return i.forEach(this,function(n,r){t[r+e]=n}),t},e.prototype.toLookup=function(t,e,n){void 0===e&&(e=b.Identity),void 0===n&&(n=b.Identity);var r=new l["default"](n);return this.forEach(function(n){var o=t(n),i=e(n),u=r.getValue(o);u!==I?u.push(i):r.addByKeyValue(o,[i])}),new B(r)},e.prototype.toMap=function(t,e){var n={};return this.forEach(function(r){n[t(r)]=e(r)}),n},e.prototype.toDictionary=function(t,e,n){void 0===n&&(n=b.Identity);var r=new l["default"](n);return this.forEach(function(n){return r.addByKeyValue(t(n),e(n))}),r},e.prototype.toJoinedString=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=b.Identity),this.select(e).toArray().join(t)},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var n=this;if(!(t>0))return n;if(!isFinite(t))return e.empty();s["default"].assert(t,"count");var r=t;return new e(function(){var t,e;return new a["default"](function(){t=n.getEnumerator(),e=new p["default"]},function(n){for(;t.moveNext();)if(e.enqueue(t.current),e.count>r)return n.yieldReturn(e.dequeue());return!1},function(){d.dispose(t,e)})})},e.prototype.skipToLast=function(t){if(!(t>0))return e.empty();var n=this;return isFinite(t)?(s["default"].assert(t,"count"),n.reverse().take(t).reverse()):n},e.prototype.where=function(e){return t.prototype.where.call(this,e)},e.prototype.select=function(e){return t.prototype.select.call(this,e)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype.choose=function(t){return void 0===t&&(t=b.Identity),this._choose(t)},e.prototype.reverse=function(){var t=this,n=!t.throwIfDisposed();return i.throwIfEndless(t._isEndless),new e(function(){var e,r=0;return new a["default"](function(){_(n),e=t.toArray(),r=e.length},function(t){return r&&t.yieldReturn(e[--r])},function(){e.length=0})},function(){n=!0})},e.prototype.shuffle=function(){var t=this,n=!t.throwIfDisposed();return i.throwIfEndless(t._isEndless),new e(function(){var e,r,o;return new a["default"](function(){_(n),e=t.toArray(),r=o=e.length},function(t){if(!o)return t.yieldBreak();var n=s["default"].random(o),r=e[n];return e[n]=e[--o],e[o]=null,o%32==0&&(e.length=o),t.yieldReturn(r)},function(){e.length=0})},function(){n=!0})},e.prototype.count=function(t){var e=0;return this.forEach(t?function(n,r){t(n,r)&&++e}:function(){++e}),e},e.prototype.all=function(t){if(!t)throw new m["default"]("predicate");var e=!0;return this.forEach(function(n){return t(n)?void 0:(e=!1,!1)}),e},e.prototype.every=function(t){return this.all(t)},e.prototype.any=function(e){if(!e)return t.prototype.any.call(this);var n=!1;return this.forEach(function(t){return n=e(t),!n}),n},e.prototype.some=function(t){return this.any(t)},e.prototype.isEmpty=function(){return!this.any()},e.prototype.contains=function(t,e){return e?this.any(function(n){return e(n)===e(t)}):this.any(function(e){return e===t})},e.prototype.indexOf=function(t,e){var r=-1;return this.forEach(e?function(o,i){return n.areEqual(e(o),e(t),!0)?(r=i,!1):void 0}:function(e,o){return n.areEqual(e,t,!0)?(r=o,!1):void 0}),r},e.prototype.lastIndexOf=function(t,e){var r=-1;return this.forEach(e?function(o,i){n.areEqual(e(o),e(t),!0)&&(r=i)}:function(e,o){n.areEqual(e,t,!0)&&(r=o)}),r},e.prototype.concatWith=function(e){return t.prototype.concatWith.call(this,e)},e.prototype.merge=function(e){return t.prototype.merge.call(this,e)},e.prototype.concat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return 0==t.length?this:1==t.length?this.concatWith(t[0]):this.merge(t)},e.prototype.intersect=function(t,n){var r=this;return new e(function(){var e,o,u;return new a["default"](function(){e=r.getEnumerator(),o=new l["default"](n),u=new l["default"](n),i.forEach(t,function(t){o.addByKeyValue(t,!0)})},function(t){for(;e.moveNext();){var n=e.current;if(!u.containsKey(n)&&o.containsKey(n))return u.addByKeyValue(n,!0),t.yieldReturn(n)}return t.yieldBreak()},function(){d.dispose(e,o,u)},r._isEndless)},null,r._isEndless)},e.prototype.sequenceEqual=function(t,e){return void 0===e&&(e=n.areEqual),d.using(this.getEnumerator(),function(n){return d.using(i.from(t),function(t){for(i.throwIfEndless(n.isEndless&&t.isEndless);n.moveNext();)if(!t.moveNext()||!e(n.current,t.current))return!1;return!t.moveNext()})})},e.prototype.ofType=function(e){return t.prototype.ofType.call(this,e)},e.prototype.except=function(e,n){return t.prototype.except.call(this,e,n)},e.prototype.distinct=function(e){return t.prototype.distinct.call(this,e)},e.prototype.distinctUntilChanged=function(e){return t.prototype.distinctUntilChanged.call(this,e)},e.prototype.orderBy=function(t){return void 0===t&&(t=b.Identity),new q(this,t,1)},e.prototype.orderUsing=function(t){return new q(this,null,1,null,t)},e.prototype.orderUsingReversed=function(t){return new q(this,null,-1,null,t)},e.prototype.orderByDescending=function(t){return void 0===t&&(t=b.Identity),new q(this,t,-1)},e.prototype.groupBy=function(t,n,r){var o=this;return void 0===n&&(n=b.Identity),n||(n=b.Identity),new e(function(){return o.toLookup(t,n,r).getEnumerator()})},e.prototype.partitionBy=function(t,n,r,o){void 0===r&&(r=function(t,e){return new O(t,e)}),void 0===o&&(o=b.Identity);var i=this;return n||(n=b.Identity),new e(function(){var e,u,s,f,c;return new a["default"](function(){e=i.getEnumerator(),e.moveNext()?(u=t(e.current),s=o(u),f=[n(e.current)],c=1):f=null},function(i){if(!f)return i.yieldBreak();for(var a,l;(a=e.moveNext())&&(l=e.current,s===o(t(l)));)f[c++]=n(l);var p=r(u,f);return a?(l=e.current,u=t(l),s=o(u),f=[n(l)],c=1):f=null,i.yieldReturn(p)},function(){d.dispose(e),f=null})})},e.prototype.buffer=function(t){if(1>t||!isFinite(t))throw new Error("Invalid buffer size.");s["default"].assert(t,"size");var n,r=this;return new e(function(){var e;return new a["default"](function(){e=r.getEnumerator()},function(r){var i=o.initialize(t);for(n=0;t>n&&e.moveNext();)i[n++]=e.current;return i.length=n,n&&r.yieldReturn(i)},function(){d.dispose(e)},r._isEndless)},null,r._isEndless)},e.prototype.aggregate=function(t,e){return this.scan(t,e).lastOrDefault()},e.prototype.average=function(t){void 0===t&&(t=u["default"].numberOrNaN);var e=0,n=0,r=0;return this.forEach(function(o){var i=t(o);return isNaN(i)?(e=NaN,!1):(isFinite(i)?e+=i:n+=i>0?1:-1,void++r)}),n?n*(1/0):isNaN(e)||!r?NaN:e/r},e.prototype.max=function(){return this.aggregate(b.Greater)},e.prototype.min=function(){return this.aggregate(b.Lesser)},e.prototype.maxBy=function(t){return void 0===t&&(t=b.Identity),this.aggregate(function(e,n){return t(e)>t(n)?e:n})},e.prototype.minBy=function(t){return void 0===t&&(t=b.Identity),this.aggregate(function(e,n){return t(e)<t(n)?e:n})},e.prototype.sum=function(t){void 0===t&&(t=u["default"].numberOrNaN);var e=0,n=0;return this.forEach(function(r){var o=t(r);return isNaN(o)?(e=NaN,!1):void(isFinite(o)?e+=o:n+=o>0?1:-1)}),isNaN(e)?NaN:n?n*(1/0):e},e.prototype.product=function(t){void 0===t&&(t=u["default"].numberOrNaN);var e=1,n=!1;return this.forEach(function(r){n=!0;var o=t(r);return isNaN(o)?(e=NaN,!1):0==o?(e=0,!1):void(e*=o)}),n&&isNaN(e)?NaN:e},e.prototype.quotient=function(t){void 0===t&&(t=u["default"].numberOrNaN);var e=0,n=NaN;return this.forEach(function(r){var o=t(r);if(e++,1===e)n=o;else{if(isNaN(o)||0===o||!isFinite(o))return n=NaN,!1;n/=o}}),1===e&&(n=NaN),n},e.prototype.last=function(){var t=this;t.throwIfDisposed();var e=void 0,n=!1;if(t.forEach(function(t){n=!0,e=t}),!n)throw new Error("last:No element satisfies the condition.");return e},e.prototype.lastOrDefault=function(t){void 0===t&&(t=null);var e=this;e.throwIfDisposed();var n=void 0,r=!1;return e.forEach(function(t){r=!0,n=t}),r?n:t},e.prototype.share=function(){var t=this;t.throwIfDisposed();var n;return new e(function(){return new a["default"](function(){n||(n=t.getEnumerator())},function(t){return n.moveNext()&&t.yieldReturn(n.current)})},function(){d.dispose(n)})},e.prototype.memoize=function(){var t,n,r=this,o=!r.throwIfDisposed();return new e(function(){var e=0;return new a["default"](function(){_(o),n||(n=r.getEnumerator()),t||(t=[]),e=0},function(r){_(o);var i=e++;return i>=t.length?n.moveNext()?r.yieldReturn(t[i]=n.current):!1:r.yieldReturn(t[i])})},function(){o=!0,t&&(t.length=0),t=null,d.dispose(n),n=null})},e.prototype.catchError=function(t){var n=this,r=!n.throwIfDisposed();return new e(function(){var e;return new a["default"](function(){try{_(r),e=n.getEnumerator()}catch(t){}},function(n){try{if(_(r),e.moveNext())return n.yieldReturn(e.current)}catch(o){t(o)}return!1},function(){d.dispose(e)})})},e.prototype.finallyAction=function(t){var n=this,r=!n.throwIfDisposed();return new e(function(){var e;return new a["default"](function(){_(r),e=n.getEnumerator()},function(t){return _(r),e.moveNext()?t.yieldReturn(e.current):!1},function(){try{d.dispose(e)}finally{t()}})})},e}(R);e.Enumerable=k;var A=function(t){function e(e,n){t.call(this,e,n,!1)}return __extends(e,t),e}(k);e.FiniteEnumerable=A;var S=function(t){function e(e){t.call(this,function(){return n.throwIfDisposed(),new c["default"](function(){return n.throwIfDisposed("The underlying ArrayEnumerable was disposed.","ArrayEnumerator"),n._source})});var n=this;n._disposableObjectName="ArrayEnumerable",n._source=e}return __extends(e,t),e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._source=null},Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),e.prototype.toArray=function(){var t=this;return t.throwIfDisposed(),i.toArray(t._source)},e.prototype.asEnumerable=function(){return new e(this._source)},e.prototype.forEach=function(t){var e=this;e.throwIfDisposed(),i.forEach(e._source,t)},e.prototype.any=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r?r.length:0;return o&&(!e||t.prototype.any.call(this,e))},e.prototype.count=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r?r.length:0;return o&&(e?t.prototype.count.call(this,e):o)},e.prototype.elementAt=function(e){var n=this;n.throwIfDisposed();var r=n._source;return e<r.length&&e>=0?r[e]:t.prototype.elementAt.call(this,e)},e.prototype.elementAtOrDefault=function(t,e){void 0===e&&(e=null);var n=this;n.throwIfDisposed();var r=n._source;return t<r.length&&t>=0?r[t]:e},e.prototype.last=function(){var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t.prototype.last.call(this)},e.prototype.lastOrDefault=function(t){void 0===t&&(t=null);var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t},e.prototype.skip=function(t){var e=this;return t>0?new k(function(){return new c["default"](function(){return e._source},t)}):e},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var e=this,n=e._source?e._source.length:0;return e.take(n-t)},e.prototype.skipToLast=function(t){if(!(t>0))return k.empty();var e=this;if(!isFinite(t))return e;var n=e._source?e._source.length:0;return e.skip(n-t)},e.prototype.reverse=function(){var t=this;return new k(function(){return new c["default"](function(){return t._source},t._source?t._source.length-1:0,-1)})},e.prototype.memoize=function(){return this},e.prototype.sequenceEqual=function(o,i){return void 0===i&&(i=n.areEqual),u["default"].isArrayLike(o)?r.areEqual(this.source,o,!0,i):o instanceof e?o.sequenceEqual(this.source,i):t.prototype.sequenceEqual.call(this,o,i)},e.prototype.toJoinedString=function(e,n){void 0===e&&(e=""),void 0===n&&(n=b.Identity);var r=this._source;return!n&&Array.isArray(r)?r.join(e):t.prototype.toJoinedString.call(this,e,n)},e}(A),O=function(t){function e(e,n){t.call(this,n),this._groupKey=e}return __extends(e,t),Object.defineProperty(e.prototype,"key",{get:function(){return this._groupKey},enumerable:!0,configurable:!0}),e}(S),B=function(){function t(t){this._dictionary=t}return Object.defineProperty(t.prototype,"count",{get:function(){return this._dictionary.count},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return this._dictionary.getValue(t)},t.prototype.contains=function(t){return this._dictionary.containsKey(t)},t.prototype.getEnumerator=function(){var t,e=this;return new a["default"](function(){t=e._dictionary.getEnumerator()},function(e){if(!t.moveNext())return!1;var n=t.current;return e.yieldReturn(new O(n.key,n.value))},function(){d.dispose(t)})},t}(),F=function(t){function e(e,n){t.call(this,null,null,e&&e.isEndless),this.prevSource=e,this.prevPredicate=n}return __extends(e,t),e.prototype.where=function(n){if(n.length>1)return t.prototype.where.call(this,n);var r=this.prevPredicate,o=function(t){return r(t)&&n(t)};return new e(this.prevSource,o)},e.prototype.select=function(e){return e.length>1?t.prototype.select.call(this,e):new M(this.prevSource,this.prevPredicate,e);
},e.prototype.getEnumerator=function(){var t,e=this,n=e.prevPredicate,r=e.prevSource;return new a["default"](function(){t=r.getEnumerator()},function(e){for(;t.moveNext();)if(n(t.current))return e.yieldReturn(t.current);return!1},function(){d.dispose(t)},e._isEndless)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this.prevPredicate=null,this.prevSource=null},e}(k),M=function(t){function e(e,n,r){t.call(this,null,null,e&&e.isEndless),this.prevSource=e,this.prevPredicate=n,this.prevSelector=r}return __extends(e,t),e.prototype.where=function(e){return e.length>1?t.prototype.where.call(this,e):new F(this,e)},e.prototype.select=function(n){if(n.length>1)return t.prototype.select.call(this,n);var r=this,o=r.prevSelector,i=function(t){return n(o(t))};return new e(r.prevSource,r.prevPredicate,i)},e.prototype.getEnumerator=function(){var t,e=this,n=e.prevPredicate,r=e.prevSource,o=e.prevSelector;return new a["default"](function(){t=r.getEnumerator()},function(e){for(;t.moveNext();){var r=t.current;if(null==n||n(r))return e.yieldReturn(o(r))}return!1},function(){d.dispose(t)},e._isEndless)},e.prototype._onDispose=function(){var e=this;t.prototype._onDispose.call(this),e.prevPredicate=null,e.prevSource=null,e.prevSelector=null},e}(k),q=function(t){function e(e,r,o,u,s){void 0===s&&(s=n.compare),t.call(this,null),this.source=e,this.keySelector=r,this.order=o,this.parent=u,this.comparer=s,i.throwIfEndless(e&&e.isEndless)}return __extends(e,t),e.prototype.createOrderedEnumerable=function(t,n){return new e(this.source,t,n,this)},e.prototype.thenBy=function(t){return this.createOrderedEnumerable(t,1)},e.prototype.thenUsing=function(t){return new e(this.source,null,1,this,t)},e.prototype.thenByDescending=function(t){return this.createOrderedEnumerable(t,-1)},e.prototype.thenUsingReversed=function(t){return new e(this.source,null,-1,this,t)},e.prototype.getEnumerator=function(){var t,e,n=this,r=0;return new a["default"](function(){r=0,t=k.toArray(n.source),e=N(n).generateSortedIndexes(t)},function(n){return r<e.length?n.yieldReturn(t[e[r++]]):!1},function(){t&&(t.length=0),t=null,e&&(e.length=0),e=null},!1)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this.source=null,this.keySelector=null,this.order=null,this.parent=null},e}(A);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=k});
//# sourceMappingURL=Linq.js.map
