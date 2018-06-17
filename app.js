/***********************************/
 /*NODE.JS SSERVER CONFIGURATION*/
/***********************************/



// Enabling HTTPS on Node Server

var fs = require('fs')

const options = {
	key: fs.readFileSync("/etc/letsencrypt/live/harmonyngal.ovh/privkey.pem"),
	cert: fs.readFileSync("/etc/letsencrypt/live/harmonyngal.ovh/cert.pem")
}



/**
 *  Including Modules
 */
var app = require('express')(),
	server = require('https').createServer(options , app),
	io = require('socket.io').listen(server),
	ent = require('ent')
	



/**	
 * Connection callback Function
 */

io.sockets.on('connection',  (socket) =>{
	var $room
	var $players

	/**
	 * Room Variables Init
	 */
	socket.on('room',  (room) =>{
		socket.join(room)
		$room = room
		if (Object.keys(io.sockets.adapter.rooms[$room]).length <= 1) {
			io.sockets.adapter.rooms[$room].computer = 0
			io.sockets.adapter.rooms[$room].touchDevice = 0
		}
	})

	/**	
	 * Number of players
	 */

	socket.on('players', (players) => {
		$players = players
	})

	socket.on('newPseudo', (data) => {
		socket.name = data.name
		socket.to(data.room).emit('addPlayer', data.name)
		
	})

	/**
	 * Computer Connerction Callback
	 */
	socket.on('newComputer',  () => {

		/**	
		 * Updating Computer Number
		 */
		if (io.sockets.adapter.rooms[$room].computer == 0) {
			io.sockets.adapter.rooms[$room].computer++

		} else {
			io.sockets.adapter.rooms[$room].computer++
			var destination = 'computer-error.php'
			socket.emit('redirect', destination)
		}
		socket.on('disconnect', function () {
			io.sockets.adapter.rooms[$room].computer--
		})

	})

	/**
	 * Touch Device Connection Callback
	 */
	socket.on('newTouchDevice', function () {
		/**	
		 * Updating Touch Devices Number
		 */
		if (io.sockets.adapter.rooms[$room].touchDevice < $players) {
			io.sockets.adapter.rooms[$room].touchDevice++
		} else {
			io.sockets.adapter.rooms[$room].touchDevice++
			var destination = 'touch-error.php'
			socket.emit('redirect', destination)
		}

		/**
		 * Touch Device Keyboard handling
		 */

		
		 //white key pressed
		socket.on('white_key_pressed', function(key){
			io.to($room).emit('newKeyPressed',{ name: socket.name, key: key })
		})
		
		//white key released
		socket.on('white_key_released', function(key){
			io.to($room).emit('newKeyReleased',{ name: socket.name, key: key })
		})
		
		//black key pressed
		socket.on('black_key_pressed', function(key){
			io.to($room).emit('newKeyPressed',{ name: socket.name, key: key })
		})
		
		//black key released
		socket.on('black_key_released', function(key){
			io.to($room).emit('newKeyReleased',{ name: socket.name, key: key })
		})
		
		//drumpads key pressed
		socket.on('drumpad_pressed', function(key){
			io.to($room).emit('newKeyPressed',{ name: socket.name, key: key })
		})
		
		//drumpads key released
		socket.on('drumpad_released', function(key){
			io.to($room).emit('newKeyReleased',{ name: socket.name, key: key })
		})

		/**
		 * changing sound 
		 */

		socket.on('changing_sound', function(sound){
			io.to($room).emit('changingSound', { name: socket.name, sound: sound })
		})


		/**
		 * Recording
		 */
		
		//stop recording
		socket.on('stop_recording', function(){
			io.to($room).emit('stopRecording', 0)
		})

		//start recording
		socket.on('start_recording', function(){
			io.to($room).emit('startRecording', 0)
		})

		/**
		 * handling disconnect
		 */
		socket.on('disconnect', function () {
			io.sockets.adapter.rooms[$room].touchDevice--
			socket.to($room).emit('removePlayer', socket.name)
		})

	})
	
	var sessionid = socket.id

})


server.listen(8080)