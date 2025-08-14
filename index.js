let speedUpButton = document.getElementById("speed-up");
let speedDownButton = document.getElementById("speed-down");
let volumeUpButton = document.getElementById("volume-up");
let volumeDownButton = document.getElementById("volume-down");
let videoInput = document.getElementById("videoInput");
let videoBtn = document.getElementById("videoBtn");
let mainContent = document.getElementById("mainContent");

videoBtn.addEventListener("click", () => {
  videoInput.click();
});

const acceptInputHandler = (obj) => {
  const file = obj.files[0];
  
    const videoURL = URL.createObjectURL(file);
    const videoElement = document.createElement("video");
    videoElement.src = videoURL;
    videoElement.controls = true;  
    mainContent.appendChild(videoElement);
  
};

videoInput.addEventListener("change", acceptInputHandler.bind(null, videoInput));