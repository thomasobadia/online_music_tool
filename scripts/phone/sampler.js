

const $sample = document.querySelector(".sample")

// const node = new Tone.AudioNode ( [ AudioContext ] ) 
// //open microphone
// const mic = new Tone.UserMedia()
// mic.open().then(function(){
//     //promise resolves when input is available
// })

// console.log($record)

var sampler = new Tone.Sampler({
    "C3" : "../assets/sounds/laser.wav",

}, function(){
    //sampler will repitch the closest sample
    sampler.toMaster()
})

sampler.chain(volume, Tone.Master)

// console.log(sampler)

// sampler.add(
//             "C3" , "../assets/sounds/pianoC3.wav")
//         console.log(audio.src)
//         sampler.toMaster()
    





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


if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    }
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};







const keyLetter = ["C","D","E", "F", "G", "A", "B"]
const keyNumber = ["-1", "0", "1", "2", "3", "4", "5", "6"]




// Give to each key the good note
const giveWhiteKeys = ()=>{
    let k = 0
    let keyLetterNumber = []
    const blackKeyLetterNumber = []
    for(let i = 0; i<keyNumber.length; i++){
        let j = 0
        if(i==0){
            j = 5
        }
        else{
            j = 0
        }
        while(j<keyLetter.length){
            keyLetterNumber[k] = keyLetter[j] + keyNumber[i]
            blackKeyLetterNumber[k] = keyLetterNumber[k].splice(1, 0, "#")
            // console.log(keyLetterNumber[k])
            // console.log(blackKeyLetterNumber[k])
            j++
            k++
        }
    }
    for(let l = 0; l<$whites.length; l++){
        // $whites[l].addEventListener("touchstart", ()=>{ sampler.triggerAttack(keyLetterNumber[l])})
        $whites[l].addEventListener("touchstart", ()=>{ socket.emit('white_key_pressed', keyLetterNumber[l])})
        $blacks[l].addEventListener("touchstart", ()=>{ socket.emit('black_key_pressed', blackKeyLetterNumber[l])})
        $whites[l].addEventListener("touchend", ()=>{ socket.emit('white_key_released', keyLetterNumber[l])})
        $blacks[l].addEventListener("touchend", ()=>{ socket.emit('black_key_released', blackKeyLetterNumber[l])})
    }
    // console.log(keyLetterNumber)
}

const giveBlackKeys = ()=>{
    $blacks.forEach(black => {
        // console.log(black)
    })
}
    

const giveKeys =()=>{
    giveWhiteKeys()
    giveBlackKeys()
    
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