const express = require("express");

// initialization
const app = express();

// application will now use JSON Format for data
app.use(express.json());

const port = 8081;

const todoList = ["Complete Node Byte", "Play games"];

app.get("/todos", (req, res) => {
  res.status(200).send(todoList);
});

app.post("/todos", (req, res) => {
  let newTodoItem = req.body.item;
  todoList.push(newTodoItem);
  res.status(201).send({
    message: "Task added successfuly !!",
  });
});

app.delete("/todos", (req, res) => {
  let itemToDelete = req.body.item;
  todoList.find((element, index) => {
    if (element === itemToDelete) {
      todoList.splice(index, 1);
    }
  });
  res.status(202).send({
    message: `Deleted item - ${itemToDelete}`,
  });
});
// all the other methods in /todos route
app.all("/todos", (req, res) => {
  res.status(501).send();
});

// all the other routes
app.all("*", (req, res) => {
  res.send(404).send();
});

// just some additional examples
// app.get('/todos/create');
// app.post('/todos/create');

app.listen(port, () => {
  // callback
  console.log(`Nodejs server started on port ${port}`);
});
