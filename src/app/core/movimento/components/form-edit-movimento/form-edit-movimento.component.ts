import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MovimentoService } from '../../services/movimento.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-edit-movimento',
  templateUrl: './form-edit-movimento.component.html',
  styleUrls: ['./form-edit-movimento.component.css']
})
export class FormEditMovimentoComponent implements OnInit {

  public myFormGroup: FormGroup
    = this.formBuilder.group({
      _id: [null],
      nome: [null],
      descricao: [null],
      valor: [null],
      dataCompra: [null]
    });

  public movimento: Movimento;
  public id: string = this.route.snapshot.paramMap.get('id')

  constructor(
    private service: MovimentoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.fill();
  }


  onSubmit() {
    console.log('Submit');
    this.edit()
  }

  fill() {
    this.service.getOne(this.id).subscribe((movimento: Movimento): void => {
      const dataCompra = new Date(movimento.dataCompra).toLocaleDateString()

      this.movimento = movimento

      this.myFormGroup = this.formBuilder.group({
        _id: [this.id, Validators.required],
        nome: [this.movimento.nome, Validators.required],
        descricao: [this.movimento.descricao],
        valor: [this.movimento.valor, Validators.required],
        dataCompra: [dataCompra, Validators.required]

      });
    });
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

interface Movimento {
  _id: string;
  nome: string;
  descricao: string;
  valor: number;
  dataCompra: Date;
}