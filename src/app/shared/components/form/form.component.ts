import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private apiReq: ApiRequestService
  ) {

  }

  addMovimento(data: any) {
    console.log(data);
    this.apiReq.addMovimento(data).subscribe((result: any) => {
      console.log(result);

    })
  }
}
