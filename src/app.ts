const downloadButton = document.getElementById('downloadBtn') as HTMLButtonElement;
const playCountDisplay = document.getElementById('playCount') as HTMLSpanElement;
const downloadCountDisplay = document.getElementById('downloadCount') as HTMLSpanElement;
const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;

let playCount: number = 0;
let downloadCount: number = 0;
let playTimeout: number | undefined;
let hasPlayed30Seconds: boolean = false;

// Function to update the display counts
function updateCounts(): void {
    playCountDisplay.textContent = playCount.toString();
    downloadCountDisplay.textContent = downloadCount.toString();
}

// Fetch counts from server
async function fetchCounts() {
    const response = await fetch('/counts');
    const data = await response.json();
    playCount = data.playCount;
    downloadCount = data.downloadCount;
    updateCounts();
}

// Increment play count on server
async function incrementPlayCount(): Promise<void> {
    if (hasPlayed30Seconds) {
        const response = await fetch('/increment-play', { method: 'POST' });
        const data = await response.json();
        playCount = data.playCount;
        updateCounts();
    }
}

// Increment download count on server
async function incrementDownloadCount(): Promise<void> {
    const response = await fetch('/increment-download', { method: 'POST' });
    const data = await response.json();
    downloadCount = data.downloadCount;
    updateCounts();
}

// Event listener for the download button
downloadButton.addEventListener('click', () => {
    incrementDownloadCount();
});

// Initialize counts on page load
fetchCounts();