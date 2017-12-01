/* eslint-disable no-console */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import { routerReducer } from 'react-router-redux'

import reducers from './reducers/index';

import routes from './routes';

console.log('Reducers are ', reducers);
// console.log('Routes are ', routes);

const store = createStore(reducers);

console.log('store is ', store);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			{routes}
		</BrowserRouter>
    </Provider>,
	document.getElementById('app-root')
)

