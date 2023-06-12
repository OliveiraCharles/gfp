import { Component } from '@angular/core';
// import { categoria } from './../../../model/categoria';
import { ApiService } from "./../../services/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  categorias: any;
  dataAtual = new Date();
  month = 0
  monthNames: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  constructor(
    private service: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.month = this.dataAtual.getMonth() + 1; // Os meses em JavaScript são baseados em zero, então é necessário adicionar 1
    this.listCategorias()

  }

  listCategorias(): void {

    this.service.getAll()
      .subscribe(categorias => {
        this.categorias = categorias;
      })
  }

  removecategoria(id: string): void {
    this.service.deleteOne(id).subscribe()
    this.listCategorias()
  }
  
  redirect(rota: string): void {
    this.router.navigateByUrl(rota);
  }
}
