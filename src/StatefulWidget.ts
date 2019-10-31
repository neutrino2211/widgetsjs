import { State, StateTransformers } from "./utils";
import { EventEmitter } from "events";
import { Widget } from "./Widget";
import { DiffingPlugin } from "./plugins/diffing";
import { Plugin } from "./plugins/plugin";
import { TemplateParserPlugin } from "./plugins/templatePraser";

export class StatefulWidget extends Widget {
    protected cachedState: State;
    private plugins: Array<Plugin> = [new DiffingPlugin(this), new TemplateParserPlugin(this)];
    eventEmitter = new EventEmitter();
    constructor(state: State, transformers?: StateTransformers){
        super(state, transformers);
        this.setState(state);
        this.on('load',this.onMount)
    }

    connectedCallback(){
        this.setup();
        this.root = this;
        let state: State = {};
        for(let i=0; i<this.attributes.length; i++){
            const attr= this.attributes[i];
            state[attr.name] = attr.value;
        }
        let componentState = Object.assign({}, this.state)
        state = Object.assign(componentState, state);
        this.beforeRender()
        this.runPlugins(this._render(state));
        this.on('render',(state: State)=>{
            componentState = Object.assign({}, this.cachedState || this.state)
            let _state = Object.assign(state, componentState);
            this.beforeRender()
            this.runPlugins(this._render(_state));
            this.afterRender()
        })
        this.emit('load')
        this.afterRender()
    }

    private runPlugins(innerHTML: string){
        for(const plugin of this.plugins){
            plugin.run(innerHTML)
        }
    }

    get emitter(){
        return this.eventEmitter;
    }

    get on(){
        return this.eventEmitter.on;
    }

    get emit(){
        return this.eventEmitter.emit;
    }

    peerComponent(component: StatefulWidget){
        component.on('render',()=>{
            this.emit('render', this.cachedState || this.state);
        })
    }

    cacheState(): any{
        this.cachedState = Object.assign({},this.state);
        return this.cachedState;
    }

    setState(state: State){
        this.transformers && Object.keys(this.state).length !== 0 && this.transformState(this.transformers,this.state)
        // console.log(this.cachedState, this.state)
        this.state = Object.assign( this.cachedState || this.state || {}, state);
        this.emit('render',this.state);
    }
    
    public beforeRender(){}
    public afterRender(){}
}