//Libs
import * as React from "react";

//Components
import Header from '../header/Header'
import Post from '../post/Post'

//Stylesheets
import "../../stylesheets/main.scss";

export default class IndexPage extends React.Component<IPostDetailProps, IPostDetailState> {

    constructor() {
        super();
        this.state = {
            loadingPost: true,
            post: null,
            error: ""
        }
    }
    componentWillMount() {
        //do cookie check here 
    }

    componentDidMount() {
        this.getPostDetail();
    }

    getPostDetail() {
        fetch('my post url')
        .then(post => post.json())
        .then((post: IPost) => {
            this.setState({
                post: post
            })
        })
        .catch((error) => {
            this.setState({
                error: error
            })
        })
    }

    render() {
        return <div className="MainPage">
            <Header/>
            <h1>This is the post detail page!!</h1>
            {this.state.post}
        </div>
    }

}
