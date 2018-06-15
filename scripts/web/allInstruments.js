const pianoSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/piano.wav",

}, function(){
    //sampler will repitch the closest sample
    pianoSampler.toMaster()
})


const laserSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/laser.wav",

}, function(){
    //sampler will repitch the closest sample
    laserSampler.toMaster()
})

const smoothSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/laser.wav",

}, function(){
    //sampler will repitch the closest sample
    smoothSampler.toMaster()
})

const drumpad = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/drumpad_test/hi-hat.wav",
    "C1" : "../assets/sounds/drumpads/drumpad_test/kick.wav",
    "C2" : "../assets/sounds/drumpads/drumpad_test/open-hat.wav",
    "C3" : "../assets/sounds/drumpads/drumpad_test/piano.wav",
    "C4" : "../assets/sounds/drumpads/drumpad_test/snare.wav",
    "C5" : "../assets/sounds/drumpads/drumpad_test/test.wav",

}, function(){
    //sampler will repitch the closest sample
    drumpad.toMaster()
})

const instrumentArray = [pianoSampler, laserSampler, smoothSampler, 0, 0, 0, 0, 0, drumpad]
let currentInstrumentId = {}
let currentInstrument = instrumentArray[currentInstrumentId]
