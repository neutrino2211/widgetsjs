"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_refs = {};
function registerRef(ref, component) {
    global_refs[ref] = component;
}
exports.registerRef = registerRef;
function getRef(ref) {
    return global_refs[ref];
}
exports.getRef = getRef;
function useComponent(comp) {
    return {
        as: function (name) {
            customElements.define(name, comp);
        }
    };
}
exports.useComponent = useComponent;
//# sourceMappingURL=utils.js.map