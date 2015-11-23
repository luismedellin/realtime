var React = require('react');

var Header = React.createClass({
	propTypes(){
		return {
			title: React.PropTypes.string.isRequired,
			status: React.PropTypes.string.isRequired
		}
	},
	render(){
		return (
			<header>
				<h1>{this.props.title}</h1>
				<span>{this.props.status}</span>
			</header>
		);
	}
});

module.exports = Header;