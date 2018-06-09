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
    timeCursorDistance = trackContentWidth / 100
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

$pause.addEventListener('mouseup', (event)=>{
    if(isPause == 1){
        timeCursorPosition = 0
    }
    isPause = 1
    sampler.releaseAll()
    isRecording = -1
})




