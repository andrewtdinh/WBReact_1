var React = require('react');
var ReactDOM = require('react-dom');

/*
	App
*/

var App = React.createClass({
	render: function(){
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header />
					<Fish />
					<Fish />
					<Fish />
					<Fish />
					<Fish />
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
});

var StorePicker = React.createClass({

  render: function(){
    return (
    	<form className="store-selector">
    		<h2>Please Enter a Store</h2>
    		<input type="text" ref="storeId" />
    		<input type="Submit" />
    	</form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
