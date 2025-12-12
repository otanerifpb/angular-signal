import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  imports: [FormsModule],
  templateUrl: './contador.html',
  // styleUrl: './contador.css',
})

export class Contador {
  contador = signal(0); //--------Sinaliza que "contador" é um sinal e iniciou com "0"
  novoValor = signal(0); //-------Constante sinal para atualizar o contador, com valor de entreda por um user
  caixaEntrada = signal(' '); //--Entreda dados com caixa valizia

  incrementar() {
    this.contador.update(valor => valor + 1); //--Soma +1 ao valor anterior
  }

  decrementar() {
    this.contador.update(valor => valor - 1); //--Diminue -1 do valor anterior
  }

  setContador() {
    this.contador.set(10); //---------Método set(): Substitui o valor atual para 10
    console.log(this.contador()); //--Mostra o valor atual
  }

  updateContador() {
    this.contador.update(valor => valor * 2); //--Método update(): Dobra o valor anterior
    console.log(this.contador()); //--------------Mostra o valor atual
  }

  //--Método mutate(): Para objetos e arrays, permite modificar propriedades diretamente
  mutateContador(){
    const usuarioSinal = signal({ nome: 'João', idade: 30 });
    //usuarioSinal.mutate(usuario => {usuario.idade = 31; }); //--Não esta aceitando o "mutate"
  }

  startValor() {
    const startValor = this.novoValor(); //--Pegar o valor informado no template
    //this.contador.update(this.startValor());
    this.contador.set(startValor); //--------Pega o valor do template e atualiza o contador
  }

  zerarContador() {
    this.contador.set(0);
  }

  limparStart() {
    //this.novoValor.set(' '); //--Não é permitido porque o 'type é number'
    this.novoValor.set(0); //------Como o 'type é number' precisa voltar para zero
  }

  limparInput() {
    this.caixaEntrada.set(' '); //--Limpar a caixa de entrada de dados
  }
}



