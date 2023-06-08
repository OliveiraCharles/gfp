import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import { API_URL } from './../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  id: String;
  body: Object;

  constructor(id: String, body: Object, private http: HttpClient) {
    this.id = id;
    this.body = body
  }

  async getAll() {
    return await this.http.get<User[]>(`${API_URL}/users`).toPromise()
  }

  async createOne(body: Object) {
    return await this.http.post<User>(`${API_URL}/users`, body).toPromise()
  }

  async deleteOne(id: String) {
    return await this.http.delete<User>(`${API_URL}/users/${id}`).toPromise()
  }

  async updateOne(id: String, body: Object) {
    return await this.http.put<User>(`${API_URL}/users/${id}`, body).toPromise()
  }
}
