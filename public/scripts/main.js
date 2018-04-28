const $keyBoard = document.querySelector(".keyBoard")
const $white = $keyBoard.querySelectorAll(".white")
let whiteLeft = 0



const createKeyboard = ()=>{
    for (let i = 0; i < $white.length; i++ ){
        console.log(whiteLeft)
        $white[i].style.height = $keyBoard.offsetHeight + "px"
        $white[i].style.width = $keyBoard.offsetWidth/8 + "px"
        $white[i].style.left = whiteLeft + "px"
        whiteLeft += parseInt($white[i].style.width, 10) + 4 
    }
}

createKeyboard()

console.log($keyBoard.offsetWidth)