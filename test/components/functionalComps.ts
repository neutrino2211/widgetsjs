import { statelessFunctionWidget, statefulFunctionWidget, FunctionalWidget, StatefulWidget, StatelessWidget } from "../../src";
import { IncreaseDecrease } from "./StatefulWidget";

const Component: FunctionalWidget<StatelessWidget> = function () {

    this.onMount = () => {
        console.log("MOUNTED!! FUNCTION")
    }

    return (state) => `
        <h3>${state.text}</h3>
    `
}

const StatefulComponent: FunctionalWidget<StatefulWidget> = function () {

    const inc_dec = <IncreaseDecrease>this.$ref("inc-dec");

    this.peerComponent(inc_dec);

    this.onMount = () => {
        this.$child<HTMLButtonElement>("button").addEventListener("click", () => {
            this.setState({
                number: this.state.number + 1
            })
        })
    }

    return (state) => `
        <button>Increment ME: ${state.number  + inc_dec.state.number}</button>
    `
}

export const FunctionComponent = statelessFunctionWidget(Component);
export const StatefulFunctionComponent = statefulFunctionWidget(StatefulComponent, {number: 0}, {number: Number});