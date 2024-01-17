const Express = require("express");
const todoRouter = Express.Router();
const {
  getTodos,
  postTodo,
  deleteTodo,
} = require("../controllers/todo.controllers");

// declaring home route on the todo endpoint
todoRouter.get("/", getTodos);

// declaring new route on the todo endpoint for posting
todoRouter.post("/new", postTodo);

// declaring route for deleting a post
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;
