const fs = require('fs');
const countsFilePath = './counts.json';

function readCounts() {
    const data = fs.readFileSync(countsFilePath);
    return JSON.parse(data);
}

module.exports = (req, res) => {
    const counts = readCounts();
    res.status(200).json(counts);
};