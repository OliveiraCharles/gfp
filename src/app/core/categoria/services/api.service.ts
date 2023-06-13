import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './../../../../environments/environment';

import { Categoria } from '../../../../../1-Entities/MovimentoFinanceiro/valueObjects/Categoria/categoria';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(
    private http: HttpClient) { }

  addOne(categoria: any) {
    return this.http.post(`${API_URL}/categorias`, categoria)
  }

  getAll() {
    return this.http.get(`${API_URL}/categorias`)
  }

  deleteOne(id: string) {
    return this.http.delete(`${API_URL}/categorias/${id}`)
  }

  getOne(id: string) {
    return this.http.get(`${API_URL}/categorias/id/${id}`)
  }

  editOne(categoria: Categoria) {
    console.log('service');
    
    return this.http.put(`${API_URL}/categorias/${categoria.id}`, categoria)
  }

  getByMonth(month: number) {
    return this.http.get(`${API_URL}/categorias/mes/${month}`)
  }
}
