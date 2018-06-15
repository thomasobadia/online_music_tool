/***********************************/
 /*CREATE THE KEY BOARD*/
/***********************************/

const $keyBoard = document.querySelector("#keyBoard")
const $whites = $keyBoard.querySelectorAll(".white")
const $blacks = $keyBoard.querySelectorAll(".black")

const $gradientLine = document.querySelector(".gradient_line")


let windowWidth = window.innerWidth


//create Keyboard
    let whiteLeft = 0

    //create each white keys 
    for (let i = 0; i < $whites.length; i++ ){
        $whites[i].style.height = $keyBoard.offsetHeight + "px"
        $whites[i].style.width = windowWidth/8 + "px"
        $whites[i].style.left = whiteLeft + "px"
        whiteLeft += parseInt($whites[i].style.width, 10) + 4 
        $whites[i].addEventListener("touchend", ()=>{
        })
    }

    //create each black keys 
    let blackLeft = $whites[1].offsetWidth-$keyBoard.offsetWidth*0.07/2
    for (let j = 0; j < $blacks.length; j++ ){
        $blacks[j].style.height = $keyBoard.offsetHeight*0.6 + "px"
        $blacks[j].style.width = windowWidth*0.07 + "px"
        $blacks[j].style.left = blackLeft + "px"
        blackLeft += parseFloat($whites[j].style.width)*1.022
        $blacks[j].addEventListener("touchend", ()=>{
        })
    }


let keyBoardLeft = 0
let keyBoardDistance = 0
let keyBoardStart 

console.log(keyBoardLeft)

//moove keyboard from left to right when swipe on the gradient line
    $gradientLine.addEventListener("touchstart",(e)=>{
        console.log($keyBoard.style.left)
        keyBoardLeft = $keyBoard.style.left
        keyBoardStart =  parseInt(e.changedTouches[0].clientX)
        console.log(keyBoardStart)
        e.preventDefault()
    })

    $gradientLine.addEventListener("touchmove", (e)=>{
        
        keyBoardDistance = parseInt(e.changedTouches[0].clientX) - keyBoardStart
            if(keyBoardLeft){ keyBoardLeft = parseInt(keyBoardLeft) }
        $keyBoard.style.left =  keyBoardLeft + keyBoardDistance + "px"
        e.preventDefault()
    })

//can't moove the screen
window.addEventListener('touchmove', function(e) {
    e.preventDefault()
})





