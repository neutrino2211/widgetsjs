import { Plugin } from "./plugin";
import { innerHTML as morphdom } from "diffhtml";
import { StatefulWidget } from "../StatefulWidget";

function parseHTML(html: string): HTMLElement {
    return new DOMParser().parseFromString(html,"text/html").body;
}

export class DiffingPlugin implements Plugin {
    private differ: (a: HTMLElement, b: string | HTMLElement) => any
    constructor(public widget: StatefulWidget){
        this.differ = morphdom
    }

    public run(innerHTML: string) {
        this.differ(this.widget, parseHTML(innerHTML));
    }
}