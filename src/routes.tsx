import * as React from 'React';
import { Router, Route, Switch } from 'react-router-dom'

import App from './components/app';
import MainPage from './components/main-page/MainPage';
import PostDetail from './components/post-detail/PostDetail';

export default (
    <App>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/post:id" component={PostDetail}/>
        </Switch>
    </App>
);
