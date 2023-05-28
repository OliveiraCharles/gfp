class Cartao extends ValueObject {
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
    if (new.target === Cartao) {
      throw new Error("Não é possível instanciar uma classe abstrata.");
    }
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
