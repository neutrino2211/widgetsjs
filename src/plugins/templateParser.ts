import { Plugin } from "./plugin";
import { Widget } from "../Widget";

export class TemplateParserPlugin implements Plugin {
    constructor(public widget: Widget) {

    }

    public run(innerHTML: string){
        (innerHTML.match(/\{([^}]+)\}/g)||[]).forEach(t => {
            t = t.slice(2,-1);
            const res = new Function(`return (${t});`)
            const ev = res.call(this.widget)
            this.widget.innerHTML = this.widget.innerHTML.replace("{{"+t+"}}", ev);
        });
    }
}