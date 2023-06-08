/**
 * É a representação de uma movimentação financeira
 * EX.: Compra no crédito, compra no débito, salário, tanto faz se é receita ou despesa,
 * entrada, saída, crédito, empréstimo, transferência....
 */
class MovimentoFinanceiroCredito extends MovimentoFinanceiro {
  constructor(
    id,
    data,
    conta, // Se for dinheiro conta = carteira
    tipo, // Entrada Saída
    formaTransacao, // Crédito, Débito, Pix, Boleto
    categoria,
    estabelecimento,
    cartao,
    qtParcelas,
    juros
  ) {
    super(
      id,
      data,
      conta, // Se for dinheiro conta = carteira
      tipo, // Entrada Saída
      formaTransacao, // Crédito, Débito, Pix, Boleto
      categoria,
      estabelecimento
    );
    this.cartao = cartao;
    this.qtParcelas = qtParcelas;
    this.juros = juros;
  }

  // Motivos para mudança
  alterarCartao() {}
  alterarParcelas() {}
  alterarJuros() {}
}
