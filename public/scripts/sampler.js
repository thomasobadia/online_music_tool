const $sample = document.querySelector(".sample")

// const node = new Tone.AudioNode ( [ AudioContext ] ) 
// //open microphone
// const mic = new Tone.UserMedia()
// mic.open().then(function(){
//     //promise resolves when input is available
// })

console.log($record)

var sampler = new Tone.Sampler({
    // "A2" : "../../public/sounds/ab.ogg"
}, function(){
    //sampler will repitch the closest sample
    sampler.attack = 10
    sampler.toMaster()
})

console.log(sampler)






$sample.addEventListener("mousedown",()=>{
    // sampler.dispose()
    sampler.add(
        "C3" , audio.href)
    console.log(audio.src)
    sampler.toMaster()
})

// /////Restream mic  
// window.onload = function() {


//   
//     //add constraints object
//     var constraints = { audio: true,
//                         video: false};

//     //call getUserMedia, then the magic
//     navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
//         var video = document.querySelector('audio');
//         video.srcObject = mediaStream;
//         video.play();
//     }).catch(function(err){
//         console.log("yikes, and err!" + err.message);
//     });

// }



$whites[0].addEventListener("mousedown", ()=>{ sampler.triggerAttack("C3")})
$whites[0].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})
$whites[1].addEventListener("mousedown", ()=>{ sampler.triggerAttack("D3")})
$whites[1].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})
$whites[2].addEventListener("mousedown", ()=>{ sampler.triggerAttack("E3")})
$whites[2].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})
$whites[3].addEventListener("mousedown", ()=>{ sampler.triggerAttack("F3")})
$whites[3].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})
$whites[4].addEventListener("mousedown", ()=>{ sampler.triggerAttack("G3")})
$whites[4].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})
$whites[5].addEventListener("mousedown", ()=>{ sampler.triggerAttack("A3")})
$whites[5].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})
$whites[6].addEventListener("mousedown", ()=>{ sampler.triggerAttack("B3")})
$whites[6].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})
$whites[7].addEventListener("mousedown", ()=>{ sampler.triggerAttack("C4")})
$whites[7].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
sampler.releaseAll()})