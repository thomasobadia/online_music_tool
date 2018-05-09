const $keyBoard = document.querySelector(".keyBoard")
const $whites = $keyBoard.querySelectorAll(".white")



const createKeyboard = ()=>{
    let whiteLeft = 0
    for (let i = 0; i < $whites.length; i++ ){
        $whites[i].style.height = $keyBoard.offsetHeight + "px"
        $whites[i].style.width = $keyBoard.offsetWidth/8 + "px"
        $whites[i].style.left = whiteLeft + "px"
        whiteLeft += parseInt($whites[i].style.width, 10) + 4 
    }
}