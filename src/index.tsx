/* eslint-disable no-console */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { routerReducer } from 'react-router-redux'

import reducers from './reducers/index';

import routes from './routes';

console.log('Routes are ', routes);

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>

    </Provider>,
	document.getElementById('app-root')
)

