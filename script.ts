// Get stored play count from localStorage
let playCount: number = parseInt(localStorage.getItem("playCount") || "0");
let downloadCount: number = parseInt(localStorage.getItem("downloadCount") || "0");

// Update DOM with initial values
const playCountElement = document.getElementById("playCount") as HTMLElement;
const downloadCountElement = document.getElementById("downloadCount") as HTMLElement;
playCountElement.textContent = playCount.toString();
downloadCountElement.textContent = downloadCount.toString();

// Select audio player and download button
const audioPlayer = document.getElementById("audioPlayer") as HTMLAudioElement;
const downloadButton = document.getElementById("downloadButton") as HTMLAnchorElement;

// Increment play count and save to localStorage
audioPlayer.addEventListener("play", () => {
  playCount++;
  playCountElement.textContent = playCount.toString();
  localStorage.setItem("playCount", playCount.toString());
});

// Increment download count and save to localStorage
downloadButton.addEventListener("click", () => {
  downloadCount++;
  downloadCountElement.textContent = downloadCount.toString();
  localStorage.setItem("downloadCount", downloadCount.toString());
});