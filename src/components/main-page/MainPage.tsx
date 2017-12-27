import * as React from 'react';
import * as router from 'react-router';
import axios from 'axios';

export default class MainPage extends React.Component<any, any> {
    private listItems: any;

    constructor(props: any){
        super(props);
        this.state = {
            name: this.props.defaultName,
            posts: this.props.posts || []
        };
        this.getPosts();
    }

    private getPosts(): void {
        axios.get('http://35.176.44.151:8080/posts')
        .then((response: any) => {
            console.log('data is ', response.data);
            this.setState({
                posts: response.data
            });
        })
    }

    private renderPosts() {
        if (this.state.posts) {
            return this.state.posts.map((post: any, i: number) => {
               return <h2 className="testTitle" key={i}>{post.title}</h2>
            });
        }
    }

    public render() {
        return (
            <div>
                <h1 className='testTitle'>Hello from the main-page { this.state.name }!</h1>
                {this.renderPosts()}
            </div>
        );
    }
}
