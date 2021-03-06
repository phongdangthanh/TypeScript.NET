/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
"use strict";
var SystemException_1 = require("../../Exceptions/SystemException");
var extends_1 = require("../../../extends");
// noinspection JSUnusedLocalSymbols
var __extends = extends_1.default;
var NAME = 'UnsupportedEnumerableException';
var UnsupportedEnumerableException = (function (_super) {
    __extends(UnsupportedEnumerableException, _super);
    function UnsupportedEnumerableException(message) {
        _super.call(this, message || "Unsupported enumerable.");
    }
    UnsupportedEnumerableException.prototype.getName = function () {
        return NAME;
    };
    return UnsupportedEnumerableException;
}(SystemException_1.SystemException));
exports.UnsupportedEnumerableException = UnsupportedEnumerableException;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnsupportedEnumerableException;