const MovimentoFinanceiro = require("@models/movimentoFinanceiroModel");
const CrudController = require("@controllers/crudController");

class MovimentoFinanceiroController extends CrudController {
  constructor(MovimentoFinanceiro) {
    super(MovimentoFinanceiro, "MovimentosFinanceiros");
  }

  // Métodos adicionais específicos de MovimentoFinanceiroController
}

module.exports = new MovimentoFinanceiroController(MovimentoFinanceiro);
