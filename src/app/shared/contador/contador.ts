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

}

// No código TypeScript
// console.log(this.contador()); // Mostra o valor atual

