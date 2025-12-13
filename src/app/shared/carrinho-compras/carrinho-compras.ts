import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-carrinhoCompras',
  imports: [],
  templateUrl: './carrinho-compras.html',
  styleUrl: './carrinho-compras.css',
})

export class CarrinhoCompras {
  itens = signal<string[]>([]); //--Indica que teremos um arrey em lista "string[]", o "[]" indicar que o array inicia vazio
  totalItens = computed(() => this.itens().length); //--Contar a quantidade de itens em um carrinho de compras

  //--Effects permitem executar código quando sinais mudam, útil para operações colaterais como logging, chamadas de API, etc.
  construtor(){
    //--Efeito é executado inicialmente e depois sempre que totalItens mudar
    effect(() => {
      console.log(`Seu carrinho está com ${this.totalItens()} item(s).`);

      if (this.totalItens() > 0) {
        this.salvarLocal();
      }
    });
  }

  adicionarItem() {
    this.itens.update(itensAtuais => [...itensAtuais, `Item ${itensAtuais.length + 1}`]);
  }

  salvarLocal() {
    localStorage.setItem('carrinho', JSON.stringify(this.itens()));
  }
}
