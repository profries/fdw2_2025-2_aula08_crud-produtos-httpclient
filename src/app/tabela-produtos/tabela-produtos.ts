import { Component, effect, inject, signal } from '@angular/core';
import { Produto } from '../produto';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { MoedaPipe } from '../moeda-pipe';
import { FormsModule } from '@angular/forms';
import { FiltroPesquisaPipe } from '../filtro-pesquisa-pipe';
import { RouterLink } from '@angular/router';
import { ProdutoApiService } from '../produto-api-service';

@Component({
  selector: 'app-tabela-produtos',
  imports: [FormsModule, MoedaPipe, UpperCasePipe, DatePipe, RouterLink, AsyncPipe, FiltroPesquisaPipe],
  templateUrl: './tabela-produtos.html',
  styleUrl: './tabela-produtos.css'
})
export class TabelaProdutos {
  listaProdutos = signal<Produto[]>([]);
  nomePesquisa = "";
  private produtoApiService = inject(ProdutoApiService);

  constructor() {
    this.listar();
  }

  listar() {
    this.produtoApiService.listar().subscribe((produtos) => {
      this.listaProdutos.set(produtos);
    });
  }

  deletar(id?:number) {
    this.produtoApiService.deletar(id).subscribe(produto => {
      alert(`Produto ${produto.nome} deletado com sucesso!`);
      this.listar();
    });
  }

}
