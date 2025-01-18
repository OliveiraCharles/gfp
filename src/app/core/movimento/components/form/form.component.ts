import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../../../../../../3-Services/movimento.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from "../../../../../../3-Services/categoria.service";
import { Categoria } from '1-Entities/MovimentoFinanceiro/valueObjects/Categoria/categoria';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myFormGroup: FormGroup = this.formBuilder.group({
    _id: [null],
    dataCompra: [null],
    nome: [null],
    descricao: [null],
    valor: [null],
    categoria: ['Selecione'],
  });

  categorias: any;

  constructor(
    private service: MovimentoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {
    this.listCategorias()
  }

  listCategorias(): void {

    this.categoriaService.getAll()
      .subscribe(categorias => {
        this.categorias = categorias;
      })
  }

  add() {  
    this.service.addOne(this.myFormGroup.value).subscribe()
  }

  limparForm() {
    this.myFormGroup.reset()
  }

  // Botões
  
  voltar(): void {
    this.router.navigateByUrl('/movimentos');
  }

  salvar() {
    this.add()
    this.voltar()
  }

  adicionarOutro() {
    this.add()
    this.limparForm()
  }


}
