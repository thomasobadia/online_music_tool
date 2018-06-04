const $volumeSlider = document.querySelector('.room__footer__parameters__volume__slider')
let volumeValue = $volumeSlider.value


console.log($volumeSlider)
$volumeSlider.addEventListener('mouseup', ()=>{
    volumeValue = $volumeSlider.value
    console.log(volumeValue)
})