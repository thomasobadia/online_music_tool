/******************************
 * DECLARING ALL THE INSTRUMENTS
 *******************************/


/**
 * sampler
 */

const audio = document.querySelector(".hiddenLinkSample")

/**
 * Instruments
 */
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

const orgueSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/instruments/orgue.wav",

}, function(){
    //sampler will repitch the closest sample
    orgueSampler.toMaster()
})

const yeahSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/instruments/yeah.wav",

}, function(){
    //sampler will repitch the closest sample
    yeahSampler.toMaster()
})


/**
 * Synth
 */

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

const gameSampler = new Tone.Sampler({
    "C2" : "../assets/sounds/Synth/game.wav",

}, function(){
    //sampler will repitch the closest sample
    gameSampler.toMaster()
})
const elephantSampler = new Tone.Sampler({
    "C2" : "../assets/sounds/Synth/elephant.wav",

}, function(){
    //sampler will repitch the closest sample
    elephantSampler.toMaster()
})
const grooveSampler = new Tone.Sampler({
    "C3" : "../assets/sounds/Synth/groove.wav",

}, function(){
    //sampler will repitch the closest sample
    grooveSampler.toMaster()
})

/**
 * Drums
 */

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

const travisSampler = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/Travis/GodDamn.wav",
    "C1" : "../assets/sounds/drumpads/Travis/LaFlame.wav",
    "C2" : "../assets/sounds/drumpads/Travis/StraightUp.wav",
    "C3" : "../assets/sounds/drumpads/Travis/YaYa.wav",
    "C4" : "../assets/sounds/drumpads/Travis/yo.wav",
    "C5" : "../assets/sounds/drumpads/Travis/YaYa.wav",

}, function(){
    //sampler will repitch the closest sample
    travisSampler.toMaster()
})

const brainFreezeDrum = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/brainFreeze/un.wav",
    "C1" : "../assets/sounds/drumpads/brainFreeze/deux.wav",
    "C2" : "../assets/sounds/drumpads/brainFreeze/trois.wav",
    "C3" : "../assets/sounds/drumpads/brainFreeze/quatre.wav",
    "C4" : "../assets/sounds/drumpads/brainFreeze/cinq.wav",
    "C5" : "../assets/sounds/drumpads/brainFreeze/cinq.wav",

}, function(){
    //sampler will repitch the closest sample
    brainFreezeDrum.toMaster()
})

const dumbpadDrum = new Tone.Sampler({
    "C0" : "../assets/sounds/drumpads/dumbpad/hot.wav",
    "C1" : "../assets/sounds/drumpads/dumbpad/ting.wav",
    "C2" : "../assets/sounds/drumpads/dumbpad/twoPlusTwo.wav",
    "C3" : "../assets/sounds/drumpads/dumbpad/qwak.wav",
    "C4" : "../assets/sounds/drumpads/dumbpad/ya.wav",
    "C5" : "../assets/sounds/drumpads/dumbpad/ting.wav",

}, function(){
    //sampler will repitch the closest sample
    dumbpadDrum.toMaster()
})


/**
 * Voice Sampler
 */
const micSampler = new Tone.Sampler({
    "C1" : "../assets/sounds/instruments/bass.wav",

}, function(){
    //sampler will repitch the closest sample
    micSampler.toMaster()
})






//array with all the instruments
const instrumentArray = 
    [   bassSampler, 
        bellSampler, 
        guitarSampler, 
        pianoSampler, 
        huit08BassSampler, 
        airySampler, 
        atmosPadSampler, 
        microPadSampler, 
        allenDrum, 
        dirtyDrum, 
        SauceYaDrum, 
        softDrum, 
        micSampler,
        travisSampler,
        gameSampler,
        orgueSampler,
        elephantSampler,
        grooveSampler,
        yeahSampler,
        brainFreezeDrum,
        dumbpadDrum
    ]


let currentInstrumentId = {}
let currentInstrument = instrumentArray[currentInstrumentId]
