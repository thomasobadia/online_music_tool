const $sample = document.querySelector(".sample")

// const node = new Tone.AudioNode ( [ AudioContext ] ) 
// //open microphone
// const mic = new Tone.UserMedia()
// mic.open().then(function(){
//     //promise resolves when input is available
// })

console.log($record)

var sampler = new Tone.Sampler({
    "A2" : "../../public/sounds/pianoSound.wav"
}, function(){
    //sampler will repitch the closest sample
    sampler.toMaster()
})

console.log(sampler)






// $sample.addEventListener("mousedown",()=>{
//     // sampler.dispose()
//     sampler.add(
//         "C3" , audio.href)
//     console.log(audio.src)
//     sampler.toMaster()
// })

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



// $whites[0].addEventListener("mousedown", ()=>{ sampler.triggerAttack("C3")})
// $whites[0].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
// $whites[1].addEventListener("mousedown", ()=>{ sampler.triggerAttack("D3")})
// $whites[1].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
// $whites[2].addEventListener("mousedown", ()=>{ sampler.triggerAttack("E3")})
// $whites[2].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
// $whites[3].addEventListener("mousedown", ()=>{ sampler.triggerAttack("F3")})
// $whites[3].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
// $whites[4].addEventListener("mousedown", ()=>{ sampler.triggerAttack("G3")})
// $whites[4].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
// $whites[5].addEventListener("mousedown", ()=>{ sampler.triggerAttack("A3")})
// $whites[5].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
// $whites[6].addEventListener("mousedown", ()=>{ sampler.triggerAttack("B3")})
// $whites[6].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
// $whites[7].addEventListener("mousedown", ()=>{ sampler.triggerAttack("C4")})
// $whites[7].addEventListener("mouseup", ()=>{ sampler.triggerRelease()
// sampler.releaseAll()})
console.log($whites.length)

const keyLetter = ["C","D","E", "F", "A", "B"]
const keyNumber = ["-1", "0", "1", "2", "3", "4", "5", "6"]
console.log($whites[2])

const giveKeys = ()=>{
    let k = 0
    let keyLetterNumber = []
    for(let i = 0; i<keyNumber.length; i++){
        let j = 0
        if(i==0){
            j = 4
        }
        else{
            j = 0
        }
        while(j<keyLetter.length){
            keyLetterNumber[k] = keyLetter[j] + keyNumber[i]
            console.log( keyLetterNumber)
            j++
            k++
        }
    }
    for(let l = 0; l<$whites.length; l++){
        // console.log(keyLetterNumber[k])
        $whites[l].addEventListener("touchstart", ()=>{ sampler.triggerAttack(keyLetterNumber[l])})
        $whites[l].addEventListener("touchend", ()=>{ sampler.triggerRelease(keyLetterNumber[l])})
    }
    // console.log(keyLetterNumber)
}



giveKeys()
// $whites[0].addEventListener("touchstart", ()=>{ sampler.triggerAttack("A-1")})
// $whites[0].addEventListener("touchend", ()=>{ sampler.triggerRelease("C3")
// })
// $whites[1].addEventListener("touchstart", ()=>{ sampler.triggerAttack("D3")})
// $whites[1].addEventListener("touchend", ()=>{ sampler.triggerRelease("D3")
// })
// $whites[2].addEventListener("touchstart", ()=>{ sampler.triggerAttack("E3")})
// $whites[2].addEventListener("touchend", ()=>{ sampler.triggerRelease("E3")
// })
// $whites[3].addEventListener("touchstart", ()=>{ sampler.triggerAttack("F3")})
// $whites[3].addEventListener("touchend", ()=>{ sampler.triggerRelease("F3")
// })
// $whites[4].addEventListener("touchstart", ()=>{ sampler.triggerAttack("G3")})
// $whites[4].addEventListener("touchend", ()=>{ sampler.triggerRelease("G3")
// })
// $whites[5].addEventListener("touchstart", ()=>{ sampler.triggerAttack("A3")})
// $whites[5].addEventListener("touchend", ()=>{ sampler.triggerRelease("A3")
// })
// $whites[6].addEventListener("touchstart", ()=>{ sampler.triggerAttack("B3")})
// $whites[6].addEventListener("touchend", ()=>{ sampler.triggerRelease("B3")
// })
// $whites[7].addEventListener("touchstart", ()=>{ sampler.triggerAttack("C4")})
// $whites[7].addEventListener("touchend", ()=>{ sampler.triggerRelease("C4")
// })