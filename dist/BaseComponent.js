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
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super.call(this) || this;
        _this.parentNodes = [];
        return _this;
    }
    BaseComponent.prototype.setup = function () {
        var _this = this;
        // collect the parentNodes
        var el = this;
        while (el.parentNode) {
            el = el.parentNode;
            this.parentNodes.push(el);
        }
        // check if the parser has already passed the end tag of the component
        // in which case this element, or one of its parents, should have a nextSibling
        // if not (no whitespace at all between tags and no nextElementSiblings either)
        // resort to DOMContentLoaded or load having triggered
        if ([this].concat(this.parentNodes).some(function (el) { return el.nextSibling; }) || document.readyState !== 'loading') {
            this.childrenAvailableCallback();
        }
        else {
            this.baseMutationObserver = new MutationObserver(function () {
                if ([_this].concat(_this.parentNodes).some(function (el) { return el.nextSibling; }) || document.readyState !== 'loading') {
                    _this.childrenAvailableCallback();
                    _this.baseMutationObserver.disconnect();
                }
            });
            this.baseMutationObserver.observe(this, { childList: true });
        }
    };
    BaseComponent.prototype.childrenAvailableCallback = function () { };
    return BaseComponent;
}(HTMLElement));
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=BaseComponent.js.map