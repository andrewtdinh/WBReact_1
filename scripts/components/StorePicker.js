/*
  StorePicker component
*/
import React from 'react';
import {History} from 'react-router';

var StorePicker = React.createClass({
	mixins: [History],
	goToStore: function(event){
		event.preventDefault();
		var storeId = this.refs.storeId.value;
		this.history.pushState(null, '/store/' + storeId);
	},
  	render: function(){
    	return (
    		<form className="store-selector" onSubmit={this.goToStore}>
    			<h2>Please Enter a Store</h2>
    			<input type="text" ref="storeId" defaultValue={h.getFunName()} />
    			<input type="Submit" />
    		</form>
    	)
  	}
});

export default StorePicker;