import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {
  //100 -> R$ 100,00
  transform(valor: number | undefined): string {
    if(!valor) return "";
    //100 -> 100.00
    const valorDecimal = valor.toFixed(2);
    //100.00 -> 100,00
    const valorDecimalBr = valorDecimal.replace('.', ',');
    //100,00 -> R$ 100,00
    const valorMoeda = `R$ ${valorDecimalBr}`;
    return valorMoeda;
  }

}
