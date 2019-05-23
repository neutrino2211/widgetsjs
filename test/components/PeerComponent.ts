import { StatefulWidget, State } from "../../src";
import { IncreaseDecrease } from "./StatefulWidget";

export class PeerComponent extends StatefulWidget {
    private inc_dec: IncreaseDecrease;
    constructor(){
        super({})
        this.inc_dec = <IncreaseDecrease>this.$ref("inc-dec");
        this.peerComponent(this.inc_dec);
    }

    render(state: State): string {
        return `
            <p>The number is ${this.inc_dec.state.number}</p>
        `
    }
}