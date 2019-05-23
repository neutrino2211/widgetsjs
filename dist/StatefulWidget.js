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
var events_1 = require("events");
var Widget_1 = require("./Widget");
var StatefulWidget = /** @class */ (function (_super) {
    __extends(StatefulWidget, _super);
    function StatefulWidget(state, transformers) {
        var _this = _super.call(this, state, transformers) || this;
        _this.eventEmitter = new events_1.EventEmitter();
        _this.setState(state);
        _this.on('load', _this.onMount);
        return _this;
    }
    StatefulWidget.prototype.connectedCallback = function () {
        var _this = this;
        this.setup();
        this.root = this;
        var state = {};
        for (var i = 0; i < this.attributes.length; i++) {
            var attr = this.attributes[i];
            state[attr.name] = attr.value;
        }
        var componentState = Object.assign({}, this.state);
        state = Object.assign(componentState, state);
        this.beforeRender();
        this.innerHTML = this._render(state);
        this.on('render', function (state) {
            componentState = Object.assign({}, _this.cachedState || _this.state);
            var _state = Object.assign(state, componentState);
            _this.beforeRender();
            _this.innerHTML = _this._render(_state);
            _this.emit('load');
            _this.afterRender();
        });
        this.emit('load');
        this.afterRender();
    };
    Object.defineProperty(StatefulWidget.prototype, "emitter", {
        get: function () {
            return this.eventEmitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatefulWidget.prototype, "on", {
        get: function () {
            return this.eventEmitter.on;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatefulWidget.prototype, "emit", {
        get: function () {
            return this.eventEmitter.emit;
        },
        enumerable: true,
        configurable: true
    });
    StatefulWidget.prototype.peerComponent = function (component) {
        var _this = this;
        component.on('render', function () {
            _this.emit('render', _this.cachedState || _this.state);
        });
    };
    StatefulWidget.prototype.cacheState = function () {
        this.cachedState = Object.assign({}, this.state);
        return this.cachedState;
    };
    StatefulWidget.prototype.setState = function (state) {
        this.transformers && Object.keys(this.state).length !== 0 && this.transformState(this.transformers, this.state);
        // console.log(this.cachedState, this.state)
        this.state = Object.assign(this.cachedState || this.state || {}, state);
        this.emit('render', this.state);
    };
    StatefulWidget.prototype.beforeRender = function () { };
    StatefulWidget.prototype.afterRender = function () { };
    return StatefulWidget;
}(Widget_1.Widget));
exports.StatefulWidget = StatefulWidget;
//# sourceMappingURL=StatefulWidget.js.map