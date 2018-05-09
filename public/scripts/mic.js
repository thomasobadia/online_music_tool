const audio = document.querySelector("a")
const $record = document.querySelector(".record")
const $stopRecord = document.querySelector(".stopRecord")

if (navigator.mediaDevices) {
    console.log('getUserMedia supported.');
  
    var constraints = { audio: true };
    var chunks = [];
  
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
  
      var mediaRecorder = new MediaRecorder(stream);
  

        
      $record.addEventListener("click",function() {
       
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        $record.style.background = "red";
        $record.style.color = "black";
      })
      
      $stopRecord.addEventListener("click", function() {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        $record.style.background = "";
        $record.style.color = "";
      })
  
    
      mediaRecorder.onstop = function(e) {
        console.log("data available after MediaRecorder.stop() called.");
  
        var clipName = prompt('Enter a name for your sound clip');
  
        // var clipContainer = document.createElement('article');
        // var clipLabel = document.createElement('p');
        // var audio = document.createElement('audio');
        // var deleteButton = document.createElement('button');
        // var soundClips = document.createElement('div');
       
        // clipContainer.classList.add('clip');
        // audio.setAttribute('controls', '');
        // deleteButton.innerHTML = "Delete";
        // clipLabel.innerHTML = clipName;
  
        // clipContainer.appendChild(audio);
        // clipContainer.appendChild(clipLabel);
        // clipContainer.appendChild(deleteButton);
        // soundClips.appendChild(clipContainer);
        
  
        audio.controls = true;
        var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
        
        var audioURL = URL.createObjectURL(blob);
        audio.href = audioURL;
        // audio.download = "test"
        // audio.click()
        // window.URL.revokeObjectURL(audioURL)
        console.log("recorder stopped");
  
        // deleteButton.onclick = function(e) {
        //   evtTgt = e.target;
        //   evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        // }
      }
  
      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      }
    })
    .catch(function(err) {
      console.log('The following error occurred: ' + err);
    })
  }