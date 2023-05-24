const Estabelecimento = require("@models/estabelecimentoModel");
const CrudController = require("@controllers/crudController");

class EstabelecimentoController extends CrudController {
  constructor(Estabelecimento) {
    super(Estabelecimento);
  }
  // Métodos adicionais específicos de EstabelecimentoController
}

module.exports = new EstabelecimentoController(Estabelecimento);
