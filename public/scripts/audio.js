var SOUNDS = {};
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();
function loadSound(name,success,err) {
    var request = new XMLHttpRequest();
    request.open('GET', '../sounds/'+name+'.wav')
    request.responseType = 'arraybuffer'
    request.onload = function() {
        audioContext.decodeAudioData(request.response, function(buffer) {
            SOUNDS[name] = buffer;
            (success || (function(){}))()
        }, err || function(msg) {console.error(msg)});
     }
     request.send();
 }
 function playSound(name,param) {
     param = param || {}
     var s = SOUNDS[name]
     var source = audioContext.createBufferSource()
     source.buffer = s
     if (param.loop) {
         source.loop = true
     }
     source.connect(audioContext.destination);
     source.start(0);
 }
 loadSound("pianoSound",function() {
     //Onload
     playSound('laser')
 })
