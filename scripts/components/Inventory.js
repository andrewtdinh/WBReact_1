/*
	Inventory component
*/

import React from 'react';
import AddFishForm from './AddFishForm';
import autobind from 'autobind-decorator';

@autobind
class Inventory extends React.Component {

	constructor() {
		super();
		
	}

	renderLogin() {
		return (
			<nav className="login">
				<h2>Inventory</h2>
				<p>Sign in to manage your store's inventory</p>
				<button className="github">Log In with Github</button>
				<button className="facebook">Log In with Facebook</button>
				<button className="twitter">Log In with Twitter</button>
			</nav>
		)
	}


	renderInventory(key) {
		return (
			<div className="fish-edit" key={key}>
				<input type="text" valueLink={this.props.linkState('fishes.' +key+ '.name')} />
				<input type="text" valueLink={this.props.linkState('fishes.' +key+ '.price')} />
				<select valueLink={this.props.linkState('fishes.' +key+ '.status')}>
					<option value="unavailable">Sold Out!</option>
					<option value="available">Fresh!</option>
				</select>
				<textarea valueLink={this.props.linkState('fishes.' +key+ '.desc')}></textarea>
				<input type="text" valueLink={this.props.linkState('fishes.' +key+ '.image')} />
				<button onClick={this.props.removeFish.bind(null, key)}>Remove Fish</button>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h2>Inventory</h2>

				{Object.keys(this.props.fishes).map(this.renderInventory)}

				<AddFishForm {...this.props}/>
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		)
	}
}

Inventory.propTypes = {
	removeFish: React.PropTypes.func.isRequired,
	addFish: React.PropTypes.func.isRequired,
	loadSamples: React.PropTypes.func.isRequired,
	fishes: React.PropTypes.object.isRequired,
	linkState: React.PropTypes.func.isRequired
}

export default Inventory;