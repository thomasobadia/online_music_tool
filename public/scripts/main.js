const $keyBoard = document.querySelector(".keyBoard")
const $whites = $keyBoard.querySelectorAll(".white")

const pianoSound = new Audio("../../public/sounds/pianoSound.wav")

let whiteLeft = 0



const createKeyboard = ()=>{
    for (let i = 0; i < $whites.length; i++ ){
        console.log(whiteLeft)
        $whites[i].style.height = $keyBoard.offsetHeight + "px"
        $whites[i].style.width = $keyBoard.offsetWidth/8 + "px"
        $whites[i].style.left = whiteLeft + "px"
        whiteLeft += parseInt($whites[i].style.width, 10) + 4 
    }
}

$whites.forEach($white => {
    $white.addEventListener("click", ()=>{
        pianoSound.currentTime = 0
        pianoSound.play()
    })
})

createKeyboard()

console.log($keyBoard.offsetWidth)