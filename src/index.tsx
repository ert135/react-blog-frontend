//Libs
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import { browserHistory } from 'react-router'

//Components
import MainPage from "./components/viewComponents/MainPage";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={MainPage}></Route>
    </Router>,
    document.getElementById("app")
);