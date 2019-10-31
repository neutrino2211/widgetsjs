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
var BaseComponent_1 = require("./BaseComponent");
var utils_1 = require("./utils");
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super.call(this) || this;
    }
    Component.prototype.childrenAvailableCallback = function () {
        if (this.getAttribute('$ref')) {
            utils_1.registerRef(this.getAttribute('$ref'), this.component);
        }
        this.widgetChildren = this.innerHTML;
    };
    Component.prototype.disconnectedCallback = function () {
        this.component.onDismount();
    };
    return Component;
}(BaseComponent_1.BaseComponent));
exports.Component = Component;
//# sourceMappingURL=Component.js.map