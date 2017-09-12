//Libs
import * as React from "react";

//Stylesheets
import "./post.scss";

interface Postprops {
    
}

export default class Post extends React.Component<Postprops, undefined> {

    constructor(){
        super()
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="Post">
                This is a post
            </div>
        )
    }
}
