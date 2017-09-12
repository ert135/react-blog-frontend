//Libs
import * as React from "react";

//Components
import Header from '../header/Header'
import Post from '../post/Post'

//Stylesheets
import "../../stylesheets/main.scss";

export default class IndexPage extends React.Component<IndexPageProps, IMainpageState> {

    constructor() {
        super();
        this.state = {
            loadingPosts: true,
            posts: [],
            error: "",
        }
    }

    componentWillMount() {
        //do cookie heck for json token here
        //if json token then set signedin state
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        fetch('my post url')
        .then(posts => posts.json())
        .then((posts: IPost[]) => {
            this.setState({
                posts: posts
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
            {this.state.posts}
        </div>
    }

}
