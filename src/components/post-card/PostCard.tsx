import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './postCard.scss';

export default class PostCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            post: this.props.post
        };
    }

    private onClick(): void {
        this.props.onClick(this.state.post);
    }

    public render() {
        return (
            <article
                onClick={this.onClick.bind(this)}
            >
                <Link to={`/posts/${this.props.post.id}`}>
                    <span className="image">
                        <img src={this.state.post.pictureUrl}></img>
                    </span>
                    <header 
                        className="major"
                    >
                        <h3>
                            <a className="link">{this.state.post.title}</a>
                        </h3>
                        <p>{this.state.post.subtitle}</p>
                    </header>
                    <a className="link primary"></a>
                </Link>
            </article>
        )
    }
}
