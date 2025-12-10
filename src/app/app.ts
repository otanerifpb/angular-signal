//--http://angular.dev
//--Material apoio Prof. Dantas: https://github.com/franciscodnn/pweb1-2025-2/tree/main/classes/7_angular_fundamentals

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './shared/contador/contador';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador],
  templateUrl: './app.html',
  // styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-signal');
}
