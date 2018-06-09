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
let isPause = true

console.log(timeCursorDistance)

window.addEventListener("resize", ()=>{
    trackContentWidth = $trackContent.offsetWidth
    timeCursorDistance = trackContentWidth / 100
    console.log(timeCursorDistance)
})


let timeCursorLimit = $volume.offsetLeft - $timeCursor.offsetLeft
console.log(timeCursorLimit)
const loop = ()=>{
    window.requestAnimationFrame(loop)
    mooveTimeCursor()
}

const mooveTimeCursor = ()=>{
    if(isPause === -1){
        timeCursorPosition+= timeCursorDistance
    }
    $timeCursor.style.transform = "translateX("+ timeCursorPosition + "px"
    if(timeCursorPosition > trackContentWidth){
        timeCursorPosition = 0
        isPause = 1
    }

}
loop()


document.addEventListener('keydown', (event)=>{
    if (event.keyCode === 32) {
        isPause = -isPause
    }
})

$play.addEventListener('mouseup', (event)=>{
    isPause = -1
})

$pause.addEventListener('mouseup', (event)=>{
    if(isPause == 1){
        timeCursorPosition = 0
    }
    isPause = 1
})




