/**
 * É a representação de uma movimentação financeira
 * EX.: Compra no crédito, compra no débito, salário, tanto faz se é receita ou despesa,
 * entrada, saída, crédito, empréstimo, transferência....
 */
class MovimentoFinanceiro {
  constructor(
    id,
    data,
    conta, // Se for dinheiro conta = carteira
    tipo, // Entrada Saída
    formaTransacao, // Crédito, Débito, Pix, Boleto
    categoria,
    estabelecimento,
    valor
  ) {
    if (new.target === Conta) {
      throw new Error("Não é possível instanciar uma classe abstrata.");
    }
    (this.id = id),
      (this.data = data),
      (this.conta = conta), // Se for dinheiro conta = carteira
      (this.tipo = tipo), // Entrada Saída
      (this.formaTransacao = formaTransacao), // Crédito, Débito, Pix, Boleto
      (this.categoria = categoria),
      (this.estabelecimento = estabelecimento),
      (this.valor = valor);
  }

  // Motivos para mudança
  alterarData() {}
  alterarConta() {}
  alterarTipo() {}
}
