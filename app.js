var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
	fs = require('fs');
var path = require('path');

// Chargement de la page index.html
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});
app.use(express.static(path.join(__dirname, '/public')));

io.sockets.on('connection', function (socket, pseudo) {
	// Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
	socket.on('nouveau_client', function (pseudo) {
		pseudo = ent.encode(pseudo);
		socket.pseudo = pseudo;
		socket.broadcast.emit('nouveau_client', pseudo);
	});
	socket.on('sound', function () {
		socket.broadcast.emit('newSound', 'newSound');
	});
	socket.on('sound2', function () {
		socket.broadcast.emit('newSound2', 'newSound2');
	});
	socket.on('sound3', function () {
		socket.broadcast.emit('newSound3', 'newSound3');
	});
	socket.on('sound4', function () {
		socket.broadcast.emit('newSound4', 'newSound4');
	});


	// Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
	socket.on('message', function (message) {
		message = ent.encode(message);
		socket.broadcast.emit('message', {
			pseudo: socket.pseudo,
			message: message
		});
	});
});

server.listen(8080);