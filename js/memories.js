const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if(!isPlaying){
    video.play();
    playBtn.textContent = "〢 หยุดวิดีโอ";
    isPlaying = true;
  }else{
    video.pause();
    playBtn.textContent = "▶ เล่นวิดีโอ";
    isPlaying = false;
  }
});

video.addEventListener("ended", () => {
  playBtn.textContent = "▶ เล่นวิดีโอ";
  isPlaying = false;
});
