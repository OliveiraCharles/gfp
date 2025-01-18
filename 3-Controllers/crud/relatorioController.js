const Relatorio = require("@models/relatorioModel");
const Movimento = require("@controllers/crud/movimentoController");

const CrudController = require("@controllers/crud/crudController");

class RelatorioController extends CrudController {
  constructor(Relatorio) {
    super(Relatorio, "Relatorios");
  }

  // Métodos adicionais específicos de RelatorioController
  calculo() {
    const movimentos = Movimento.getAll;
    const valorTotal = 0;
    console.log(valorTotal);
    console.log(movimentos.length);

    for (let index = 0; index < movimentos.length; index++) {
        // valorTotal = valorTotal + movimentos[index];
        console.log(movimentos[index].valor);
        // const element = movimentos[index];
        
    }
    // for (const movimento in movimentos) {
    //   //   if (Object.hasOwnProperty.call(relatorios, relatorio)) {
    //   console.log(valorTotal);
    //   //   }
    // }
    console.log(valorTotal);
    return valorTotal;
  }
}

module.exports = new RelatorioController(Relatorio);



