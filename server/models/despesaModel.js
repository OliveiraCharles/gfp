const mongoose = require("mongoose");

const { Schema } = mongoose;

const despesaSchema = new Schema({
  name: String,
  descricao: String,
  valor: Number,
  dataCompra: Date,
  dataVencimento: Date,
  dataPagamento: Date,
});

module.exports = mongoose.model("despesa", despesaSchema);
