import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../../../../../../3-Services/movimento.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from "../../../../../../3-Services/categoria.service";

@Component({
  selector: 'app-form-edit-movimento',
  templateUrl: './form-edit-movimento.component.html',
  styleUrls: ['./form-edit-movimento.component.css']
})
export class FormEditMovimentoComponent implements OnInit {

  public myFormGroup: FormGroup
    = this.formBuilder.group({
      _id: [null],
      dataCompra: [null],
      nome: [null],
      descricao: [null],
      valor: [null],
      categoria: ['Selecione'],
    });

  public categorias: any;

  private movimento: any;
  public id: string = this.route.snapshot.paramMap.get('id')

  constructor(
    private service: MovimentoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit() {
    this.listCategorias()
    this.fill();

  }

  onSubmit() {
    console.log('submit');
    
    this.edit()
  }

  fill() {
    this.service.getOne(this.id).subscribe((movimento: any): void => {
      const dataCompra = new Date(movimento.dataCompra).toLocaleDateString()
      this.movimento = movimento

      this.myFormGroup = this.formBuilder.group({
        _id: [this.id, Validators.required],
        nome: [this.movimento.nome, Validators.required],
        descricao: [this.movimento.descricao],
        valor: [this.movimento.valor, Validators.required],
        categoria: [this.movimento.categoria, Validators.required],
        dataCompra: [dataCompra, Validators.required]

      });
    });
  }

  listCategorias(): void {
    this.categoriaService.getAll()
      .subscribe(categorias => {
        this.categorias = categorias;
      })
  }

  edit() {
    this.service.editOne(this.myFormGroup.value).subscribe()
    this.voltar()
  }

  remove() {
    const id = this.id
    this.service.deleteOne(id).subscribe()
    this.voltar()
  }

  voltar(): void {
    this.router.navigateByUrl('/movimentos');
  }

}