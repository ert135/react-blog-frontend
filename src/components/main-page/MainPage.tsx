import * as React from 'react';
import * as router from 'react-router';

export default class MainPage extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div>
                Hello from the main-page { this.state.name }!
            </div>
        );
    }
}
