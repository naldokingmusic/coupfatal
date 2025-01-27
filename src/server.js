const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const countsFilePath = './counts.json';

// Function to read counts from file
function readCounts() {
    const data = fs.readFileSync(countsFilePath);
    return JSON.parse(data);
}

// Function to write counts to file
function writeCounts(counts) {
    fs.writeFileSync(countsFilePath, JSON.stringify(counts));
}

// Endpoint to get counts
app.get('/counts', (req, res) => {
    const counts = readCounts();
    res.json(counts);
});

// Endpoint to increment play count
app.post('/increment-play', (req, res) => {
    const counts = readCounts();
    counts.playCount++;
    writeCounts(counts);
    res.json(counts);
});

// Endpoint to increment download count
app.post('/increment-download', (req, res) => {
    const counts = readCounts();
    counts.downloadCount++;
    writeCounts(counts);
    res.json(counts);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});