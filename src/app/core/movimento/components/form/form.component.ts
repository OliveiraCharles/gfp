import { Component } from '@angular/core';
import { MovimentoService } from '../../services/movimento.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myFormGroup: FormGroup = this.formBuilder.group({
    _id: [null],
    nome: [null],
    descricao: [null],
    valor: [null],
    dataCompra: [null]
  });

  constructor(
    private service: MovimentoService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  add() {
    this.service.addOne(this.myFormGroup.value).subscribe()
  }

  limparForm() {
    this.myFormGroup.reset()
  }

  voltar(): void {
    this.router.navigateByUrl('/movimentos');
  }

  salvar() {
    this.add()
    this.voltar()
  }

  adicionarOutro(){
    this.add()
    this.limparForm()
  }


}
