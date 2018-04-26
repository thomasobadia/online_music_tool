var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
	fs = require('fs');

// Chargement de la page index.html
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});
var audio = new Audio('kick.mp3');

io.sockets.on('connection', function (socket, pseudo) {
	// Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
	socket.on('nouveau_client', function (pseudo) {
		pseudo = ent.encode(pseudo);
		socket.pseudo = pseudo;
		socket.broadcast.emit('nouveau_client', pseudo);
	});
	socket.on('click', function () {
		sound.currentTime = 0
		audio.play();
	})

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