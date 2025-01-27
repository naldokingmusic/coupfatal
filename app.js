// Import Firebase libraries
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update, increment, onValue } from 'firebase/database';
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMKE53OF9dqNS_E_zasTEP3QmnT-3cRQ8",
    authDomain: "coupfatal-167d4.firebaseapp.com",
    projectId: "coupfatal-167d4",
    storageBucket: "coupfatal-167d4.firebasestorage.app",
    messagingSenderId: "181796402091",
    appId: "1:181796402091:web:679bb58033a7b27f1d98ee",
    measurementId: "G-308H2XJNMT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Firebase references
const playCountRef = ref(database, "playCount");
const downloadCountRef = ref(database, "downloadCount");
// DOM Elements
const playCountElement = document.getElementById("playCount");
const downloadCountElement = document.getElementById("downloadCount");
const audioPlayer = document.getElementById("audio");
// Increment play count
function incrementPlayCount() {
    update(playCountRef, { count: increment(1) });
}
// Increment download count
function incrementDownloadCount() {
    update(downloadCountRef, { count: increment(1) });
}
// Event listener for play (using the audio element's play event)
audioPlayer.addEventListener("play", () => {
    incrementPlayCount(); // Increment play count in Firebase
});
// Event listener for download button (on download link click)
document.getElementById("downloadLink").addEventListener("click", () => {
    incrementDownloadCount(); // Increment download count in Firebase
    const link = document.createElement("a");
    link.href = "assets/coupfatal.mp3";
    link.download = "coupfatal.mp3";
    link.click();
});
// Real-time update for play count
onValue(playCountRef, (snapshot) => {
    const count = snapshot.val() ? snapshot.val().count : 0;
    playCountElement.textContent = count.toString();
});
// Real-time update for download count
onValue(downloadCountRef, (snapshot) => {
    const count = snapshot.val() ? snapshot.val().count : 0;
    downloadCountElement.textContent = count.toString();
});
