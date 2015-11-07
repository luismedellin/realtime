/** @jsx React.DOM */

(function () {
	'use strict';

	var App = React.createClass({
	render: function (){
			return (<h1>Hello world form React</h1>);
		}
	});


	React.render(<App />, document.getElementById('react-container'));

})();

