const express = require("express");
const cors = require("cors");
const app = express();

const movimentoRoutes = require("@routes/movimentoRoutes");
const estabelecimentoRoutes = require("@routes/estabelecimentoRoutes");
const homeRoutes = require("@routes/homeRoutes");
const movimentoFinanceiroRoutes = require("@routes/movimentoFinanceiroRoutes");
const userRoutes = require("@routes/userRoutes");
const sendError = require("@utils/sendError");

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
); // TO-DO: Trocar por proxy

app.use(sendError);

app.use("/", homeRoutes);
app.use("/movimentos", movimentoRoutes);
app.use("/estabelecimentos", estabelecimentoRoutes);
app.use("/users", userRoutes);

module.exports = app;
