/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types"],e)}(function(e,t){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];o(e,!1)}function r(e,t){try{return t(e)}finally{i(e,!1)}}function i(e,t){if(e&&f.Type.of(e).member("dispose").isFunction)if(t)try{e.dispose()}catch(n){return n}else e.dispose();return null}function o(e,t,n){void 0===n&&(n=0);for(var r,f=e.length;f>n;n++){var u=e[n];if(u)if(t){var s=i(u,!0);s&&(r||(r=[]),r.push(s))}else{var d=!1;try{i(u,!1),d=!0}finally{!d&&f>n+1&&o(e,!1,n+1)}if(!d)break}}return r}var f=e("../Types");t.dispose=n;var n;!function(e){function t(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];r.deferred(e)}function n(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return o(e,!0)}function r(e,t){return e&&e.length?o(e.slice(),t):null}e.deferred=t,e.withoutException=n,e.these=r;var r;!function(e){function t(e,t){void 0===t&&(t=0),e&&e.length&&(t>=0||(t=0),setTimeout(o,t,e.slice(),!0))}e.deferred=t}(r=e.these||(e.these={}))}(n=t.dispose||(t.dispose={})),t.using=r,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n});
//# sourceMappingURL=dispose.js.map