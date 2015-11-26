var express = require('express');
var app = express();
var connections = [];

var title='Sin titulo';

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist/'));

var server = app.listen(3000);

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {

	socket.once('disconnect', function () {
		//connections.indexOf(socket) --> Trae la posición en el array
		//que se va a desconectar
		console.log('disconnect id: %s', connections.indexOf(socket));

		//quita del array el elemento que ha sido desconectado
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();

		console.log('Cantidad: %s', connections.length);		
	});

	socket.emit('welcome', {
		title: title
	});
	
	connections.push(socket);
	console.log('Connected: %s, Conections: %s', socket.id, connections.length);

});

console.log('Polling server is running');