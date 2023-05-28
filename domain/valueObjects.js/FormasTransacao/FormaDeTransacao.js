/**
 * Define a forma com que foi feito movimento financeiro
 * EX.: Movimento via Debito, Via crédito , via Dinheiro , via Pix, via Boleto
 */

class FormaTransacao extends ValueObject {
  constructor(id, nome, descricao) {
    super(id, nome, descricao);
    this.qt
  }
}


// const formaTransacaoDebito = new FormaTransacao(1, nome, descricao);
// const formaTransacaoCredito = new FormaTransacao(2, nome, descricao, data);
// const formaTransacaoPix = new FormaTransacao(3, nome, descricao);

// const MovimentoFinanceiro = {
//   id:
//   nome:
//   valor:
//   formaTransacao = {
//     id:
//     nome:
//     descricao:
//     qntidadeParcelas:
//   }
// }

// formaTransacao.qtParc()


// class ListaFormasTansacao{
//   id, nome

// }