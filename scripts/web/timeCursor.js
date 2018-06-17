/***********************************/
 /*HANDLE TIME CURSOR AND ANCHORS*/
/***********************************/




/**                 /** 
 * time cursor  *******
 */            
 

let idCurrentInstrument
const anchors = []
const timeCursorScript = ()=>{
console.log("je suis appelé")
const $trackContent = document.querySelector(".room__content__tracks__track__content")

const $timeCursor = document.querySelector(".time_cursor")
const $play = document.querySelector(".room__footer__parameters__audio_controls__play")
const $record = document.querySelector(".room__footer__parameters__audio_controls__record")
const $pause = document.querySelector(".room__footer__parameters__audio_controls__pause")
const $volume = document.querySelector(".tracks__track__volume")

let trackContentWidth = $trackContent.offsetWidth

//speed of the timeCursor
let timeCursorBPM = 500
let timeCursorDistance = trackContentWidth / timeCursorBPM
let timeCursorPosition = 0

//are we playing the sound
let isPause = true

//are we recording the sound
let isRecording = false

//on which subtrack are we going to record
let whichTrack = 2

//calculate the lenght of the track
let timeCursorLimit = $volume.offsetLeft - $timeCursor.offsetLeft


console.log(timeCursorDistance)

//when we resize
window.addEventListener("resize", ()=>{
    trackContentWidth = $trackContent.offsetWidth
    timeCursorDistance = trackContentWidth / timeCursorBPM
    console.log(timeCursorDistance)
})


/**
 * mooving the cursor
 */


//make the cursor advance
const mooveTimeCursor = ()=>{
    if(isPause === -1){
        timeCursorPosition+= timeCursorDistance
    }
    $timeCursor.style.transform = "translateX("+ timeCursorPosition + "px"
    if(timeCursorPosition > trackContentWidth){
        timeCursorPosition = 0
        sampler.releaseAll()
        isPause = 1
        isRecording = 0
    }

}

//moving time cursor with a loop
const loop = ()=>{
    window.requestAnimationFrame(loop)
    mooveTimeCursor()
    
}
loop()



/**
 * Play pause and record
 */

//play/pause when we press space
document.addEventListener('keydown', (event)=>{
    if (event.keyCode === 32) {
        isPause = -isPause
        isRecording = -1
    }
})

//play when we press play
$play.addEventListener('mouseup', (event)=>{
    sampler.releaseAll()
    isPause = -1
    isRecording = -1
})

//record when we press record
$record.addEventListener('mouseup', (event)=>{
    timeCursorPosition = 0
    sampler.releaseAll()
    //change the subtrack where we are recording
    if(whichTrack!=2){
        whichTrack+=1
    }
    else{
        whichTrack = 0
    }
    isPause = -1
    isRecording = 1
})

//pause when we press pause
$pause.addEventListener('mouseup', (event)=>{
    //if already paused put the cursor at 0
    if(isPause == 1){
        timeCursorPosition = 0
    }
    isPause = 1
    sampler.releaseAll()
    isRecording = -1
})

/**
 * ANCHORS
 */


    
    
//when a key is pressed create anchor
const createAnchor = (currentKey, name)=>{
    const $subTracks = document.querySelectorAll("#"+name+" .tracks__track__sub_tracks .sub_track")
        if(!event.repeat && isRecording === 1){
        //creation of the div
        const newAnchorDiv = document.createElement('div')
        newAnchorDiv.setAttribute("class", 'anchor')

        //who played
        newAnchorDiv.setAttribute("data-name", name)
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
        newAnchorDiv.setAttribute("data-id", currentInstrumentId[name])

        //what is the instrument key used
        newAnchorDiv.setAttribute("data-key", currentKey)

        //on which track the anchor should be placed
        newAnchorDiv.setAttribute("data-track", whichTrack)        
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

/**
 * ANCHOR DETECTION
 */

 //handle collision between anchor and cursor
const AnchorCursorLoop = ()=>{
    // console.log(anchors)
    if(anchors){
    window.requestAnimationFrame(AnchorCursorLoop)
    anchors.forEach(anchor => {
        //if we are not recording
        if(isRecording === -1){
            // if there is a collision between the anchor and the time cursor && the anchor is not already being played
            if( timeCursorPosition > anchor.dataset.start && timeCursorPosition < anchor.dataset.stop && anchor.dataset.isplayed == -1){
                console.log(anchor.dataset.id)
                instrumentArray[anchor.dataset.id].triggerAttack(anchor.dataset.key)
                //the anchor is being played and can't be retrigered
                anchor.dataset.isplayed = 1
            }
            if(timeCursorPosition > anchor.dataset.stop && anchor.dataset.isplayed == 1){
                console.log(anchor.dataset.id)
                instrumentArray[anchor.dataset.id].triggerRelease(anchor.dataset.key)
                //the anchor is being played and can't be retrigered
                anchor.dataset.isplayed = -1
            }
        }
    })
}   

}
AnchorCursorLoop()

//when receiving signal from a key pressed from mobile, trigger the attack on the computer
socket.on('newKeyPressed', (data) =>{
    if (!Modernizr.touchevents) {
        instrumentArray[currentInstrumentId[data.name]].triggerAttack(data.key)
        createAnchor(data.key, data.name)
    }
})

//when receiving signal from a key released from mobile, trigger the attack on the computer
socket.on('newKeyReleased', (data) =>{
    if (!Modernizr.touchevents) {
        instrumentArray[currentInstrumentId[data.name]].triggerRelease(data.key)
        finishAnchor(data.key)
    }
})

}
