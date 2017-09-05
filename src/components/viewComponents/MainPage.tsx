//Libs
import * as React from "react";

//Components
import Header from '../header/Header'

//Stylesheets
import "../../stylesheets/main.scss";

interface IndexPageProps { compiler: string; framework: string; }

export default class IndexPage extends React.Component<IndexPageProps, undefined> {
    render() {
        return <div className="MainPage">
            <Header/>
            <h1>This is the index page, this page should be responsible for getting posts </h1>
        </div>
    }

    //when component renders get posts 
}