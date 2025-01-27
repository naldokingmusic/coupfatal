const downloadButton = document.getElementById('downloadBtn') as HTMLButtonElement;
const playCountDisplay = document.getElementById('playCount') as HTMLSpanElement;
const downloadCountDisplay = document.getElementById('downloadCount') as HTMLSpanElement;
const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;

let playCount: number = parseInt(localStorage.getItem('playCount') || '0');
let downloadCount: number = parseInt(localStorage.getItem('downloadCount') || '0');
let playTimeout: number | undefined;
let hasPlayed30Seconds: boolean = false;

// Function to update the display counts
function updateCounts(): void {
    playCountDisplay.textContent = playCount.toString();
    downloadCountDisplay.textContent = downloadCount.toString();
    localStorage.setItem('playCount', playCount.toString());
    localStorage.setItem('downloadCount', downloadCount.toString());
}

// Function to increment play count
function incrementPlayCount(): void {
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