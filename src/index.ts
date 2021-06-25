//Always needs to be top
import {shim} from "./shim"
shim();



import { statefulFunctionWidget, statelessFunctionWidget } from "./functionalComponent";
import { StatefulWidget } from "./StatefulWidget";
import { StatelessWidget } from "./StatelessWidget";
import { useComponent } from "./utils";

export {State, StateTransformers, useComponent, getRef} from "./utils";
export {Widget} from './Widget'
export {StatefulWidget} from './StatefulWidget'
export {StatelessWidget} from './StatelessWidget'
export * from "./functionalComponent"

(window as any).StatefulWidget = StatefulWidget;
(window as any).StatelessWidget = StatelessWidget;
(window as any).useComponent = useComponent;
(window as any).statefulFunctionWidget = statefulFunctionWidget;
(window as any).statelessFunctionWidget = statelessFunctionWidget;