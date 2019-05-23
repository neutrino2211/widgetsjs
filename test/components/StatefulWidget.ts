import { StatefulWidget, State } from "../../src";

export class IncreaseDecrease extends StatefulWidget {
    constructor(){
        super({
            number: 0
        });
    }

    onMount(){
        this.root.querySelector("#plus").addEventListener("click",()=>{
            this.setState({
                number: this.state.number+1
            })
        })

        this.root.querySelector("#minus").addEventListener("click",()=>{
            this.setState({
                number: this.state.number-1
            })
        })
    }

    render(state: State): string {
        return `
            <p id="num">${state.number}</p>
            <button id="plus">+</button>
            <button id="minus">-</button>
        `
    }
}