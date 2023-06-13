import { Categoria } from "./valueObjects/Categoria/categoria";

export class Movimento {
    nome: {
        type: String
        required: true
    }
    descricao: String
    valor: {
        type: Number
        required: true
    }
    dataCompra: {
        type: Date,
        required: true
    }
    estabelecimento: String
    dataVencimento: Date
    dataPagamento: Date
    tipo: String // Entrada Saída
    conta: String // Se for dinheiro conta = carteira
    formaTransacao: String // Crédito, Débito, Pix, Boleto, ...
    categoria: Categoria
}
