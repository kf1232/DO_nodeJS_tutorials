const axios = require('axios');
const fs = require('fs').promises;

const webSite = `https://ghibliapi.herokuapp.com/films`;
const fileName=`file_promiseMovies.csv`;

axios.get(webSite)
     .then((response) => {
        console.log(response);
        console.log(`Successfully retrieved our list of movies`);
        let movieList= '';
        response.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['release_date']}`);
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        return fs.writeFile(fileName, movieList);
     })
     .then(() => {
         console.log(`Saved list to ${fileName}`)
     })
     .catch((error) => {
         console.error(`Could not write to file ${fileName}`);
     });