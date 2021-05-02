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
function uuid() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
exports.uuid = uuid;
//# sourceMappingURL=utils.js.map