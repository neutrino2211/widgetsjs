import { BaseComponent } from "./BaseComponent";

import { registerRef } from "./utils";
import { Widget } from "./Widget";

export class Component extends BaseComponent {
    public component: Widget;
    public widgetChildren: string;

    constructor(){
        super();
    }


    protected childrenAvailableCallback(){
        if(this.getAttribute('$ref')){
            registerRef(this.getAttribute('$ref'), this.component);
        }

        this.widgetChildren = this.innerHTML;
    }

    protected disconnectedCallback(){
        this.component.onDismount();
    }
}