const axios = require(`axios`);
const fs = require(`fs`).promises;

async function saveMovies() {
    const webSite = `https://ghibliapi.herokuapp.com/films`;
    const fileName = `file_asyncMovies.csv`;

    try {
        let respose = await axios.get(webSite);
        let movieList = '';

        respose.data.forEach(movie => {
            console.log(`${movie['title']}, ${movie['release_date']}`);
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });

        await fs.writeFile(fileName, movieList);

    } catch (error) {
        console.error(`Could not write to file: ${error}`);
    }
}

saveMovies();