const mongoose = require("mongoose");

const { Schema } = mongoose;

const despesaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  dataCompra: {
    type: Date,
    required: true,
  },
  dataVencimento: Date,
  dataPagamento: Date,
  descricao: String,
});

const Despesa = mongoose.model("despesa", despesaSchema);
module.exports = Despesa;
