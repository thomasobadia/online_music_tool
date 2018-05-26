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

console.log($instrumentsPrimaryButton)

const $instrumentsSounds = $instruments.querySelectorAll(".all_sounds>*")
const $synthesizersSounds = $synthesizers.querySelectorAll(".all_sounds>*")
const $drumpadsSounds = $drumpads.querySelectorAll(".all_sounds>*")
const $samplerSounds = $sampler.querySelectorAll(".all_sounds>*")

console.log($instruments)

// $instrumentsSoundsSelection.addEventListener("touchup", ()=>{
//     $instrumentsSounds.style.display = "none"
//     $instrumentsSoundSelection.forEach(child => {
//         child.addEventListener.display = "block"
//     })
// })


const accessSoundsSelection = (child, parent, button)=>{
    parent.addEventListener("touchstart", ()=>{
        button.style.display = "none"
        child.style.display = "block"     
    })
}

accessSoundsSelection($instrumentsSoundSelection, $instruments, $instrumentsPrimaryButton)
accessSoundsSelection($synthesizersSoundSelection, $synthesizers, $synthesizersPrimaryButton)
accessSoundsSelection($drumpadsSoundSelection, $drumpads, $drumpadsPrimaryButton)
accessSoundsSelection($samplerSoundSelection, $sampler, $samplerPrimaryButton)