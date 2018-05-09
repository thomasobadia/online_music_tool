
createKeyboard()




const decreasingSound = (piano, interval)=>{
    let volume = piano
    let amount = 0.01
    if(pianoSound.volume < amount + 0.015){
        clearInterval(interval)
        console.log("fuck")
    }
    if (volume >= amount){
        volume-= amount
        pianoSound.volume = volume
        console.log(pianoSound.volume)
    }
}











// $whites.forEach($white => {
//     $white.addEventListener("mousedown", ()=>{
//         pianoSound.volume = 1
//         pianoSound.currentTime = 0
//         pianoSound.play()
//     })
//     $white.addEventListener("mouseup", ()=>{
//         console.log("up")
//         const interval = window.setInterval(() => {
//             decreasingSound(pianoSound.volume, interval)
//             console.log(pianoSound.volume)
//         }, 1)
       
        
//     })
// })

// const pianoSound = new Audio("../../public/sounds/pianoSound.wav")