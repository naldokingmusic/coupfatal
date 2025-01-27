const fs = require('fs');
const path = require('path');
const countsFilePath = path.resolve(__dirname, '../counts.json');

function readCounts() {
    const data = fs.readFileSync(countsFilePath, 'utf8');
    return JSON.parse(data);
}

function writeCounts(counts) {
    fs.writeFileSync(countsFilePath, JSON.stringify(counts, null, 2));
}

module.exports = (req, res) => {
    const counts = readCounts();
    counts.downloadCount++;
    writeCounts(counts);
    res.status(200).json(counts);
};