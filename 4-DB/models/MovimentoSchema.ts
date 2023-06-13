const mongoose = require("mongoose");
const MovimentoModel = require("../../1-Entities/MovimentoFinanceiro/movimento.ts");

const { movimento } = MovimentoModel

const { Schema } = mongoose;

const movimentoSchema = new Schema({
  movimento
});
const Movimento = mongoose.model("movimento", movimentoSchema);
module.exports = Movimento;
