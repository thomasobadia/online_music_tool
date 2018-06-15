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
const createAnchor = (currentKey)=>{
	if(!event.repeat && isRecording === 1){
	//creation of the div
	const newAnchorDiv = document.createElement('div')
	newAnchorDiv.setAttribute("class", 'anchor')

	//giving temporal info to the div
	newAnchorDiv.setAttribute("data-start", timeCursorPosition)

	//position of the div
	newAnchorDiv.style.transform = "translateX("+timeCursorPosition+"px)"

	//the div is not finished from being created yet
	newAnchorDiv.setAttribute("data-isfinished", 0)

	//the anchor is not played
	newAnchorDiv.setAttribute("data-isplayed", -1)

	//which instrument should we play
	newAnchorDiv.setAttribute("data-instrument", "piano")
	
	//what is the instrument id
	newAnchorDiv.setAttribute("data-id", currentInstrumentId)

	//what is the instrument key used
	newAnchorDiv.setAttribute("data-id", currentKey)

	//on which track the anchor should be placed
	$subTracks[whichTrack].appendChild(newAnchorDiv)
	
	//push the anchor in the array to save it
	anchors.push(newAnchorDiv)
	}             

}

//when a key is released finish anchor
const finishAnchor = (currentKey)=>{
//a key  
	console.log("test") 
	anchors.forEach(anchor => {

		let width
		//if the key is not drawn yet
		if(!anchor.dataset.isFinished){
			console.log(anchor.dataset.start)
			console.log(timeCursorPosition)

			//we record when where we release the key
			anchor.dataset.stop = timeCursorPosition

			//handle if we release the key after the end of the track
			// if(anchor.dataset.stop >= anchor.dataset.start){
					width = anchor.dataset.stop - anchor.dataset.start
				console.log("bitch")
			// }
			// else{
			//      width = trackContentWidth - anchor.dataset.start 
			// }
			console.log(width)
			anchor.style.width = width +"px"
			anchor.dataset.isFinished = 1
			
		}
	})

}
// const createAnchor = (currentKey)=>{
// 	if(!event.repeat && isRecording === 1){
// 	//creation of the div
// 	const newAnchorDiv = document.createElement('div')
// 	newAnchorDiv.setAttribute("class", 'anchor')

// 	//giving temporal info to the div
// 	newAnchorDiv.setAttribute("data-start", timeCursorPosition)

// 	//position of the div
// 	newAnchorDiv.style.transform = "translateX("+timeCursorPosition+"px)"

// 	//the div is not finished from being created yet
// 	newAnchorDiv.setAttribute("data-isfinished", 0)

// 	//the anchor is not played
// 	newAnchorDiv.setAttribute("data-isplayed", -1)

// 	//which instrument should we play
// 	newAnchorDiv.setAttribute("data-instrument", "piano")
	
// 	//what is the instrument id
// 	newAnchorDiv.setAttribute("data-id", currentInstrumentId)

// 	//what is the instrument key used
// 	newAnchorDiv.setAttribute("data-id", currentKey)

// 	//on which track the anchor should be placed
// 	$subTracks[whichTrack].appendChild(newAnchorDiv)
	
// 	//push the anchor in the array to save it
// 	anchors.push(newAnchorDiv)
// 	}             

// }

// //when a key is released finish anchor
// const finishAnchor = (currentKey)=>{
// //a key  
// 	console.log("test") 
// 	anchors.forEach(anchor => {

// 		let width
// 		//if the key is not drawn yet
// 		if(!anchor.dataset.isFinished){
// 			console.log(anchor.dataset.start)
// 			console.log(timeCursorPosition)

// 			//we record when where we release the key
// 			anchor.dataset.stop = timeCursorPosition

// 			//handle if we release the key after the end of the track
// 			// if(anchor.dataset.stop >= anchor.dataset.start){
// 					width = anchor.dataset.stop - anchor.dataset.start
// 				console.log("bitch")
// 			// }
// 			// else{
// 			//      width = trackContentWidth - anchor.dataset.start 
// 			// }
// 			console.log(width)
// 			anchor.style.width = width +"px"
// 			anchor.dataset.isFinished = 1
			
// 		}
// 	})

// }


socket.on('changingSound', (data) =>{
	if (!Modernizr.touchevents) {
		currentInstrumentId[data.name] = data.sound
		console.log("linstafiohzqduh = " + data.sound)
		// currentInstrument = instrumentArray[currentInstrumentId]
		
	}
})
if (Modernizr.touchevents) {
	desktop.style.display = "none"

	
	socket.emit('newTouchDevice', 'touchDevice')
	var pseudo = prompt('Enter your pseudo');
	if(!pseudo){
		const pseudos =  ['Burno','Bruno','Bruneau', 'Pruneau','Prudeau', 'Barno','Brano','Braneau', 'Praneau','Pradeau','Polo','Diego','Barjo','Rateau','Nano','Bento','Stephano','Rafaelo','PizzaYolo','Momo','Monnot']
		pseudo = pseudos[Math.floor(Math.random()*pseudos.length)]
	}
	socket.emit('newPseudo',{ name: pseudo, room: roomId });
} else {
	socket.emit('newComputer', 'computer')
	mobile.style.display = "none"
}
let firstConnection = 0
socket.on('addPlayer', (pseudo) => {
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

		if(!firstConnection){
			timeCursorScript()
		}

		firstConnection = 1
		
		
}})

socket.on('removePlayer',  (pseudo) => {
	if (!Modernizr.touchevents){
		removeElement(pseudo)
}})
socket.on('redirect', function (destination) {
	window.location.href = destination;
});
