
declare module "widgetsjs" {

    export type State = any;
    export type StateTransformers = any;

    export class Widget {
        public state: State;
        public root: HTMLElement;
        public transformers: StateTransformers;
        constructor(state: State, transformers?: StateTransformers);
        protected transformState(transformers: StateTransformers, state: State): void;
        public $ref(id: string): Widget;
        public onMount(): void;
        public onDismount(): void;
        public render(state: State): string;
    }

    export class StatelessWidget extends Widget {

    }

    export class StatefulWidget extends Widget {
        public peerComponent(widget: Widget): void;
        public setState(state: State): void;
        public cacheState(): State;

        public beforeRender(): void;
        public afterRender(): void;
    }

    function useComponent(widget: new ()=> Widget): {as: Function}
}