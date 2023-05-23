const express = require("express");
const cors = require("cors");
const userRoutes = require("@routes/userRoutes");
const despesaRoutes = require("@routes/despesaRoutes");
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

// // app.use("/", routes);
app.use("/users", userRoutes);
app.use("/despesas", despesaRoutes);

module.exports = app;
