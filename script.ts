// Get elements
const playCountElem = document.getElementById('playCount') as HTMLElement;
const downloadCountElem = document.getElementById('downloadCount') as HTMLElement;
const audioElem = document.getElementById('audio') as HTMLAudioElement;
const downloadLink = document.getElementById('downloadLink') as HTMLAnchorElement;

// Initialize counts from localStorage
let playCount: number = localStorage.getItem('playCount') ? parseInt(localStorage.getItem('playCount')!) : 0;
let downloadCount: number = localStorage.getItem('downloadCount') ? parseInt(localStorage.getItem('downloadCount')!) : 0;

// Update the display with the counts
playCountElem.textContent = playCount.toString();
downloadCountElem.textContent = downloadCount.toString();

// Update the localStorage and counts when the song is played
audioElem.addEventListener('play', () => {
  playCount++;
  localStorage.setItem('playCount', playCount.toString());
  playCountElem.textContent = playCount.toString();
});

// Update the download count when the song is downloaded
downloadLink.addEventListener('click', () => {
  downloadCount++;
  localStorage.setItem('downloadCount', downloadCount.toString());
  downloadCountElem.textContent = downloadCount.toString();
});
