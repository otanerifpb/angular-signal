import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  // styleUrl: './contador.css',
})

export class Contador {
  contador = signal(0); //--sinaliza que "contador" é um sinal e iniciou com "0"

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
}



