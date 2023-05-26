class CartaoCredito extends ValueObject {
  constructor(id, nome, descricao, dataFechamento, dataVencimento) {
    super(id, nome, descricao);
    this.dataFechamento = dataFechamento;
    this.dataVencimento = dataVencimento;
  }
}
