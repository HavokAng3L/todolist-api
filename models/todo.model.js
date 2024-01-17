const mongoose = require("mongoose");

// This schema represents how data would look like when stored on the database
const todoSchema = new mongoose.Schema({
  todo: String,
});

// compiling into a model to be exported
const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
