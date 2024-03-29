var React 	= require('react');
var io 		= require('socket.io-client');
var Header 	= require('./parts/Header');

var APP = React.createClass({

	//cuando la conexión ha sido establecida
	connect(){
		this.setState({ status: 'connected' });
	},
	//cuando el usuario se desconecte del socket
	disconnect(){
		this.setState({ status: 'disconnected'});
	},

	welcome(titleServer){
		this.setState({ title: titleServer})
	},

	//estado inicial
	getInitialState(){
		return {
			status: 'disconnected',
			title: 	''
		}
	},

	//Antes de renderizar hacemos la conexión con el socket.
	componentWillMount(){
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnect', this.disconnect);
		this.socket.on('welcome', this.welcome);
	},

	render(){
		return (
			<div>
				<Header title={this.state.title} status={this.state.status} />
			</div>
		);
	}
});

module.exports = APP;
