var socket = io.connect('http://51.38.176.227:8080')
const button = document.querySelector('#button')
const $validate = document.querySelector('#validate')
const  removeElement = (id) => {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

socket.emit('room', roomId);
socket.emit('players', players);

if (Modernizr.touchevents) {
	socket.emit('newTouchDevice', 'touchDevice')
	var pseudo = prompt('Enter your pseudo');
	if(!pseudo){
		pseudo = 'Anonymous'
	}
	socket.emit('newPseudo',{ name: pseudo, room: roomId });
} else {
	socket.emit('newComputer', 'computer')
}

socket.on('addPlayer',  (pseudo) => {
	if (!Modernizr.touchevents){
		var div = document.createElement('div')
		div.setAttribute("id", pseudo);
		div.innerHTML = pseudo;
		document.body.appendChild(div)
}})
socket.on('removePlayer',  (pseudo) => {
	if (!Modernizr.touchevents){
		removeElement(pseudo)
}})
socket.on('redirect', function (destination) {
	window.location.href = destination;
});