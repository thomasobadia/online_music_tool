const $volumeSlider = document.querySelector('.room__footer__parameters__volume__slider')
let volumeValue = $volumeSlider.value

const volume = new Tone.Volume()
volume.mute = true


var sampler = new Tone.Sampler({
    // "C3" : "../assets/sounds/pianoC3.wav",
    "C3" : "../assets/sounds/test.wav",

}, function(){
    //sampler will repitch the closest sample
    sampler.chain(volume, Tone.Master)
})

console.log($volumeSlider)
$volumeSlider.addEventListener('mouseup', ()=>{
    volumeValue = $volumeSlider.value
    volume.volume = - volumeValue
    console.log(volumeValue)
    console.log(volume.volume)
    
})