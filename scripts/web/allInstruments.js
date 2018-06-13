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

const instrumentArray = [pianoSampler, laserSampler, smoothSampler]
let currentInstrumentId = 0
let currentInstrument = instrumentArray[currentInstrumentId]
