import {StatelessWidget} from '../../src';

export class HelloWidget extends StatelessWidget {
    constructor(){
        super({});
    }

    render(): string {
        return `
            <h1>Hello World!!</h1>
        `
    }
}