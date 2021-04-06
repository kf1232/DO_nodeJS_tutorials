const colors = require('colors');

const chosenColor = colors.getRandomColor();

console.log(`You should use ${chosenColor.name} on your website `+
            `it's color code is ${chosenColor.color}`);

const favColor = colors.getBlue();
console.log(`Favorite Color is ${favColor.name} and its code is ${favColor.color}`);