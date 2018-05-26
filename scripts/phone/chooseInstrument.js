const $instruments = document.querySelector(".instruments")
const $synthesizers = document.querySelector(".synthesizers")
const $drumpads = document.querySelector(".drumpads")
const $sampler = document.querySelector(".sampler")

const $instrumentsSoundSelection = $instruments.querySelector(".all_sounds")
const $synthesizersSoundSelection = $synthesizers.querySelector(".all_sounds")
const $drumpadsSoundSelection = $drumpads.querySelector(".all_sounds")
const $samplerSoundSelection = $sampler.querySelector(".all_sounds")

const $instrumentsPrimaryButton = $instruments.childNodes[1]
const $synthesizersPrimaryButton = $synthesizers.childNodes[1]
const $drumpadsPrimaryButton = $drumpads.childNodes[1]
const $samplerPrimaryButton = $sampler.childNodes[1]


const $instrumentsSounds = $instruments.querySelectorAll(".all_sounds>*")
const $synthesizersSounds = $synthesizers.querySelectorAll(".all_sounds>*")
const $drumpadsSounds = $drumpads.querySelectorAll(".all_sounds>*")
const $samplerSounds = $sampler.querySelectorAll(".all_sounds>*")

const $instrumentsColorFilter = document.querySelector(".blue_filter")
const $synthesizersColorFilter = document.querySelector(".purple_filter")
const $drumpadsColorFilter = document.querySelector(".pink_filter")
const $samplerColorFilter = document.querySelector(".green_filter")

console.log($instrumentsColorFilter)

const allSounds = [$instrumentsSounds, $synthesizersSounds, $drumpadsSounds, $samplerSounds]

const $chooseSound = document.querySelector(".choose_sound")
const $soundSelected = document.querySelector(".primary_button_sound_selected")

const $gradientLine = document.querySelector(".gradient_line")



// $instrumentsSoundsSelection.addEventListener("touchup", ()=>{
//     $instrumentsSounds.style.display = "none"
//     $instrumentsSoundSelection.forEach(child => {
//         child.addEventListener.display = "block"
//     })
// })


//acces to the types of instruments
$soundSelected.addEventListener("touchstart", ()=>{
    $keyBoard.style.visibility = "hidden"
    $gradientLine.style.visibility = "hidden"
    $chooseSound.style.visibility = "visible"

})


//acces from all the sounds of an instrument
// const accessSoundsSelection = (allSound, parent, button)=>{
//     parent.addEventListener("touchstart", ()=>{
//         allSound.style.visibility = "visible" 
//         const sounds =  Array.from(allSound.children)
//         sounds.forEach(sound => {
//             sound.style.visibility = "visible"
//             console.log(button)
//             sound.addEventListener("touchstart", ()=>{ 
//                 changeSampleAudioFile(sound, sampler)
//                 $keyBoard.style.visibility = "visible"
//                 $chooseSound.style.visibility = "hidden"
                
//                 sounds.forEach(sound =>{
//                     sound.style.visibility = "hidden"  
//                 })
                
//             })
//         })
//     })
// }

console.log($soundSelected.children)
const accessSoundsSelection = (instrumentColorFilter, soundSelection, soundPrimaryButton)=>{
    const sounds = Array.from(soundSelection.children)
    instrumentColorFilter.addEventListener("touchstart", ()=>{
        soundPrimaryButton.style.opacity = 0
        soundSelection.style.visibility = "visible"
        sounds.forEach(sound=>{
            sound.style.visibility = "visible"
        })  
    })
    soundPrimaryButton.addEventListener("touchstart", ()=>{
        soundPrimaryButton.style.opacity = 0
        soundSelection.style.visibility = "visible"
        sounds.forEach(sound=>{
            sound.style.visibility = "visible"
        })  
    })
    sounds.forEach(sound => {
        sound.addEventListener("touchstart", ()=>{
            changeSampleAudioFile(sound)
             $soundSelected.children[0].innerHTML = sound.dataset.sound
            $keyBoard.style.visibility = "visible"
            $gradientLine.style.visibility = "visible"
            $chooseSound.style.visibility = "hidden"
            soundSelection.style.visibility = "hidden"
            sounds.forEach(sound =>{
                sound.style.visibility = "hidden"
                soundPrimaryButton.style.opacity = 1;
            })
        })
    });
    
}


//change the audio file of the sampler when you click on a sound
allSounds.forEach(sounds => {
    sounds.forEach(sound => {
        
    })
})

const changeSampleAudioFile = (sound)=>{
    sampler.add(
        "C3" , "../assets/sounds/" + sound.dataset.sound +".wav")
    console.log(audio.src)
    sampler.toMaster()
}

accessSoundsSelection($instrumentsColorFilter, $instrumentsSoundSelection, $instrumentsPrimaryButton)
accessSoundsSelection($synthesizersColorFilter, $synthesizersSoundSelection, $synthesizersPrimaryButton)
accessSoundsSelection($drumpadsColorFilter, $drumpadsSoundSelection, $drumpadsPrimaryButton)
accessSoundsSelection($samplerColorFilter, $samplerSoundSelection,  $samplerPrimaryButton)