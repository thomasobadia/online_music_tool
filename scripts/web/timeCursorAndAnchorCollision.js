
console.log("fqushiqush")


const AnchorCursorLoop = ()=>{
    window.requestAnimationFrame(AnchorCursorLoop)
    anchors.forEach(anchor => {
        //if we are not recording
        if(isRecording === -1){
            // if there is a collision betwin the anchor and the time cursor && the anchor is not already being played
            console.log(anchor.dataset.isplayed)
            if( timeCursorPosition > anchor.dataset.start && timeCursorPosition < anchor.dataset.stop && anchor.dataset.isplayed == -1){
                console.log("fs")
                sampler.triggerAttack("C3")
                //the anchor is being played and can't be retrigered
                anchor.dataset.isplayed = 1
                console.log(anchor.dataset.isplayed)
            }
            if(timeCursorPosition > anchor.dataset.stop && anchor.dataset.isplayed == 1){
                console.log("fs")
                sampler.triggerRelease("C3")
                //the anchor is being played and can't be retrigered
                anchor.dataset.isplayed = -1
                console.log(anchor.dataset.isplayed)
            }
        }
    
        
        
    })

}
AnchorCursorLoop()