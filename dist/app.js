"use strict";
const downloadButton = document.getElementById('downloadBtn');
const playCountDisplay = document.getElementById('playCount');
const downloadCountDisplay = document.getElementById('downloadCount');
const audioPlayer = document.getElementById('audioPlayer');
let playCount = parseInt(localStorage.getItem('playCount') || '0');
let downloadCount = parseInt(localStorage.getItem('downloadCount') || '0');
let playTimeout;
let hasPlayed30Seconds = false;
// Function to update the display counts
function updateCounts() {
    playCountDisplay.textContent = playCount.toString();
    downloadCountDisplay.textContent = downloadCount.toString();
    localStorage.setItem('playCount', playCount.toString());
    localStorage.setItem('downloadCount', downloadCount.toString());
}
// Function to increment play count
function incrementPlayCount() {
    if (hasPlayed30Seconds) {
        playCount++;
        updateCounts();
    }
}
// Event listener for the download button
downloadButton.addEventListener('click', () => {
    downloadCount++;
    updateCounts();
    // Simulate download action
});
// Event listener for the audio player
audioPlayer.addEventListener('play', () => {
    if (!hasPlayed30Seconds) {
        playTimeout = window.setTimeout(() => {
            incrementPlayCount();
            hasPlayed30Seconds = true;
        }, 30000); // 30 seconds
    }
});
audioPlayer.addEventListener('pause', () => {
    clearTimeout(playTimeout);
    hasPlayed30Seconds = false;
});
audioPlayer.addEventListener('ended', () => {
    clearTimeout(playTimeout);
    hasPlayed30Seconds = false;
});
// Initialize counts on page load
updateCounts();
