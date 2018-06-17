/***********************************/
 /*DRUM PADS*/
/***********************************/


const $drumpadKeyboard = document.querySelector(".drumpad_keyboard")
const $drumpadKeys = document.querySelectorAll(".drumpad_keys")


//what happen when you hit the drumpad's keys
for(let i = 0; i< $drumpadKeys.length; i++){
    $drumpadKeys[i].addEventListener("touchstart", ()=>{ 
        
        //send signal to server to trigger the key's attack
        socket.emit('drumpad_pressed', "C" + i)
        
        //changing the color of the text when the key is active
        $drumpadKeys[i].children[0].style.color = "blue"
    
    })
    $drumpadKeys[i].addEventListener("touchend", ()=>{ 
        
        //send signal to server to trigger the key's release
        socket.emit('drumpad_released', "C" + i)
        
        //returnin the base color the key is no longer active
        $drumpadKeys[i].children[0].style.color = "#535151"
    })
}
