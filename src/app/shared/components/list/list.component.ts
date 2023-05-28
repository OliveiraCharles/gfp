import { Component } from '@angular/core';
import { User } from './../../../model/User';
import { ApiRequestService } from "./../../services/api-request.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  users: User[] = []

  constructor(id: String, body: Object, private apiRequest: ApiRequestService) {
    this.id = id
    this.body = body
  }
  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers() {
    console.log('component get users')
    await this.apiRequest.getAll()
      .then(users => {
        this.users = users
      })
      .catch(err => console.error(err))

  }

  deleteUser(id) {
    this.apiRequest.deleteOne(id)
    this.getUsers()
  }

}
