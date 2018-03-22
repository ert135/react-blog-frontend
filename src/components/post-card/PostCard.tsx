import * as React from 'react';
import './postCard.scss';

export default class PostCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            post: this.props.post
        };
    }

    private onClick(): void {
        this.props.onClick()
    }

    public render() {
        return (
            <article>
                <span className="image">
                    <img src="images/pic01.jpg" alt=""></img>
                </span>
                <header className="major">
                    <h3><a href="landing.html" className="link">{this.state.post.title}</a></h3>
                    <p>{this.state.post.subtitle}</p>
                </header>
            <a href="landing.html" className="link primary"></a>
            </article>
        )
    }
}
