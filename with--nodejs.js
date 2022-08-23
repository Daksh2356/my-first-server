const http = require("http");

const port = 8081;

const todoList = ["Complete Node Byte", "Play games"];

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
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            // console.log(chunk); --> returns a hexadecimal number
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let newArray = todoList;
            newArray.push(body.item);
            console.log(newArray);
          });
        res.writeHead(201);
      } else if (method == "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let deleteThis = body.item;
            todoList.find((element, index) => {
              if (element == deleteThis) {
                todoList.splice(index, 1);
              }
            });
          });
        res.writeHead(204);
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
