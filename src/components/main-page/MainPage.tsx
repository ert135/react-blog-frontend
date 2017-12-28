import * as React from 'react';
import axios from 'axios';
import config from '../../../config/config';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class MainPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: this.props.defaultName,
            posts: this.props.posts || []
        };
        this.getPosts();
    }

    private getPosts(): void {
        axios.get(config.apiEndpoint + 'posts')
        .then((response: any) => {
            this.setState({
                posts: response.data
            });
        })
    }

    private renderPosts() {
        if (this.state.posts) {
            return this.state.posts.map((post: any, i: number) => {
               return <h2 className="testTitle" key={i}>{post.title}
                <Link to="/posts">{post.title}</Link>
               </h2>
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
