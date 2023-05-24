const mongoose = require("mongoose");

const { Schema } = mongoose;

const EstabelecimentoSchema = new Schema({
  cnpj: String,
  nomeFantasia: String,
  somatoriaGastos: Number
});

const Estabelecimento = mongoose.model(
  "Estabelecimento",
  EstabelecimentoSchema
);
module.exports = Estabelecimento;
