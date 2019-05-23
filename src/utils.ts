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