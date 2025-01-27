"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const downloadButton = document.getElementById('downloadBtn');
const playCountDisplay = document.getElementById('playCount');
const downloadCountDisplay = document.getElementById('downloadCount');
const audioPlayer = document.getElementById('audioPlayer');
let playCount = 0;
let downloadCount = 0;
let playTimeout;
let hasPlayed30Seconds = false;
// Function to update the display counts
function updateCounts() {
    playCountDisplay.textContent = playCount.toString();
    downloadCountDisplay.textContent = downloadCount.toString();
}
// Fetch counts from server
function fetchCounts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/counts');
        const data = yield response.json();
        playCount = data.playCount;
        downloadCount = data.downloadCount;
        updateCounts();
    });
}
// Increment play count on server
function incrementPlayCount() {
    return __awaiter(this, void 0, void 0, function* () {
        if (hasPlayed30Seconds) {
            const response = yield fetch('/increment-play', { method: 'POST' });
            const data = yield response.json();
            playCount = data.playCount;
            updateCounts();
        }
    });
}
// Increment download count on server
function incrementDownloadCount() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/increment-download', { method: 'POST' });
        const data = yield response.json();
        downloadCount = data.downloadCount;
        updateCounts();
    });
}
// Event listener for the download button
downloadButton.addEventListener('click', () => {
    incrementDownloadCount();
});
// Initialize counts on page load
fetchCounts();
