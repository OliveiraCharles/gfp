/**
 * É a representação de uma movimentação financeira
 * EX.: Compra no crédito, compra no débito, salário, tanto faz se é receita ou despesa,
 * entrada, saída, crédito, empréstimo, transferência....
 */
class MovimentoFinanceiroDinheiro extends MovimentoFinanceiro {
  constructor(
    id,
    data,
    conta, // Se for dinheiro conta = carteira
    tipo, // Entrada Saída
    formaTransacao, // Crédito, Débito, Pix, Boleto
    categoria,
    estabelecimento,
    cartao
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
  }

  // Motivos para mudança
}
