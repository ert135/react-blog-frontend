import * as React from 'react';
import * as router from 'react-router';

export default class PostDetail extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className='testTitle'>
                Hello from the post detail component { this.state.name }!
            </div>
        );
    }
}
