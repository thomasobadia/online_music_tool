

const $subTracks = document.querySelectorAll(".sub_track")
const anchors = []



console.log($subTracks[0])

//when a key is pressed
document.addEventListener("keydown", (event)=>{
    if (event.keyCode===65){
        if(!event.repeat && isRecording === 1){
        //creation of the div
        const newAnchorDiv = document.createElement('div')
        newAnchorDiv.setAttribute("class", 'anchor')

        //giving temporal info to the div
        newAnchorDiv.setAttribute("data-start", timeCursorPosition)

        //position of the div
        newAnchorDiv.style.transform = "translateX("+timeCursorPosition+"px)"

        //the div is not finished from being created yet
        newAnchorDiv.setAttribute("data-isfinished", 0)

        //the anchor is not played
        newAnchorDiv.setAttribute("data-isplayed", -1)

        //which instrument should we play
        newAnchorDiv.setAttribute("data-instrument", "piano")

        //on which track the anchor should be placed
        $subTracks[whichTrack].appendChild(newAnchorDiv)
        
        //push the anchor in the array to save it
        anchors.push(newAnchorDiv)
        } 

       
          
    }
})

//when a key is released
document.addEventListener("keyup", ()=>{
    //a key
    if (event.keyCode===65){    
        anchors.forEach(anchor => {
    
            let width
            //if the key is not drawn yet
            if(!anchor.dataset.isFinished){
                console.log(anchor.dataset.start)
                console.log(timeCursorPosition)

                //we record when where we release the key
                anchor.dataset.stop = timeCursorPosition

                //handle if we release the key after the end of the track
                // if(anchor.dataset.stop >= anchor.dataset.start){
                     width = anchor.dataset.stop - anchor.dataset.start
                    console.log("bitch")
                // }
                // else{
                //      width = trackContentWidth - anchor.dataset.start 
                // }
                console.log(width)
                anchor.style.width = width +"px"
                anchor.dataset.isFinished = 1
                
            }
        })
    }
})



