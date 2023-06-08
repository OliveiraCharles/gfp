import { Component } from '@angular/core';
// import { movimento } from './../../../model/movimento';
import { ApiRequestService } from "./../../services/api-request.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  movimentos: any;

  constructor(
    private apiReq: ApiRequestService
  ) { }
  ngOnInit(): void {
    this.listMovimentos()

  }

  async listMovimentos(): Promise<void> {
    this.apiReq.listMovimento()
      .subscribe(movimentos => {
        this.movimentos = movimentos;
      })
  }

  removeMovimento(id: string): void {
    this.apiReq.removeMovimento(id).subscribe()
    console.log(id);
    this.listMovimentos()
  }
}
