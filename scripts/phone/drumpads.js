const $drumpadKeyboard = document.querySelector(".drumpad_keyboard")
console.log($drumpadKeyboard)
const $drumpadKeys = document.querySelectorAll(".drumpad_keys")

//the last one is the name of the folder
const drumpadTest = ["hi-hat", "kick", "open-hat", "piano", "snare", "test", "drumpad_test"]

let currentDrumpad = drumpadTest

const drumpad = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/" + currentDrumpad[6] + "/" + currentDrumpad[0] + ".wav",
    "C1" : "../assets/sounds/drumpads/" + currentDrumpad[6] + "/" + currentDrumpad[1] + ".wav",
    "C2" : "../assets/sounds/drumpads/" + currentDrumpad[6] + "/" + currentDrumpad[2] + ".wav",
    "C3" : "../assets/sounds/drumpads/" + currentDrumpad[6] + "/" + currentDrumpad[3] + ".wav",
    "C4" : "../assets/sounds/drumpads/" + currentDrumpad[6] + "/" + currentDrumpad[4] + ".wav",
    "C5" : "../assets/sounds/drumpads/" + currentDrumpad[6] + "/" + currentDrumpad[5] + ".wav",

}, function(){
    //sampler will repitch the closest sample
    drumpad.toMaster()
})

for(let i = 0; i< $drumpadKeys.length; i++){
    $drumpadKeys[i].addEventListener("touchstart", ()=>{ drumpad.triggerAttack("C" + i)})
    $drumpadKeys[i].addEventListener("touchend", ()=>{ drumpad.triggerRelease("C" + i)})
}
