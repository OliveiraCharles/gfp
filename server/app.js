const express = require("express");
const cors = require("cors");
const routes = require("@routes/userRoutes");
const sendError = require("@utils/sendError");
const app = express();

// MiddleWares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(sendError);

app.use("/", routes);

module.exports = app;
