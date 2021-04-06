const request = require('request');
const fs = require('fs');

const webSite = 'https://ghibliapi.herokuapp.com/films';
const fileName=`file_callbackMovies.csv`;
request(webSite, (error, response, body) =>{
    if(error){
        console.error(`Could not send request to API: ${error.mesage}`);
        return;
    }
    if(response.statusCode != 200){
        console.error(`Status Code: ${response.statusCode}`);
        return
    }

    console.log(`Processing list of movies...`);
    movies = JSON.parse(body);
    let movieList = '';
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`);
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
    });

    
    fs.writeFile(fileName, movieList, (error) => {
        if(error){
            console.error(`Could not save to file: ${error}`);
        }

        console.log(`Saved to movies to list at: ${fileName}`)
    });
});