const fs = require('fs');
const countsFilePath = './counts.json';

function readCounts() {
    const data = fs.readFileSync(countsFilePath);
    return JSON.parse(data);
}

function writeCounts(counts) {
    fs.writeFileSync(countsFilePath, JSON.stringify(counts));
}

module.exports = (req, res) => {
    const counts = readCounts();
    counts.downloadCount++;
    writeCounts(counts);
    res.status(200).json(counts);
};