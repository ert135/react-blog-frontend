import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './main-page/MainPage'
import PostDetail from './post-detail/PostDetail'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/posts:Id' component={PostDetail}/>
    </Switch>
  </main>
)

export default Main;
