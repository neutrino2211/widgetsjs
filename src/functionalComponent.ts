import { StatefulWidget } from "./StatefulWidget";
import { StatelessWidget } from "./StatelessWidget";
import { Widget } from "./Widget";

export type Template = (state: any) => string;

export type FunctionalWidget<T = StatefulWidget | StatelessWidget> = (this: T) => Template;

export function statelessFunctionWidget(fn: () => Template, initialData: any = {}, initialTransformers: any = {}): new () => Widget {
    return class extends StatelessWidget {
        private renderFn: Template;
        constructor(){
            super(initialData, initialTransformers);
            this.renderFn = fn.call(this);
        }

        render(state: any) {
            return this.renderFn(state);
        }

    }
}

export function statefulFunctionWidget(fn: () => Template, initialData: any = {}, initialTransformers: any = {}): new () => Widget {
    return class extends StatefulWidget {
        private renderFn: Template;
        constructor(){
            super(initialData, initialTransformers);
            this.renderFn = fn.call(this);
        }

        render(state: any) {
            return this.renderFn(state);
        }

    }
}