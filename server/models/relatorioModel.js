const mongoose = require("mongoose");

const { Schema } = mongoose;

const RelatorioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Relatorio = mongoose.model("Relatorio", RelatorioSchema);
module.exports = Relatorio;
