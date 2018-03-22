import * as React from 'react';
import config from '../../../config/config';
import HeroBanner from '../hero-banner/HeroBanner';
import PostCard from '../post-card/PostCard';

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
            });
    }

    private onClickPost(id): void {
        console.log('Clicked post with an ID of ', id);
    }

    private renderPosts() {
        if (this.state.posts) {
            return this.state.posts.map((post: any, i: number) => {
                return <PostCard key={i} onClick={this.onClickPost.bind(this)} post={post}></PostCard>
            });
        }
    }

    public render() {
        return (
            <div>
                <HeroBanner></HeroBanner>
                <section id='posts' className='tiles'>
                    {this.renderPosts()}
                </section>
            </div>
        )
    }
}
