const Todo = require("../models/todo.model");

// declaring function for retrieving data from the database
async function getTodos(req, res) {
  const todoList = await Todo.find();
  if (todoList) {
    res.status(200).send(todoList);
  } else {
    res.status(404).send({ status: 404, message: "Cannot fetch list" });
  }
}

// declaring function for posting to the database
function postTodo(req, res) {
  // creating new model from the request information (within the body)

  const todo = new Todo({
    todo: req.body.todo,
  });

  try {
    // .save will submit the model to the database
    todo.save().then((savedTodo) => {
      // if the data was posted, returns 200 status and a copy of the data
      // TODO: change send data
      if (savedTodo === todo) {
        res.status(201).send(todo);
      }
    });
  } catch (err) {
    res.status(400).send({ status: 400, message: err });
  }
}

async function deleteTodo(req, res) {
  console.log(req);
  // using params this time
  const idOfItemToDelete = await req.params.id;
  const status = await Todo.findByIdAndDelete(idOfItemToDelete);

  if (idOfItemToDelete && status) {
    res.status(200).send(status.todo);
  } else {
    res.status(404).send({ status: 404, message: "Todo not found" });
  }
}

module.exports = {
  getTodos,
  postTodo,
  deleteTodo,
};
