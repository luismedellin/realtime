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
			<header className="row">
				<div className="col-xs-10">
					<h1>{this.props.title}</h1>
				</div>
				<div className="col-xs-2">
					<span id="connection-status" className={this.props.status}></span>
				</div>
			</header>
		);
	}
});

module.exports = Header;