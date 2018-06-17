

const $sample = document.querySelector(".sample")


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
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount))
    }
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem))
}







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
        $whites[l].addEventListener("touchstart", ()=>{ 
            
            //send signal to server to trigger the key's attack
            socket.emit('white_key_pressed', keyLetterNumber[l])
            
            //changing the color of the text when the key is active
            $whites[l].style.background = "#b0b0b0"
        })
        $blacks[l].addEventListener("touchstart", ()=>{ 
            
            //send signal to server to trigger the key's attack
            socket.emit('black_key_pressed', blackKeyLetterNumber[l])
            
            //changing the color of the text when the key is active
            $blacks[l].style.background = "#000000"
        })
        $whites[l].addEventListener("touchend", ()=>{ 
            
            //send signal to server to trigger the key's release
            socket.emit('white_key_released', keyLetterNumber[l])
            
            //returnin the base color the key is no longer active
            $whites[l].style.background = "#e3e3e3"
        })
        $blacks[l].addEventListener("touchend", ()=>{ 
            
            //send signal to server to trigger the key's release
            socket.emit('black_key_released', blackKeyLetterNumber[l])
            
            //returnin the base color the key is no longer active
            $blacks[l].style.background = "#202020"
        })
    }
}


    

const giveKeys =()=>{
    giveWhiteKeys()
    // giveBlackKeys()
    
}


giveKeys()
