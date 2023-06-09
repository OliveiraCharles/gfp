import { Component } from '@angular/core';
import { MovimentoService } from '../../services/movimento.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private apiReq: MovimentoService
  ) { }

  salvar(data: any) {
    this.addMovimento(data)
    this.voltar()
  }

  addMovimento(data: any) {
    console.log(data);
    this.apiReq.addOne(data).subscribe((result: any) => {
      console.log(result);
    })
    this.limparForm()
  }

  limparForm() {
  }

  voltar() {
  }
}
