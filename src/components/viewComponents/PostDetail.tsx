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
        //do local storage check here 
    }

    componentDidMount() {
        this.getPostDetail();
    }

    getPostDetail() {
        //call redux store here
    }

    render() {
        return <div className="MainPage">
            <Header/>
            <h1>This is the post detail page!!</h1>
            {this.state.post}
        </div>
    }

}
