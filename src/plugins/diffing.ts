import { Plugin } from "./plugin";
import { innerHTML as morphdom } from "diffhtml";
import { StatefulWidget } from "../StatefulWidget";

function parseHTML(html: string): HTMLElement {
    return new DOMParser().parseFromString(html,"text/html").body;
}

export class DiffingPlugin implements Plugin {
    private differ: (a: HTMLElement, b: string | HTMLElement) => any
    constructor(public widget: StatefulWidget){
        // console.log(morphdom)
        this.differ = morphdom
    }

    public run(innerHTML: string) {
        console.log(this.widget.innerHTML, innerHTML)
        this.differ(this.widget, parseHTML(innerHTML));
    }
}