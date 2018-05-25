var socket = io.connect('http://51.38.176.227:8080')
const button = document.querySelector('#button')
const $validate = document.querySelector('#validate')

socket.emit('room', roomId);
socket.emit('players', players);

if (Modernizr.touchevents) {
	socket.emit('newTouchDevice', 'touchDevice')

} else {
	socket.emit('newComputer', 'computer')
}
const updatePseudo = () => {
	var pseudo = document.querySelector('#pseudo').value
	console.log('hello')
	socket.emit('newPseudo', pseudo);
	console.log(pseudo)
}
button.addEventListener('mousedown', () => {
	socket.emit('sound', 'sound');
	console.log('hello');
})
socket.on('newSound', function () {
	console.log('yeah');
})
socket.on('hello', function () {
	console.log('hello');
})

socket.on('redirect', function (destination) {
	window.location.href = destination;
});