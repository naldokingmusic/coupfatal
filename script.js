// Select DOM elements
const audioPlayer = document.getElementById("audioPlayer");
const playCountElement = document.getElementById("playCount");
const downloadButton = document.getElementById("downloadButton");
const downloadCountElement = document.getElementById("downloadCount");

// Initialize counters
let playCount = 0;
let downloadCount = 0;

// Increment play count when the audio starts playing
audioPlayer.addEventListener("play", () => {
  playCount++;
  playCountElement.textContent = playCount;
});

// Increment download count when the download button is clicked
downloadButton.addEventListener("click", () => {
  downloadCount++;
  downloadCountElement.textContent = downloadCount;
});