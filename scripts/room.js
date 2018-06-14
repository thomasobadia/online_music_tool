var socket = io.connect('https://harmonyngal.ovh:8080/', { secure: true })
const button = document.querySelector('#button')
const $validate = document.querySelector('#validate')
const  removeElement = (id) => {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

const desktop = document.querySelector(".desktop")
const mobile = document.querySelector(".mobile")

socket.emit('room', roomId);
socket.emit('players', players);


socket.on('newKeyPressed', (key) =>{
	if (!Modernizr.touchevents) {
		sampler.triggerAttack(key)
		createAnchor(key)
	}
})
socket.on('newKeyReleased', (key) =>{
	if (!Modernizr.touchevents) {
		sampler.triggerRelease(key)
		finishAnchor(key)
	}
})
socket.on('changingSound', (sound) =>{
	if (!Modernizr.touchevents) {
		console.log(sound)
		currentInstrumentId = sound
		// currentInstrument = instrumentArray[currentInstrumentId]
		
	}
})
if (Modernizr.touchevents) {
	desktop.style.display = "none"

	
	socket.emit('newTouchDevice', 'touchDevice')
	var pseudo = prompt('Enter your pseudo');
	if(!pseudo){
		pseudo = 'Anonymous'
	}
	socket.emit('newPseudo',{ name: pseudo, room: roomId });
} else {
	socket.emit('newComputer', 'computer')
	mobile.style.display = "none"
}

socket.on('addPlayer',  (pseudo) => {
	if (!Modernizr.touchevents){
		const  tracksContainer = document.querySelector('.room__content__tracks')
		
		const  newTrack = document.createElement('div')
			newTrack.setAttribute("id", pseudo)
			newTrack.setAttribute("class", 'room__content__tracks__track')
			tracksContainer.appendChild(newTrack)

		const  newTrackInfo = document.createElement('div')
			newTrackInfo.setAttribute("class", 'room__content__tracks__track__info')
			newTrack.appendChild(newTrackInfo)	

		const  newTrackInfoName = document.createElement('div')
			newTrackInfoName.setAttribute("class", 'room__content__tracks__track__info__name')
			newTrackInfo.appendChild(newTrackInfoName)
			newTrackInfoName.innerHTML = pseudo
			
		const  newTrackInfoColor = document.createElement('div')
			newTrackInfoColor.setAttribute("class", 'room__content__tracks__track__info__color')
			newTrackInfo.appendChild(newTrackInfoColor)

		// const newMic = document.createElement('img')
		// 	newMic.setAttribute("class", 'room__content__tracks__track__info__mic')
		// 	newMic.setAttribute("src", '../assets/img/web/mic.svg')
		// 	newTrackInfo.appendChild(newMic)


		const  newTrackInfoMute = document.createElement('div')
			newTrackInfoMute.setAttribute("class", 'room__content__tracks__track__info__mute')
			newTrackInfo.appendChild(newTrackInfoMute)

		const  newTrackContent = document.createElement('div')
			newTrackContent.setAttribute("class", 'room__content__tracks__track__content')
			newTrack.appendChild(newTrackContent)


		const  newTrackStamp = document.createElement('div')
			newTrackStamp.setAttribute("class", 'tracks__track__time_stamps')
			newTrackContent.appendChild(newTrackStamp)
		
		for(let j = 1 ; j < 5 ; j++){
			let  newTrackStampSingle = document.createElement('div')
			newTrackStampSingle.setAttribute("class", 'time_stamp')
			newTrackStamp.appendChild(newTrackStampSingle)
			let newTrackStampSingle_div = document.createElement('div')
			newTrackStampSingle.appendChild(newTrackStampSingle_div)
			newTrackStampSingle_div.innerHTML = j
		}

		console.log("bitch")
		const  newTrackSubtracks = document.createElement('div')
			newTrackSubtracks.setAttribute("class", 'tracks__track__sub_tracks')
			newTrackContent.appendChild(newTrackSubtracks)
			

		for(let i = 1 ; i < 4 ; i++){
			let  newTrackSubtrack = document.createElement('div')
			console.log(newTrackSubtracks)
			newTrackSubtrack.setAttribute("class", 'sub_track')
			newTrackSubtracks.appendChild(newTrackSubtrack)
		}
		
		const  newTrackVolume = document.createElement('div')
			newTrackVolume.setAttribute("class", 'tracks__track__volume')
			newTrack.appendChild(newTrackVolume)

		timeCursorScript()
		
		
}})

socket.on('removePlayer',  (pseudo) => {
	if (!Modernizr.touchevents){
		removeElement(pseudo)
}})
socket.on('redirect', function (destination) {
	window.location.href = destination;
});
