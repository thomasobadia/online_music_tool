/***********************************/
 /*HANDLE CHANGING INSTRUMENTS AND INTRUMENT MENU*/
/***********************************/

//sound type
const $instruments = document.querySelector(".instruments")
const $synthesizers = document.querySelector(".synthesizers")
const $drumpads = document.querySelector(".drumpads")
const $sampler = document.querySelector(".sampler")

//sound selection
const $instrumentsSoundSelection = $instruments.querySelector(".all_sounds")
const $synthesizersSoundSelection = $synthesizers.querySelector(".all_sounds")
const $drumpadsSoundSelection = $drumpads.querySelector(".all_sounds")
const $samplerSoundSelection = $sampler.querySelector(".all_sounds")

//sound buttons
const $instrumentsPrimaryButton = $instruments.childNodes[1]
const $synthesizersPrimaryButton = $synthesizers.childNodes[1]
const $drumpadsPrimaryButton = $drumpads.childNodes[1]
const $samplerPrimaryButton = $sampler.childNodes[1]

//all instruments by type
const $instrumentsSounds = $instruments.querySelectorAll(".all_sounds>*")
const $synthesizersSounds = $synthesizers.querySelectorAll(".all_sounds>*")
const $drumpadsSounds = $drumpads.querySelectorAll(".all_sounds>*")
const $samplerSounds = $sampler.querySelectorAll(".all_sounds>*")

//instrument color filters
const $instrumentsColorFilter = document.querySelector(".blue_filter")
const $synthesizersColorFilter = document.querySelector(".purple_filter")
const $drumpadsColorFilter = document.querySelector(".pink_filter")
const $samplerColorFilter = document.querySelector(".green_filter")

//sampler page
const $samplerRecorder = document.querySelector(".sampler_page")

//all instruments sounds
const allSounds = [$instrumentsSounds, $synthesizersSounds, $drumpadsSounds, $samplerSounds]


const $chooseSound = document.querySelector(".choose_sound")
const $soundSelected = document.querySelector(".primary_button_sound_selected")

let isSelectionningSound = 0




//acces to the types of instruments
$soundSelected.addEventListener("touchstart", ()=>{
    $keyBoard.style.visibility = "hidden"
    $drumpadKeyboard.style.visibility = "hidden"
    $gradientLine.style.visibility = "hidden"
    $chooseSound.style.visibility = "visible"

})





/**
 * handle instruments selection
 */
const accessSoundsSelection = (instrumentColorFilter, soundSelection, soundPrimaryButton)=>{
    
    //we need a real array
    const sounds = Array.from(soundSelection.children)

    //displaying the sounds inside each sound_type :

    //if we click on the whole section
    instrumentColorFilter.addEventListener("touchstart", ()=>{
        $samplerRecorder.visibility = "hidden"
        if(!isSelectionningSound){
        soundPrimaryButton.style.opacity = 0
        soundSelection.style.visibility = "visible"
        sounds.forEach(sound=>{
            sound.style.visibility = "visible"
        })  
        isSelectionningSound = 1
        }
    })
    //or the button
    soundPrimaryButton.addEventListener("touchstart", ()=>{
        if(!isSelectionningSound){
            soundPrimaryButton.style.opacity = 0
            soundSelection.style.visibility = "visible"
            sounds.forEach(sound=>{
                sound.style.visibility = "visible"
            })  
        isSelectionningSound = 1
        }
    })

    //setting the good audio file, removing the choose instrument selection screen and selecting the good keyboard
    sounds.forEach(sound => {
        sound.addEventListener("touchstart", ()=>{
            $soundSelected.children[0].innerHTML = sound.dataset.sound
            $gradientLine.style.visibility = "visible"
            $chooseSound.style.visibility = "hidden"
            soundSelection.style.visibility = "hidden"
            sounds.forEach(sound =>{
                sound.style.visibility = "hidden"
                soundPrimaryButton.style.opacity = 1
            })
            isSelectionningSound = 0

            //displaying either the keyboard, the drumpad or the sampler
            console.log("pute = " + instrumentColorFilter.dataset.instrument)
            if(instrumentColorFilter.dataset.instrument === "syntesizers" || instrumentColorFilter.dataset.instrument === "instruments"){
                $keyBoard.style.visibility = "visible"
                changeSampleAudioFile(sound)
                console.log(instrumentColorFilter.dataset.instrument)
               
            }
            else if(instrumentColorFilter.dataset.instrument === "drumpads"){
                $drumpadKeyboard.style.visibility = "visible"
                changeSampleAudioFile(sound)
                console.log(instrumentColorFilter.dataset.instrument)
            }
            else if(instrumentColorFilter.dataset.instrument == "sampler"){
                console.log(instrumentColorFilter.dataset.instrument)
                $samplerRecorder.style.visibility = "visible"
                $keyBoard.style.visibility = "visible"
                changeSampleAudioFile(sound)
            }
            
            

        })
    })
    
}


//change the source for the sampler
const changeSampleAudioFile = (sound)=>{
    console.log("soundid = " + sound.dataset.soundid)
    socket.emit('changing_sound', sound.dataset.soundid)
    

}


/**
 * handle sound selection for each type of sounds
 */
accessSoundsSelection($instrumentsColorFilter, $instrumentsSoundSelection, $instrumentsPrimaryButton)
accessSoundsSelection($synthesizersColorFilter, $synthesizersSoundSelection, $synthesizersPrimaryButton)
accessSoundsSelection($drumpadsColorFilter, $drumpadsSoundSelection, $drumpadsPrimaryButton)
accessSoundsSelection($samplerColorFilter, $samplerSoundSelection,  $samplerPrimaryButton)



