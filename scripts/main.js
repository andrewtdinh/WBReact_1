import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route} from 'react-router';

import {createHistory} from 'history';

//Firebase
var Rebase = require('re-base');
var base = Rebase.createClass('https://fishmart.firebaseio.com/');

/*
	Import components
*/
import App from './components/App'
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';

/*
	Routes
*/
var routes = (
	<Router history={createHistory()}>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
