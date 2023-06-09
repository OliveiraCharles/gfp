import { Component } from '@angular/core';
// import { movimento } from './../../../model/movimento';
import { MovimentoService } from "./../../services/movimento.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  movimentos: any;
  dataAtual = new Date();
  month = 0
  monthNames: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  constructor(
    private service: MovimentoService
  ) { }

  ngOnInit(): void {
    this.month = this.dataAtual.getMonth() + 1; // Os meses em JavaScript são baseados em zero, então é necessário adicionar 1
    this.listMovimentos(this.month)

  }

  listMovimentos(month): void {
    console.log(month);

    this.service.getByMonth(month)
      .subscribe(movimentos => {
        this.movimentos = movimentos;
      })
  }

  removeMovimento(id: string): void {
    this.service.deleteOne(id).subscribe()
    this.listMovimentos(this.month)
  }

  editMovimento(id) {

  }

  addMonth() {
    this.month += 1
    this.listMovimentos(this.month)
  }

  remMonth() {
    this.month -= 1
    this.listMovimentos(this.month)
  }
}
