import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './main-page/MainPage'
import PostDetail from './post-detail/PostDetail'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/posts/:id" component={PostDetail}/>
        </Switch>
    </main>
)

export default Routes;
