import * as React from 'react';
import * as router from 'react-router';

export default class MainPage extends React.Component<any, any> {
    private listItems: any;

    constructor(props: any){
        super(props);
        this.state = { 
            name: this.props.defaultName,
            posts: this.props.posts || []
        };
    }

    private renderPosts() {
        if (this.state.posts) {
            this.state.posts.map((post: any) => {
                <div className='post'> 
                    {post}
                </div>
            });
        }
    }

    public render() {
        return (
            <div>
                <h1>Hello from the main-page { this.state.name }!</h1>
                <h2>Posts are</h2>
                {this.renderPosts()}
            </div>
        );
    }
}
