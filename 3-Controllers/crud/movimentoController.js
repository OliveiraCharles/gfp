// movimentoController.js
const MovimentoModel = require("@models/movimentoModel");
const CrudController = require("@controllers/crud/crudController");

class MovimentoController extends CrudController {
  constructor() {
    super(MovimentoModel, "Movimentos");
  }
  // Métodos adicionais específicos de MovimentoController
}

module.exports = new MovimentoController();
