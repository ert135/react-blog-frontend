import * as React from 'react';
import config from '../../../config/config';
import HeroBanner from '../hero-banner/HeroBanner'

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
        fetch(config.apiEndpoint + 'posts')
            .then(response => response.json())
            .then((response: any) => {
                console.log('response is ', response);
                this.setState({
                    posts: response.posts
                });
            })
    }

    private renderPosts() {
        if (this.state.posts) {
            return this.state.posts.map((post: any, i: number) => {
               return <h2 className="testTitle" key={i}>
                    {/* { post.title } */}
                    {/* <Link to="/posts">{post.title}</Link> */}
               </h2>
            });
        }
    }

    public render() {
        return (
            <div>
                <HeroBanner></HeroBanner>
            </div>
        );
    }
}
