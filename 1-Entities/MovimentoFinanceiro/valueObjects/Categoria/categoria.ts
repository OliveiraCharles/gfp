import { Vo } from "../vo";
// import { ApiService } from '../services/api.service';

export class Categoria extends Vo {
    constructor(
        id: string,
        nome: string,
        descricao: string,
        tipo: string,
        // private service: ApiService
    ) {
        super();
        this.tipo = tipo; // Entrada Saída
    }


    // edit(categoria: Categoria) {
    //     edit(categoria)
    // }
}

// function edit(categoria: Categoria) {
//     console.log('classe');
//     return this.service.editOne(categoria).subscribe()
// }
