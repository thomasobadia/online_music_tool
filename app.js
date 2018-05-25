var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
	fs = require('fs');


io.sockets.on('connection', function (socket) {
	var $room
	var $players
	socket.on('room', function (room) {
		socket.join(room)
		$room = room
		if (Object.keys(io.sockets.adapter.rooms[$room]).length <= 1) {
			io.sockets.adapter.rooms[$room].computer = 0
			io.sockets.adapter.rooms[$room].touchDevice = 0
		}
	})
	socket.on('players', function (players) {
		$players = players
	})

	socket.on('newPseudo', function (pseudo) {
		socket.name = pseudo;
		console.log(socket.name)
		console.log(sessionid);
	})

	socket.on('newComputer', function () {
		if (io.sockets.adapter.rooms[$room].computer == 0) {
			io.sockets.adapter.rooms[$room].computer++
				console.log(io.sockets.adapter.rooms[$room].computer)
			console.log(sessionid);
			console.log($room)

		} else {
			io.sockets.adapter.rooms[$room].computer++
				var destination = '404.php';
			socket.emit('redirect', destination);
		}
		socket.on('disconnect', function () {
			io.sockets.adapter.rooms[$room].computer--
				console.log(io.sockets.adapter.rooms[$room].computer)
		});

	})
	socket.on('newTouchDevice', function () {
		if (io.sockets.adapter.rooms[$room].touchDevice < $players) {
			io.sockets.adapter.rooms[$room].touchDevice++
				console.log('ca a marcheeee')
			console.log(io.sockets.adapter.rooms[$room].touchDevice)
		} else {
			io.sockets.adapter.rooms[$room].touchDevice++
				var destination = '404.php';
			socket.emit('redirect', destination);
		}
		socket.on('disconnect', function () {
			io.sockets.adapter.rooms[$room].touchDevice--
				console.log('deconnection')
			console.log(io.sockets.adapter.rooms[$room].touchDevice)
		});

	})
	var sessionid = socket.id;
	socket.on('sound', function (socket) {
		io.to($room).emit('newSound', 'newSound')

	})

});

io.sockets.on

console.log('node start');

server.listen(8080);