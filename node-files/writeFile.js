const fs = require('fs').promises;

async function openFile() {
    try {
        const csvHeaders = `name,quanity,price`;
        await fs.writeFile(`groceries.csv`, csvHeaders);
    } catch (error) {
        console.error(`Unable to manage file: ${error.mesage}`);
    }
}

async function addGroceryItem(name, quantity, price) {
    try {
        const csvLine = `\n${name},${quantity},${price}`;
        await fs.writeFile(`groceries.csv`, csvLine, { flag: `a`});
    } catch (error) {
        console.error(`Unable to write to file: ${error.message}`);
    }
}

( async function () {
    await openFile();
    await addGroceryItem(`eggs`, 12, 1.50);
    await addGroceryItem(`nutella`, 1, 4);
})();