import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; //--Para trabalhar com o "ngModel" e "ngModelChange" no template

@Component({
  selector: 'app-temperatura',
  imports: [FormsModule], //--Disponibilidade do "FormeModule" para ser usado no "temperatura.html"
  standalone: true, //--Este componente é autossuficiente. Ele não precisa ser declarado em um @NgModule e é responsável por importar tudo o que precisa para funcionar.
  templateUrl: './temperatura.html',
  //styleUrl: './temperatura.css',
})

export class Temperatura {
  celsius = signal(0);

  //--Os sinais computed dependem de outros sinais e são recalculados automaticamente quando os sinais dos quais dependem mudam.
  fahrenheit = computed(() => (this.celsius() * 9/5) + 32); //--Sinal computed que depende do sinal celsius


}
