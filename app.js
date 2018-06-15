var fs = require('fs');

const options = {
	key: fs.readFileSync("/etc/letsencrypt/live/harmonyngal.ovh/privkey.pem"),
	cert: fs.readFileSync("/etc/letsencrypt/live/harmonyngal.ovh/cert.pem")
};

// cert.pem  chain.pem  fullchain.pem  privkey.pem  README


var app = require('express')(),
	server = require('https').createServer(options , app),
	io = require('socket.io').listen(server),
	ent = require('ent')
	



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

	socket.on('newPseudo', function (data) {
		socket.name = data.name;
		console.log(data.name)
		console.log(data.room)
		socket.to(data.room).emit('addPlayer', data.name)
		
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
		socket.on('white_key_pressed', function(key){
			io.to($room).emit('newKeyPressed',{ name: socket.name, key: key })
			console.log(socket.name)
		})
		socket.on('white_key_released', function(key){
			io.to($room).emit('newKeyReleased',{ name: socket.name, key: key })
			console.log(socket.name)
		})
		socket.on('black_key_pressed', function(key){
			io.to($room).emit('newKeyPressed',{ name: socket.name, key: key })
			console.log(key)
		})
		socket.on('black_key_released', function(key){
			io.to($room).emit('newKeyReleased',{ name: socket.name, key: key })
			console.log(key)
		})
		socket.on('changing_sound', function(sound){
			io.to($room).emit('changingSound', { name: socket.name, sound: sound })
			console.log("sound = " + sound)
		})
		socket.on('disconnect', function () {
			io.sockets.adapter.rooms[$room].touchDevice--
			socket.to($room).emit('removePlayer', socket.name)
			console.log('deconnection')
			console.log(io.sockets.adapter.rooms[$room].touchDevice)
		});

	})
	
	var sessionid = socket.id;
	socket.on('sound', function (socket) {
		io.to($room).emit('newSound', 'newSound')

	})

});

console.log('node start');

server.listen(8080);