import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../3-Services/api.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from '../../../../../../1-Entities/MovimentoFinanceiro/valueObjects/Categoria/categoria';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myFormGroup: FormGroup;

  constructor(
    private service: ApiService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.myFormGroup = this.formBuilder.group({
      _id: [null],
      nome: [null],
      descricao: [null],
      tipo: ['saída'] //radio button, pode ser entrada ou (checked) saida 
    });
  }

  onSubmit(data: Categoria) {
    console.log("Enviando dados: ",data);
    
    this.addMovimento(data)
  }

  salvar(data: any) {
    console.log("Salvando dados: ", data);
    
    this.addMovimento(data)
    this.redirect('/categorias')
  }

  addMovimento(data: any) {
    this.service.addOne(data).subscribe()
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
