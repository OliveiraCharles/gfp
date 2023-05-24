const mongoose = require("mongoose");

const { Schema } = mongoose;

const MovimentoFinanceiroSchema = new Schema({
  dataLiquidacao: Date,
  idCategoria: Number,
  idEstabelecimento: Number,
  idFormaTransacao: Number,
  valor: Number,
});

const MovimentoFinanceiro = mongoose.model(
  "MovimentoFinanceiro",
  MovimentoFinanceiroSchema
);
module.exports = MovimentoFinanceiro;

// MovimentoFinanceiro
// CadastrarMovimento(int): void,
// Editar Movimento(int): void,
// RemoverMovimento(): void,
