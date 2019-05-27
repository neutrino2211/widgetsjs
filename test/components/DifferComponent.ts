import { StatefulWidget, State } from "../../src";

export class DifferComponent extends StatefulWidget {
    constructor(){
        super({
            text: "Hello World!"
        })
    }

    onMount(){
        this.$child('#btn').addEventListener("click",()=>{
            this.setState({
                text: (<HTMLInputElement>this.$child("#input")).value
            })
        })
    }

    render(state: State): string {
        return `
        <h1>${state.text}</h1>
        <input type="text" id="input"/>
        <button id="btn">Text</button>
        `
    }
}