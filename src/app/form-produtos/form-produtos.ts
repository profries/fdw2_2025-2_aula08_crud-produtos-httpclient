import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoApiService } from '../produto-api-service';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-produtos.html',
  styleUrl: './form-produtos.css'
})
export class FormProdutos {
  id?: number;
  produto = signal<Produto>(new Produto());
  botaoAcao = "Cadastrar"

  produtoApiService = inject(ProdutoApiService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.botaoAcao = "Editar";
      this.produtoApiService.buscarPorId(this.id).subscribe(produtoEncontrado => {
        this.produto.set(produtoEncontrado); 
      }) 
    }
  }

  salvar(){ 
    if(this.id) {//Editar
      this.produtoApiService.editar(this.id, this.produto()).subscribe(produtoAlterado => {
        alert(`Produto ${produtoAlterado.nome} editado com sucesso!`)
      });
    }
    else {

        this.produtoApiService.inserir(this.produto()).subscribe(
          (prod) => {
            alert(`Produto ${prod.nome} cadastrado com sucesso!`)
            this.produto.set(new Produto());
          }
        )
      }
  }

  voltar() {
    this.router.navigate(['/tabela'])
  }

}
