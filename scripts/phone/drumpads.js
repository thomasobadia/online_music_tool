/***********************************/
 /*DRUM PADS*/
/***********************************/


const $drumpadKeyboard = document.querySelector(".drumpad_keyboard")
const $drumpadKeys = document.querySelectorAll(".drumpad_keys")

//the last one is the name of the folder
const allDrumpads = [drumpadTest]
let currentDrumpad = allDrumpads[0]

for(let i = 0; i< $drumpadKeys.length; i++){
    $drumpadKeys[i].addEventListener("touchstart", ()=>{ socket.emit('drumpad_pressed', "C" + i)})
    $drumpadKeys[i].addEventListener("touchend", ()=>{ socket.emit('drumpad_released', "C" + i)})
}
