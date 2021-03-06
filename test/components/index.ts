import { useComponent } from "../../src";
import { HelloWidget } from "./StatelessWidget";
import { IncreaseDecrease } from "./StatefulWidget";
import { PeerComponent } from "./PeerComponent";
import { DifferComponent } from "./DifferComponent";
import { ChildWidget } from "./ChildWidget";
import { FunctionComponent, StatefulFunctionComponent } from "./functionalComps";

useComponent(HelloWidget).as("hello-world");
useComponent(IncreaseDecrease).as("increase-decrease");
useComponent(PeerComponent).as("peer-component");
useComponent(DifferComponent).as("differ-component");
useComponent(ChildWidget).as("child-widget");
useComponent(FunctionComponent).as("func-comp");
useComponent(StatefulFunctionComponent).as("stateful-func-comp")