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
var Widget_1 = require("./Widget");
var StatelessWidget = /** @class */ (function (_super) {
    __extends(StatelessWidget, _super);
    function StatelessWidget(state, transformers) {
        return _super.call(this, state, transformers) || this;
    }
    StatelessWidget.prototype.connectedCallback = function () {
        this.setup();
        this.root = this;
        var state = {};
        for (var i = 0; i < this.attributes.length; i++) {
            var attr = this.attributes[i];
            state[attr.name] = attr.value;
        }
        var componentState = {};
        Object.assign(componentState, this.state);
        Object.assign(componentState, state);
        this.innerHTML = this._render(componentState);
        this.onMount();
    };
    return StatelessWidget;
}(Widget_1.Widget));
exports.StatelessWidget = StatelessWidget;
//# sourceMappingURL=StatelessWidget.js.map