const Movimento = require("@models/movimentoModel");
const CrudController = require("@controllers/crudController");

class MovimentoController extends CrudController {
  constructor(Movimento) {
    super(Movimento);
  }
  // Métodos adicionais específicos de MovimentoController
}

module.exports = new MovimentoController(Movimento);
