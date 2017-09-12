//Libs
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import { browserHistory } from 'react-router'

//Components
import MainPage from "./components/viewComponents/MainPage";
import PostDetail from "./components/viewComponents/PostDetail";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={MainPage}></Route>
        <Route path='/post/:id' component={PostDetail}></Route>
    </Router>,
    document.getElementById("app")
);
