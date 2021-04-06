const http = require("http");
const fs = require('fs').promises;

const host = 'localhost'; // 127.0.0.1
const port = 8000;

let indexFile;

// Loading HTML efficently
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
   };   

const server = http.createServer(requestListener);
fs.readFile(__dirname+"/index.html")
   .then(contents => {
       indexFile = contents;
       server.listen(port, host, () => {
           console.log(`Server is running on http://${host}:${port}`);
       });
   })
   .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
   });
// end of Loading HTML efficently

/* Load index.html on request every time
const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
*/
