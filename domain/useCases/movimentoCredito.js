class MovimentoCredito extends MovimentoFinanceiro {
  constructor(
    dataLiquidacao,
    idCategoria,
    idEstabelecimento,
    idFormaTransacao,
    valorMovimento
  ) {
    super(
      dataLiquidacao,
      idCategoria,
      idEstabelecimento,
      idFormaTransacao,
      valorMovimento
    );
  }

  InserirDataLiquidacao(dataLiquidacao) {
    this.dataLiquidacao = dataLiquidacao;
  }
  
  InserirMovimentoProximasParcelas() {}

  InserirQtdParcelas(QtParcelas) {
    this.QtParcelas = QtParcelas;
  }
}
