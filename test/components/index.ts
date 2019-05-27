import { useComponent } from "../../src";
import { HelloWidget } from "./StatelessWidget";
import { IncreaseDecrease } from "./StatefulWidget";
import { PeerComponent } from "./PeerComponent";
import { DifferComponent } from "./DifferComponent";

useComponent(HelloWidget).as("hello-world");
useComponent(IncreaseDecrease).as("increase-decrease");
useComponent(PeerComponent).as("peer-component");
useComponent(DifferComponent).as("differ-component");