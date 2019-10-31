import { StatelessWidget } from "../../src";

export class ChildWidget extends StatelessWidget {
    constructor(){
        super({})
    }

    render(state): string{
        return `
            <p>Child is: ${this.widgetChildren}</p>
        `;
    }
}