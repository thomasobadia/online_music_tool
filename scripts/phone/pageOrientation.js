/***********************************/
 /*Handle page orientation*/
/***********************************/

const turnYourPhone = document.querySelector(".turnYourPhone")

const phoneOrientation = ()=>{
    if(window.innerHeight > window.innerWidth){
        alert('Turn your phone to play music')
    }
}

const pageOrientationLoop = ()=>{
    window.requestAnimationFrame(pageOrientationLoop)
    phoneOrientation()
}

pageOrientationLoop()
