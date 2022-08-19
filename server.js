const http = require("http");

const port = 8081; // Local port number

http
    .createServer((request, response) => {
        //callback function
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1> Hello, this is my first server </h1>");
        response.write(
            "<p><b> I understood the concept of npm today and installed nodemon package</b></p>"
        );
        response.end();
    })
    .listen(port, () => {
        //callback function
        console.log(`Node.js started running on port ${port}`);
    });
