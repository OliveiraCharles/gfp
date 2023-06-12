import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../categoria/services/api.service';
import { Categoria } from '../../model/categoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public myFormGroup: FormGroup
    = this.formBuilder.group({
      _id: [null],
      nome: [null],
      descricao: [null],
      tipo: ['saída'],
    });

  public categoria: Categoria;
  public id: string = this.route.snapshot.paramMap.get('id')

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {

    this.service.getOne(this.id).subscribe((categoria: Categoria) => {
      this.categoria = categoria
      this.myFormGroup = this.formBuilder.group({
        id: [this.id, Validators.required],
        nome: [categoria.nome, Validators.required],
        descricao: [categoria.descricao],
        tipo: [categoria.tipo, Validators.required],
      });
    });
  }

  onSubmit() {
    console.log('submit');
    this.salvar()
  }

  edit() {
    this.service.editOne(this.myFormGroup.value).subscribe()
  }

  remove() {
    this.service.deleteOne(this.id).subscribe()
  }

  redirect(rota: string): void {
    this.router.navigateByUrl(rota);
  }

  salvar() {
    this.edit()
    this.voltar()
  }

  excluir() {
    this.remove()
    this.voltar()
  }

  voltar(): void {
    this.redirect('/categorias');
  }

}