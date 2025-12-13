import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './shared/contador/contador';
import { Temperatura } from './shared/temperatura/temperatura';
import { CarrinhoCompras } from './shared/carrinho-compras/carrinho-compras';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, Temperatura, CarrinhoCompras],
  templateUrl: './app.html',
  // styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-signal');
}
