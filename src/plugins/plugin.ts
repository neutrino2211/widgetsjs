import { Widget } from "../Widget";

export interface Plugin {
    
    widget: Widget;
    run(innerHTML: string): any;
}