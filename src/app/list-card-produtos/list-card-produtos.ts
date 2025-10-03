import { Component, effect, signal } from '@angular/core';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoApiService } from '../produto-api-service';
import { Produto } from '../produto';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-card-produtos',
  imports: [CardProduto, AsyncPipe],
  templateUrl: './list-card-produtos.html',
  styleUrl: './list-card-produtos.css'
})
export class ListCardProdutos {
  listaProdutos = signal<Produto[]>([]);
  listaProdutos$!: Observable<Produto[]>;

  constructor(private produtoApiService: ProdutoApiService) {
      // this.produtoApiService.listar().subscribe((produtos) => {
      //   this.listaProdutos.set(produtos);
      //   console.log("Produtos: ",this.listaProdutos)
      // });
      effect(()=> {
        this.listaProdutos$ = this.produtoApiService.listar();
      })
  }

}
