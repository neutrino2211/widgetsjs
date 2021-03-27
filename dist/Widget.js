"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = require("./Component");
var utils_1 = require("./utils");
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget(state, transformers) {
        var _this = _super.call(this) || this;
        _this.component = _this;
        _this.state = state;
        _this.transformers = transformers;
        transformers && _this.transformState(transformers, state);
        return _this;
    }
    Widget.prototype.transformState = function (transformers, state) {
        Object.getOwnPropertyNames(transformers).forEach(function (v) {
            state[v] = transformers[v](state[v]);
        });
    };
    Widget.prototype.$ref = function (name) {
        return utils_1.getRef(name);
    };
    Widget.prototype.$child = function (selector) {
        return this.root.querySelector(selector);
    };
    Widget.prototype.onMount = function () { };
    Widget.prototype.onDismount = function () { };
    Widget.prototype._render = function (state) {
        this.transformers && this.transformState(this.transformers, state);
        if (state) {
            this.state = state;
        }
        return this.render(state || this.state);
    };
    Widget.prototype.render = function (state) {
        return '';
    };
    return Widget;
}(Component_1.Component));
exports.Widget = Widget;
//# sourceMappingURL=Widget.js.map