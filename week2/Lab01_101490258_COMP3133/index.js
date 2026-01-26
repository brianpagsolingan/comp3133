const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'input_countries.csv');
const canadaFile = path.join(__dirname, 'canada.txt');
const usFile = path.join(__dirname, 'us.txt');

// Delete if already exists

function deleteFileIfExists(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted existing file: ${filePath}`);
    }
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the input file:', err);
        return;
    }
    deleteFileIfExists(canadaFile);
    deleteFileIfExists(usFile);


    const lines = data.split('\n');
    const header = lines[0];
    const canadaLines = [header];
    const usLines = [header];

    lines.slice(1).forEach(line => {
        const trimedLine = line.trim();
        if(!trimedLine) return; //skip empty lines
        if(trimedLine.includes('Canada,')) {
            canadaLines.push(trimedLine);
        } else if(trimedLine.includes('United States,')) {
            usLines.push(trimedLine);
        }
    });

    fs.writeFileSync(canadaFile, canadaLines.join('\n'));
    fs.writeFileSync(usFile, usLines.join('\n'));

    console.log('Files created successfully:');
    console.log(`- ${canadaFile}`);
    console.log(`- ${usFile}`);
});