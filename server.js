const http = require("http");

const port = 8081;

const todoList = ["Complete Node Byte", "Play songs!!"];

http
    .createServer((req, res) => {
        const { method, url } = req;
        console.log(method, url);
        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200, { "Content-type": "text/html" });
                res.write(todoList.toString());
            } else if (method == "POST") {
                let body = "";
                req.on('error', (err) => {
                    console.error(err);
                }).on('data', (chunk) => {
                    console.log(chunk);
                    body += chunk;
                }).on('end', () => {
                    body = JSON.parse(body);
                    console.log("data:", body);
                })
            } else {
                res.writeHead(501);
            }
        } else {
            res.writeHead(404);
        }
        res.end();
    })
    .listen(port, () => {
        console.log(`Node.js started running on port ${port}`);
    });
