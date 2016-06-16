/*
	App
*/
import React from 'react';
import Catalyst from 'react-catalyst';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order';
import Header from './Header';
import reactMixin from 'react-mixin';

//Firebase
var Rebase = require('re-base');
var base = Rebase.createClass('https://fishmart.firebaseio.com/');

class App extends React.Component {
	// mixins: [Catalyst.LinkedStateMixin],
	getInitialState() {
		return {
			fishes: {},
			order: {}
		}
	}

	componentDidMount() {
		base.syncState(this.props.params.storeId + '/fishes', {
			context: this,
			state: 'fishes'
		});

		// var localStorageRef = localStorage['order-' + this.props.params.storeId]; //This works
		var localStorageRef = localStorage.getItem('order-' + this.props.params.storeId);

		if (localStorageRef) {
			this.setState({order: JSON.parse(localStorageRef)});
		}	
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.order));
	}

	addToOrder(key) {
		this.state.order[key] = this.state.order[key] + 1 || 1;
		this.setState({order: this.state.order});
	}

	removeFromOrder(key) {
		delete this.state.order[key];
		this.setState({order: this.state.order});
	}

	addFish(fish) {
		var timeStamp = (new Date()).getTime();
		this.state.fishes['fish-' + timeStamp] = fish;
		this.setState({fishes: this.state.fishes});
	}

	removeFish(key) {
		if (confirm('Are you sure you want to remove this fish?')) {
			this.state.fishes[key] = null;
			this.setState({
				fishes: this.state.fishes
			});
		}
	}

	loadSamples() {
		this.setState({
			fishes: require('../sample-fishes')
		});
	} 

	renderFish(key) {
		return (
			<Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
		)
	} 

	render() {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline='Fresh Seafood Market' />
					<ul className="list-of-fishes">
						{Object.keys(this.state.fishes).map(this.renderFish)}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} linkState={this.linkState} removeFish={this.removeFish} />
			</div>
		)
	}
};

export default App;