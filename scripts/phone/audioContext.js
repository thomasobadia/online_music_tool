if(typeof AudioContext != "undefined" || typeof webkitAudioContext != "undefined") {
    var resumeAudio = function() {
       if(typeof g_WebAudioContext == "undefined" || g_WebAudioContext == null) return;
       if(g_WebAudioContext.state == "suspended") g_WebAudioContext.resume();
       document.removeEventListener("click", resumeAudio);
    };
    document.addEventListener("click", resumeAudio);
 }