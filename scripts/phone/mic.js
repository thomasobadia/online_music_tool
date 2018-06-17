/***********************************/
 /*Sample the mic*/
/***********************************/
const $sampleRecord = document.querySelector(".primary_button_sampler0")
const $sampleStopRecord = document.querySelector(".primary_button_sampler1")

const $samplerInstructions = document.querySelector(".sampler_instruction")


let isRecordingMic = 0

//send signal to server to trigger the recording of the computer's microphone
$sampleRecord.addEventListener("click",function() {
  socket.emit('start_recording', 0)
  $sampleRecord.style.backgroundColor = "red"
})

//send signal to server to stop the recording of the computer's microphone
$sampleStopRecord.addEventListener("click", function() {
  socket.emit('stop_recording', 0)
  $sampleRecord.style.backgroundColor = "rgba(43, 44, 46, 0.9)"
})

//display the instructions of the sampler
$samplerInstructions.addEventListener("click", ()=>{
  window.alert("Press record on your phone and record your voice with mic of the computer then press stop to record. You can now play your voice as an instrument")
})