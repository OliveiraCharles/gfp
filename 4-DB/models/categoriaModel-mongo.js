const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategoriaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: String,
  tipo: String,
});
const Categoria = mongoose.model("Categoria", CategoriaSchema);
module.exports = Categoria;
