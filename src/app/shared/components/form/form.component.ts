import { Component } from '@angular/core';
import { MovimentoService } from '../../services/movimento.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  });;

  constructor(
    private apiReq: MovimentoService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  salvar(data: any) {
    this.addMovimento(data)
    this.redirect('/list')
  }

  addMovimento(data: any) {
    this.apiReq.addOne(data).subscribe()
    this.limparForm()
  }

  limparForm() {
    console.log('reset');
    this.myFormGroup.reset()
  }

  voltar(): void {
    this.location.back();
  }

  redirect(rota: string): void {
    this.router.navigateByUrl(rota);
  }

}
