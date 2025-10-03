import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {
  private BASE_API = 'http://localhost:3000/produtos';
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })
  }
  private http = inject(HttpClient);

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.BASE_API);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      this.BASE_API, produto, this.httpOptions
    );
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.BASE_API}/${id}`, this.httpOptions);
  }

  editar(id: number, produto: Produto): Observable<Produto> {
    const uri = this.BASE_API+'/'+id;
    return this.http.put<Produto>(uri, produto, this.httpOptions);
  }

  
  deletar(id?: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.BASE_API}/${id}`, this.httpOptions);
  }

}
