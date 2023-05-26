class MovimentoFinanceiro {
  constructor(
    dataLiquidacao,
    idCategoria,
    idEstabelecimento,
    idFormaTransacao,
    valorMovimento
  ) {
    (this.dataLiquidacao = dataLiquidacao),
      (this.idCategoria = idCategoria),
      (this.idEstabelecimento = idEstabelecimento),
      (this.idFormaTransacao = idFormaTransacao),
      (this.valorMovimento = valorMovimento);
  }

  CadastrarMovimento(idMovimento) {
    this.idMovimento = idMovimento;
  }
  EditarMovimento(idMovimento) {
    this.idMovimento = idMovimento;
  }
  RemoverMovimento(idMovimento) {
    this.idMovimento = idMovimento;
  }
}
