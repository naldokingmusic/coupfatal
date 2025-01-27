const fs = require('fs');
const path = require('path');
const countsFilePath = path.resolve(__dirname, '../counts.json');

function readCounts() {
    const data = fs.readFileSync(countsFilePath, 'utf8');
    return JSON.parse(data);
}

module.exports = (req, res) => {
    const counts = readCounts();
    res.status(200).json(counts);
};