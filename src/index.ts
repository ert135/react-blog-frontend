/* eslint-disable no-console */
import * as React from 'React';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes';
import './styles/styles.css';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
)
