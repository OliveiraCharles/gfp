class CartaoCredito extends Cartao {
  constructor(
    id,
    nome,
    descricao,
    numero,
    agencia,
    conta,
    bandeira,
    instituicaoFinaceira,
    validade,
    cvv,
    dataFechamento,
    dataVencimento
  ) {
    super(
      id,
      nome,
      descricao,
      numero,
      agencia,
      conta,
      bandeira,
      instituicaoFinaceira,
      validade,
      cvv
    );
    this.dataFechamento = dataFechamento;
    this.dataVencimento = dataVencimento;
  }

  AlteracaoDataFechamento(value) {
    if (isValid) {
      this.dataFechamento = value;
    }
  }

  AlteracaoDataVencimento(value) {
    if (isValid) {
      this.dataVencimento = value;
    }
  }
}
