// CategoriaController.js
const CategoriaModel = require("@models/CategoriaModel");
const CrudController = require("@controllers/crud/crudController");

class CategoriaController extends CrudController {
  constructor() {
    super(CategoriaModel, "Categorias");
  }
  // Métodos adicionais específicos de CategoriaController
}

module.exports = new CategoriaController();
