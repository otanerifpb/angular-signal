import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperatura',
  imports: [FormsModule],
  standalone: true, //--Este componente é autossuficiente. Ele não precisa ser declarado em um @NgModule e é responsável por importar tudo o que precisa para funcionar.
  templateUrl: './temperatura.html',
  //styleUrl: './temperatura.css',
})

export class Temperatura {
  celsius = signal(0);

  fahrenheit = computed(() => (this.celsius() * 9/5) + 32); //--Sinal computado que depende do sinal celsius
}
