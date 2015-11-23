var React 	= require('react');
var io 		= require('socket.io-client');
var Header 	= require('./parts/Header');

var APP = React.createClass({

	//cuando la conexión ha sido establecida
	connect(){
		alert('Connect: '+ this.socket.id);
	},

	//Antes de renderizar hacemos la conexión con el socket.
	componentWillMount(){
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
	},

	render(){
		return (
			<div>
				<Header title="Mi nuevo titulo" />
			</div>
		);
	}
});

module.exports = APP;
