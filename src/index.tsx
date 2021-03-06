/* eslint-disable no-console */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import { routerReducer } from 'react-router-redux'
//do a import for initial application state

import reducers from './reducers/index';
import App from './components/app';

import './styles/main.scss';

const store = createStore(reducers, { navOpen: false, posts: [] });

console.log('store is ', store.getState());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
    </Provider>,
	document.getElementById('app-root')
)

