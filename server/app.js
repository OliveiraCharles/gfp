const express = require("express");
const cors = require("cors");
const app = express();

const movimentoRoutes = require("@routes/movimentoRoutes");
const categoriaRoutes = require("@routes/categoriaRoutes");
const estabelecimentoRoutes = require("@routes/estabelecimentoRoutes");
const homeRoutes = require("@routes/homeRoutes");
const userRoutes = require("@routes/userRoutes");
const relatorioRoutes = require("@routes/relatorioRoutes");
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
app.use("/categorias", categoriaRoutes);
app.use("/estabelecimentos", estabelecimentoRoutes);
app.use("/users", userRoutes);
app.use("/relatorios", relatorioRoutes);

module.exports = app;
