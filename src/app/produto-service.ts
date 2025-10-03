import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private proxId = 6;
  listaProdutos: Produto[] = [
    {id: 1, nome:"Produto 1", preco: 100, marca: "Marca 1", dataValidade: new Date("2026-01-01")},
    {id: 2, nome:"Produto 2", preco: 200, marca: "Marca 1", dataValidade: new Date("2026-01-05")},
    {id: 3, nome:"Produto 3", preco: 300, marca: "Marca 1", dataValidade: new Date("2026-01-05")},
    {id: 4, nome:"Produto 4", preco: 400, marca: "Marca 2", dataValidade: new Date("2026-01-22")},
    {id: 5, nome:"Produto 5", preco: 500, marca: "Marca 2", dataValidade: new Date("2026-01-22")},
  ];

  inserir(produto: any){
    produto.id = this.proxId++;
    this.listaProdutos.push(produto);
  }  

  listar() {
    return this.listaProdutos;
  }

  buscarPorId(id?: number) {
    const produto = this.listaProdutos.find(
      produto => produto.id == id
    );
    return Object.assign({}, produto);
  }

  editar(id: number, produto: Produto) {
    const indice = this.getIndice(id);
    if(indice >= 0) {
      this.listaProdutos[indice] = produto;
    }
  }

  deletar(id?:number) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaProdutos.splice(indice, 1);
    }
  }

  private getIndice(id?:number) {
    return this.listaProdutos.findIndex(
      produto => produto.id == id
    );
  }
}
