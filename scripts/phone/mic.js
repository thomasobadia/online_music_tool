/***********************************/
 /*Sample the mic*/
/***********************************/




const $sampleRecord = document.querySelector(".primary_button_sampler0")
const $sampleStopRecord = document.querySelector(".primary_button_sampler1")

const $samplerInstructions = document.querySelector(".sampler_instruction")

let isRecordingMic = 0


$sampleRecord.addEventListener("click",function() {
  socket.emit('start_recording', 0)
  $sampleRecord.style.backgroundColor = "red"
})


$sampleStopRecord.addEventListener("click", function() {
  socket.emit('stop_recording', 0)
  $sampleRecord.style.backgroundColor = "rgba(43, 44, 46, 0.9)"
})

$samplerInstructions.addEventListener("click", ()=>{
  window.alert("Press record on your phone and record your voice with mic of the computer then press stop to record. You can now play your voice as an instrument")
})