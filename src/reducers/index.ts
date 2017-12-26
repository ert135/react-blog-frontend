// ./src/reducers/index.js
import { combineReducers } from 'redux';
import posts from './postReducers'

export default combineReducers({
    posts: posts
});
