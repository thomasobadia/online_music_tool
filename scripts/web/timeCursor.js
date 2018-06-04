const $timeCursor = document.querySelector(".time_cursor")
const $play = document.querySelector(".room__footer__parameters__audio_controls__play")
const $record = document.querySelector(".room__footer__parameters__audio_controls__record")
const $pause = document.querySelector(".room__footer__parameters__audio_controls__pause")

let timeCursorPosition = 0
let isPause = true


const loop = ()=>{
    window.requestAnimationFrame(loop)
    mooveTimeCursor()
}

const mooveTimeCursor = ()=>{
    if(isPause === -1){
        timeCursorPosition+= 1
    }
    $timeCursor.style.transform = "translateX("+ timeCursorPosition + "px"

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


