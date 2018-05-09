

//Synths are capable of a wide range of sounds depending on their settings
var synthA = new Tone.Synth({
	oscillator : {
  	type : 'fmsquare',
    modulationType : 'sawtooth',
    modulationIndex : 3,
    harmonicity: 3.4
  },
  envelope : {
  	attack : 0.001,
    decay : 0.1,
    sustain: 0.1,
    release: 0.1
  }
}).toMaster()

var synthB = new Tone.Synth({
	oscillator : {
  	type : 'triangle8'
  },
  envelope : {
  	attack : 0,
    decay : 1,
    sustain: 0.4,
    release: 1
  }
}).toMaster()

console.log(synthA)

// synthA.triggerAttack('D4')


// //mouse events
// $whites[0].addEventListener('mousedown', function(){ synthA.triggerAttack('C4') })
// $whites[0].addEventListener('mouseup', function(){ synthA.triggerRelease() })
// $whites[1].addEventListener('mousedown', function(){ synthB.triggerAttack('C4') })
// $whites[1].addEventListener('mouseup', function(){ synthB.triggerRelease() })





























































































































// var SOUNDS = {};
// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// var audioContext = new AudioContext();
// function loadSound(name,success,err) {
//     var request = new XMLHttpRequest();
//     request.open('GET', '../../public/sounds/'+name+'.wav')
//     request.responseType = 'arraybuffer'
//     request.onload = function() {
//         audioContext.decodeAudioData(request.response, function(buffer) {
//             SOUNDS[name] = buffer;
//             (success || (function(){}))()
//         }, err || function(msg) {console.error(msg)});
//      }
//      request.send();
//  }
//  function playSound(name,param) {
//      param = param || {}
//      var s = SOUNDS[name]
//      var source = audioContext.createBufferSource()
//      source.buffer = s
//      if (param.loop) {
//          source.loop = true
//      }
//      source.connect(audioContext.destination);
//     // Create the filter
//     var filter = audioContext.createBiquadFilter();
//     // Create the audio graph.
//     source.connect(filter);
//     filter.connect(audioContext.destination);
//     // Create and specify parameters for the low-pass filter.
//     filter.type = 'allpass'; // Low-pass filter. See BiquadFilterNode docs
//     filter.frequency.value = 100; // Set cutoff to 440 HZ
//     // Playback the sound.
//     source.start(0);
     
//  }
//  loadSound("pianoSound",function() {
//      //Onload
//      playSound('pianoSound')
//  })






