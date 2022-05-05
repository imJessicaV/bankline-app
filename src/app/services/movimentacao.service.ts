import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  findById(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
 }
}
