class CartaoDebito extends Cartao {
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
    cvv
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
  }
}
