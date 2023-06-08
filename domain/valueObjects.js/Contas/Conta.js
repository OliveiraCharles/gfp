class Conta extends ValueObject {
  constructor(id, nome, descrição) {
    if (new.target === Conta) {
      throw new Error("Não é possível instanciar uma classe abstrata.");
    }
    super(id, nome, descrição);
  }
}
