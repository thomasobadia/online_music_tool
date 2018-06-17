/**
 * ROOM CONNECTION AND SOCKET HANDLING
 */

var socket = io.connect('https://harmonyngal.ovh:8080/', { secure: true })
const button = document.querySelector('#button')
const $validate = document.querySelector('#validate')

// Removing anchor
const  removeElement = (id) => {
    var elem = document.getElementById(id)
	for (let k = 0; k<anchors.length; k++){
		if(anchors[k].dataset.name){
			if(anchors[k].dataset.name == id){
				anchors.splice(k,1)
				k--
			}
		}
	}
	return elem.parentNode.removeChild(elem)	
}

const desktop = document.querySelector(".desktop")
const mobile = document.querySelector(".mobile")

socket.emit('room', roomId)
socket.emit('players', players)

socket.on('changingSound', (data) =>{
	if (!Modernizr.touchevents) {
		currentInstrumentId[data.name] = data.sound
		console.log("linstafiohzqduh = " + data.sound)
		
		
	}
})
if (Modernizr.touchevents) {
	desktop.style.display = "none"

	
	socket.emit('newTouchDevice', 'touchDevice')
	var pseudo = prompt('Enter your pseudo')
	if(!pseudo){
		// REALLY FUNNY NAMES ARRAY
		const pseudos =  ['Burno','Bruno','Bruneau', 'Pruneau','Prudeau', 'Barno','Brano','Braneau', 'Praneau','Pradeau','Polo','Diego','Barjo','Rateau','Nano','Bento','Stephano','Rafaelo','PizzaYolo','Momo','Monnot']
		pseudo = pseudos[Math.floor(Math.random()*pseudos.length)]
	}
	socket.emit('newPseudo',{ name: pseudo, room: roomId })
} else {
	socket.emit('newComputer', 'computer')
	mobile.style.display = "none"
}
let firstConnection = 0
socket.on('addPlayer', (pseudo) => {
	if (!Modernizr.touchevents){
		/**
		 * CREATING TRACK ON CONNECTION
		 */
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

		const  newTrackSubtracks = document.createElement('div')
			newTrackSubtracks.setAttribute("class", 'tracks__track__sub_tracks')
			newTrackContent.appendChild(newTrackSubtracks)
			

		for(let i = 1 ; i < 4 ; i++){
			let  newTrackSubtrack = document.createElement('div')
			newTrackSubtrack.setAttribute("class", 'sub_track')
			newTrackSubtracks.appendChild(newTrackSubtrack)

			let  newTrackSubtrackCross = document.createElement('img')
			newTrackSubtrackCross.setAttribute("class", 'sub_track__cross')
			newTrackSubtrackCross.setAttribute("src", '../assets/img/web/x.svg')
			newTrackSubtrack.appendChild(newTrackSubtrackCross)
		}
		
		const  newTrackVolume = document.createElement('div')
			newTrackVolume.setAttribute("class", 'tracks__track__volume')
			newTrack.appendChild(newTrackVolume)

		if(!firstConnection){
			timeCursorScript()
		}
		/**
		 * DELETING A LINE ON TRACK
		 */
		const deleteLine = () =>{
			const crosses = document.querySelectorAll('.sub_track__cross')
			for(let s = 0; s < crosses.length; s++){   
				crosses[s].addEventListener('click',()=>{
					for (let k = 0; k<anchors.length; k++){
						if(anchors[k].dataset.track == s%3 && crosses[s].closest('.room__content__tracks__track').id == anchors[k].dataset.name){
								anchors[k].outerHTML = ''
								anchors.splice(k,1)
								k--
						}
					}
				})
			}
		}
		deleteLine()
		firstConnection = 1
		
		
}})

socket.on('removePlayer',  (pseudo) => {
	if (!Modernizr.touchevents){
		removeElement(pseudo)
}})
socket.on('redirect', function (destination) {
	window.location.href = destination
})


/**
 * VOICE SAMPLER
 */

if (navigator.mediaDevices) {
    var constraints = { audio: true }
    var chunks = []
  
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
  
      var mediaRecorder = new MediaRecorder(stream)
  

        
	socket.on('startRecording', function () {
		mediaRecorder.start()
		$sampleRecord.style.background = "red"
		$sampleRecord.style.color = "black"
		isRecordingMic = 1
	})
	  
	socket.on('stopRecording', function () {
	if(!isRecordingMic){
		}
		else{
		mediaRecorder.stop()
		isRecordingMic = 0
		}
		setTimeout(() => {
			micSampler.add(
				"C1", audio.href
			)
		}, 1000)
	})
  
    
      mediaRecorder.onstop = function(e) {  
        var clipName = prompt('Enter a name for your sound clip')     
        audio.controls = true
        var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' })
        var audioURL = URL.createObjectURL(blob)
        audio.href = audioURL

      }
      mediaRecorder.ondataavailable = function(e) {
        chunks.splice(0, 1, e.data)
      }
    })
    .catch(function(err) {
      console.log('The following error occurred: ' + err)
    })
  }




