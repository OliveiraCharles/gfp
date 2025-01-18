import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class MovimentoService {
  constructor(
    private http: HttpClient) { }

  addOne(movimento: any) {
    console.log('\nMovimento - addOne');

    return this.http.post(`${API_URL}/movimentos`, movimento)
  }

  getAll() {
    return this.http.get(`${API_URL}/movimentos`)
  }

  deleteOne(id: string) {
    return this.http.delete(`${API_URL}/movimentos/${id}`)
  }

  getOne(id: string) {
    return this.http.get(`${API_URL}/movimentos/id/${id}`)
  }

  editOne(movimento: any) {
    console.log(movimento);
    console.log('\nMovimento - editOne');
    console.log(movimento.id);
    
    return this.http.put(`${API_URL}/movimentos/${movimento.id}`, movimento)
  }

  getByMonth(year: number, month: number) {
    return this.http.get(`${API_URL}/movimentos/by-month/${year}/${month}`)
  }
}
