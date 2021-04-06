const axios = require(`axios`);
const fs = require(`fs`).promises;

const webSite = `http://dog-api.kinduff.com//api//facts?number=10`;
const fileName = ``;
let output = ``;

axios.get(webSite)
     .then((response) => {
        console.log(response);
        response.data.facts.forEach(dog => {
            output+= `${dog}\n`;


        });
     })
     .then(() => {
        console.log(output);
     })
     .catch((error) => {
         console.error(`.catch`);
     });