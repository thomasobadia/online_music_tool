const bassSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/instruments/bass.wav",

}, function(){
    //sampler will repitch the closest sample
    bassSampler.toMaster()
})

const bellSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/instruments/bell.wav",

}, function(){
    //sampler will repitch the closest sample
    bellSampler.toMaster()
})

const guitarSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/instruments/Guitar.wav",

}, function(){
    //sampler will repitch the closest sample
    guitarSampler.toMaster()
})

const pianoSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/instruments/piano.wav",

}, function(){
    //sampler will repitch the closest sample
    pianoSampler.toMaster()
})
const huit08BassSampler = new Tone.Sampler({
    "C2" : "../assets/sounds/Synth/808Bass.wav",

}, function(){
    //sampler will repitch the closest sample
    huit08BassSampler.toMaster()
})
const airySampler = new Tone.Sampler({
    "C3" : "../assets/sounds/Synth/Airy.wav",

}, function(){
    //sampler will repitch the closest sample
    airySampler.toMaster()
})
const atmosPadSampler = new Tone.Sampler({
    "C2" : "../assets/sounds/Synth/AtmosPad.wav",

}, function(){
    //sampler will repitch the closest sample
    atmosPadSampler.toMaster()
})
const microPadSampler = new Tone.Sampler({
    "C2" : "../assets/sounds/Synth/micropad.wav",

}, function(){
    //sampler will repitch the closest sample
    microPadSampler.toMaster()
})

const allenDrum = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/Allen/Clap.wav",
    "C1" : "../assets/sounds/drumpads/Allen/Hat.wav",
    "C2" : "../assets/sounds/drumpads/Allen/Kick.wav",
    "C3" : "../assets/sounds/drumpads/Allen/Percussion.wav",
    "C4" : "../assets/sounds/drumpads/Allen/snare.wav",
    "C5" : "../assets/sounds/drumpads/Allen/snare.wav",

}, function(){
    //sampler will repitch the closest sample
    allenDrum.toMaster()
})

const dirtyDrum = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/Dirty/closed_hat.wav",
    "C1" : "../assets/sounds/drumpads/Dirty/Cymatics.wav",
    "C2" : "../assets/sounds/drumpads/Dirty/Hat.wav",
    "C3" : "../assets/sounds/drumpads/Dirty/kick.wav",
    "C4" : "../assets/sounds/drumpads/Dirty/snare.wav",
    "C5" : "../assets/sounds/drumpads/Dirty/snare.wav",

}, function(){
    //sampler will repitch the closest sample
    dirtyDrum.toMaster()
})
const SauceYaDrum = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/Sauce-ya/Metro-HiHat.wav",
    "C1" : "../assets/sounds/drumpads/Sauce-ya/Rack_Kick.wav",
    "C2" : "../assets/sounds/drumpads/Sauce-ya/Southside_Snare.wav",
    "C3" : "../assets/sounds/drumpads/Sauce-ya/Zaytoven_Clap.wav",
    "C4" : "../assets/sounds/drumpads/Sauce-ya/Zaytoven_Shaker.wav",
    "C5" : "../assets/sounds/drumpads/Sauce-ya/Zaytoven_Clap.wav",

}, function(){
    //sampler will repitch the closest sample
    SauceYaDrum.toMaster()
})

const softDrum = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/Soft/Hihat.wav",
    "C1" : "../assets/sounds/drumpads/Soft/Kick.wav",
    "C2" : "../assets/sounds/drumpads/Soft/Shaker.wav",
    "C3" : "../assets/sounds/drumpads/Soft/SN.wav",
    "C4" : "../assets/sounds/drumpads/Soft/Snap.wav",
    "C5" : "../assets/sounds/drumpads/Soft/Snap.wav",

}, function(){
    //sampler will repitch the closest sample
    softDrum.toMaster()
})


const instrumentArray = [bassSampler, bellSampler, guitarSampler, pianoSampler, huit08BassSampler, airySampler, atmosPadSampler, microPadSampler, allenDrum, dirtyDrum, SauceYaDrum, softDrum]
let currentInstrumentId = {}
let currentInstrument = instrumentArray[currentInstrumentId]
