const Categoria = require("@models/CategoriaModel");
const CrudController = require("@controllers/crudController");

class CategoriaController extends CrudController {
  constructor(Categoria) {
    super(Categoria);
  }
  // Métodos adicionais específicos de CategoriaController
}

module.exports = new CategoriaController(Categoria);
