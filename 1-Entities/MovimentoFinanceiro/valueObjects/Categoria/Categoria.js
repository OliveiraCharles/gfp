class Categoria extends ValueObject {
  constructor(id, nome, descricao, tipo) {
    super(id, nome, descricao);
    this.tipo = tipo; // Entrada Saída
  }
}
