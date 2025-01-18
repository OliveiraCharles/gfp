import { Component } from '@angular/core';
// import { movimento } from './../../../model/movimento';
import { MovimentoService } from "../../../../../../3-Services/movimento.service";
import { Router } from '@angular/router';
import { CategoriaService } from "../../../../../../3-Services/categoria.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  movimentos: any;
  categorias: any;
  dataAtual = new Date();
  month = 0
  year = 0
  somatoria = 0
  monthNames: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  constructor(
    private service: MovimentoService,
    private router: Router,
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {
    this.listCategorias()
    this.month = this.dataAtual.getMonth() + 1; // Os meses em JavaScript são baseados em zero, então é necessário adicionar 1
    this.year = new Date().getFullYear();

    this.listMovimentos(this.year, this.month)

  }

  listCategorias(): void {

    this.categoriaService.getAll()
      .subscribe(categorias => {
        this.categorias = categorias;
      })
  }

  listMovimentos(year, month): void {
    this.service.getByMonth(year, month).subscribe(movimentos => {
      this.movimentos = movimentos;

      // Ordenar os movimentos pela dataCompra
      this.movimentos.sort((a, b) => {
        const dataA = new Date(a.dataCompra);
        const dataB = new Date(b.dataCompra);
        return dataA.getTime() - dataB.getTime();
      });

      const somaValores = this.movimentos.reduce((total, movimento) => {
        const categoria = this.categorias.find(c => c.id === movimento.categoria);

        if (categoria && categoria.tipo === 'saída') {
          return total - movimento.valor;
        } else {
          return total + movimento.valor;
        }
      }, 0);

      this.somatoria = somaValores;
    });
  }

  getMonthName(year, month: number): string {
    return this.monthNames[month - 1] + '/' + year;
  }

  getValorFormatado(movimento: any): string {
    const categoria = this.categorias.find(c => c.id === movimento.categoria);

    if (categoria && categoria.tipo === 'saída') {
      return (movimento.valor * -1).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }

    return movimento.valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }


  removeMovimento(id: string): void {
    this.service.deleteOne(id).subscribe()
    this.listMovimentos(this.year, this.month)
  }

  addMonth() {
    this.month += 1
    if (this.month > 12) {
      this.month = 1
      this.year += 1
    }
    this.listMovimentos(this.year, this.month)
  }
  remMonth() {
    this.month -= 1
    if (this.month <= 0) {
      this.month = 12
      this.year -= 1

    }
    this.listMovimentos(this.year, this.month)
  }

  redirect(rota: string): void {
    this.router.navigateByUrl(rota);
  }
}
