const express = require("express");
const cors = require("cors");
const userRoutes = require("@routes/userRoutes");
const estabelecimentoRoutes = require("@routes/estabelecimentoRoutes");
const despesaRoutes = require("@routes/despesaRoutes");
const homeRoutes = require("@routes/homeRoutes");
const movimentoFinanceiroRoutes = require("@routes/movimentoFinanceiroRoutes");
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
); // TO-DO: Trocar por proxy

app.use(sendError);

app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/despesas", despesaRoutes);
app.use("/estabelecimentos", estabelecimentoRoutes);
app.use("/movimentos", movimentoFinanceiroRoutes);

module.exports = app;
