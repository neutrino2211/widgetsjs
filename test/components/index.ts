import { useComponent } from "../../src";
import { HelloWidget } from "./StatelessWidget";
import { IncreaseDecrease } from "./StatefulWidget";
import { PeerComponent } from "./PeerComponent";

useComponent(HelloWidget).as("hello-world");
useComponent(IncreaseDecrease).as("increase-decrease");
useComponent(PeerComponent).as("peer-component");