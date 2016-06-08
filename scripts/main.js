import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route} from 'react-router';

import {createHistory} from 'history';

//Firebase
var Rebase = require('re-base');
var base = Rebase.createClass('https://fishmart.firebaseio.com/');

var Catalyst = require('react-catalyst');
/*
	Import components
*/
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import Inventory from './components/Inventory';
import Fish from './components/Fish';
import Order from './components/Order'
import Header from './components/Header'

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
