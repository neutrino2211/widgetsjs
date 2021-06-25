"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
//Always needs to be top
var shim_1 = require("./shim");
shim_1.shim();
var functionalComponent_1 = require("./functionalComponent");
var StatefulWidget_1 = require("./StatefulWidget");
var StatelessWidget_1 = require("./StatelessWidget");
var utils_1 = require("./utils");
var utils_2 = require("./utils");
exports.useComponent = utils_2.useComponent;
exports.getRef = utils_2.getRef;
var Widget_1 = require("./Widget");
exports.Widget = Widget_1.Widget;
var StatefulWidget_2 = require("./StatefulWidget");
exports.StatefulWidget = StatefulWidget_2.StatefulWidget;
var StatelessWidget_2 = require("./StatelessWidget");
exports.StatelessWidget = StatelessWidget_2.StatelessWidget;
__export(require("./functionalComponent"));
window.StatefulWidget = StatefulWidget_1.StatefulWidget;
window.StatelessWidget = StatelessWidget_1.StatelessWidget;
window.useComponent = utils_1.useComponent;
window.statefulFunctionWidget = functionalComponent_1.statefulFunctionWidget;
window.statelessFunctionWidget = functionalComponent_1.statelessFunctionWidget;
//# sourceMappingURL=index.js.map