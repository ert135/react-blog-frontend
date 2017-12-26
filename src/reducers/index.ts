// ./src/reducers/index.js
import { combineReducers } from 'redux';
import posts from './postReducers';
import nav from './navReducers'

export default combineReducers({
    posts: posts,
    navOpen: nav
});
