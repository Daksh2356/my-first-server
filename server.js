const http = require("hhtp");

const port = 8081;

http
    .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1> Hello, this is my first server </h1>");
        response.end();
    })
    .listen(port, () => {
        console.log(`I created my first node.js server and it started on port ${port}`);
    });


