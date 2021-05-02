import { Component } from "./Component";
import { State, StateTransformers, getRef } from "./utils";

export class Widget extends Component {
    public state: State;
    public root: HTMLElement;
    public transformers: StateTransformers;
    constructor(state: State, transformers?: StateTransformers){
        super();
        this.component = this;
        this.state = state;
        this.transformers = transformers;
        transformers && this.transformState(transformers, state);
    }

    protected transformState(transformers: StateTransformers, state: State){
        Object.getOwnPropertyNames(transformers).forEach( v => {
            state[v] = transformers[v](state[v]);
        })
    }

    $ref<T>(name: string): T {
        return <any>getRef(name);
    }

    $child<T>(selector: string): T {
        return <any>this.root.querySelector(selector);
    }

    public onMount(){}
    public onDismount(){}

    protected _render(state?: State): string{
        this.transformers && this.transformState(this.transformers, state);
        if(state){
            this.state = state;
        }
        return this.render(state || this.state);
    }

    public render(state: State): string{
        return '';
    }
}