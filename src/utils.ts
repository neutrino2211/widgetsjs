import { Widget } from './Widget';

const global_refs = {};

export type State = any;
export type StateTransformers = any;

export function registerRef(ref: string, component: Widget){
    global_refs[ref] = component;
}

export function getRef(ref: string): Widget{
    return global_refs[ref];
}

export function useComponent(comp: new () => any){
    return {
        as: (name: string) => {
            customElements.define(name, comp);
        }
    }
}

export function uuid(): string {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}