const Express = require("express");
const todo = require("./routes/todo.routes");
const env = require("dotenv");
const mongoose = require("mongoose");

// Port used for this API
const PORT = process.env.PORT || 5000;
// Declaring instance of express
const api = Express();
// Declaring an instance of dotenv
env.config();

const URI = process.env.MONGO_URI;
mongoose.connect(URI);

api.use(Express.json());

// Declaring an endpoint
api.use("/todo", todo);

api.listen(PORT, () => {
  console.log("Connected on port: " + PORT);
});
