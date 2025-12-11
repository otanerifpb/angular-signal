import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './shared/contador/contador';
import { Temperatura } from './shared/temperatura/temperatura';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, Temperatura],
  templateUrl: './app.html',
  // styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-signal');
}
