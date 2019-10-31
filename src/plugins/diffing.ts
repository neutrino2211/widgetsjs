import { Plugin } from "./plugin";
import { innerHTML as diffInnerHTML } from "diffhtml";
import { StatefulWidget} from "../StatefulWidget";

export class DiffingPlugin implements Plugin {
    private differ: (a: HTMLElement, b: string | HTMLElement) => any
    constructor(public widget: StatefulWidget){
        this.differ = diffInnerHTML
    }

    public run(innerHTML: string) {
        this.differ(this.widget, innerHTML);
    }
}