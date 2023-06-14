const Categoria = require("@models/CategoriaModel");
const CrudController = require("@controllers/crud/crudController");

class CategoriaController extends CrudController {
  constructor(Categoria) {
    super(Categoria);
  }
  // Métodos adicionais específicos de CategoriaController
}

module.exports = new CategoriaController(Categoria);
