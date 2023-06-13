import { Vo } from "../vo";
// import { ApiService } from '../services/api.service';

export class Categoria extends Vo {
    constructor(
        tipo: string,
    ) {
        super();
        this.tipo = tipo;
    }
}
