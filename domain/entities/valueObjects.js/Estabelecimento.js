class Estabelecimento extends ValueObject {
  constructor(id, nome, descricao, cnpj, somatoriaGastos) {
    super(id, nome, descricao);
    this.cnpj = cnpj;
    this.somatoriaGastos = somatoriaGastos;
  }
}
