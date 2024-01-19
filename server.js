const Express = require("express");
const todo = require("./routes/todo.routes");
const env = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

// Port used for this API
const PORT = process.env.PORT || 5000;
// Declaring instance of express
const api = Express();
// Declaring an instance of dotenv
env.config();

const URI = process.env.MONGO_URI;
mongoose.connect(URI);

api.use(helmet());
api.use(Express.json());

api.use(
  cors({
    origin: [
      "https://main--dynamic-semifreddo-ef4e4f.netlify.app",
      "https://dynamic-semifreddo-ef4e4f.netlify.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Declaring an endpoint
api.use("/todo", todo);

api.listen(PORT, () => {
  console.log("Connected on port: " + PORT);
});
