import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { MoedaPipe } from '../moeda-pipe';

@Component({
  selector: 'app-card-produto',
  imports: [MoedaPipe],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  @Input() produto: Produto = { id:1, nome:"Produto 1", preco: 100 };
}
