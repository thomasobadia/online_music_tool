/**
 * UPDATING SOUND VOLUME
 */

const $volumeSlider = document.querySelector('.room__footer__parameters__volume__slider')
let volumeValue = $volumeSlider.value

const volume = new Tone.Volume()
volume.mute = true


$volumeSlider.addEventListener('mouseup', ()=>{
    volumeValue = $volumeSlider.value
    volume.volume = - volumeValue
    console.log(volumeValue)
    console.log(volume.volume)
})