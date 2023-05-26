import { Component } from '@angular/core';
import { User } from '../../../_model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  users: User[]
  
  constructor(private apiRequest: ApiRequestService) { }
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

  deleteUser(id){
    this.apiRequest.deleteOne(id)
    this.getUsers()
  }

}
