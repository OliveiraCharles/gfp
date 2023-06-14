import { Injectable } from '@angular/core';
import { API_URL } from '../src/environments/environment';
import { User } from '../4-DB/models/userModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCrud {

  constructor(
    private http: HttpClient,
  ) { }

  add(user: User) {
    console.log('service');
    console.log(user);
    
    return this.http.post(`${API_URL}/users`, user)
  }
  
  login(user: User){
    return this.http.post(`${API_URL}/users/login`, user)
    
  }
}
