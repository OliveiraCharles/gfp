import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class MovimentoService {
  constructor(
    private http: HttpClient) { }

  addOne(movimento: any) {
    return this.http.post(`${API_URL}/movimentos`, movimento)
  }

  getAll() {
    return this.http.get(`${API_URL}/movimentos`)
  }

  deleteOne(id: string) {
    return this.http.delete(`${API_URL}/movimentos/${id}`)
  }
  
  getByMonth(month:number){
    return this.http.get(`${API_URL}/movimentos/mes/${month}`)

  }
}
