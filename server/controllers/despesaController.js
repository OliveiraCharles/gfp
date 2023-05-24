const Despesa = require("@models/despesaModel");
const CrudController = require("@controllers/crudController");

class DespesaController extends CrudController {
  constructor(Despesa) {
    super(Despesa);
  }
  // Métodos adicionais específicos de DespesaController
}

module.exports = new DespesaController(Despesa);
