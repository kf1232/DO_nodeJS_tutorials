const fs = require('fs').promises;

async function readFile(filePath){
    try {
        const data = await fs.readFile(filePath);
        console.log(data.toString());
    } catch (error) {
        console.error(`Unable to open or read file: ${error.message}`);
    }
}

readFile(`greetings.txt`);