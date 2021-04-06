const axios = require(`axios`);
const fs = require(`fs`).promises;

const webSite = `https://cat-fact.herokuapp.com/facts`;
const fileName = ``;
let output = ``;

axios.get(webSite)
     .then((response) => {
        console.log(response);
        response.data.forEach(cat => {
            console.log(cat);
            output+= `${cat['text']}\n`;


        });
     })
     .then(() => {
        console.log(output);
     })
     .catch((error) => {
         console.error(`.catch`);
     });