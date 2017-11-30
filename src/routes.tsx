import * as React from 'React';
import { Router, Route } from 'react-router-dom'

import App from './components/app';
import MainPage from './components/main-page/MainPage';
import PostDetail from './components/post-detail/PostDetail';

export default (
    <Route path='/' component={App}>
        <Route path="/" component={MainPage}/>
        <Route path="/post:id" component={PostDetail}></Route>
    </Route>
);