import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {Ssin} from '../model/ssin';

@Component({
  imports: [
    MatFormField,
    MatInputModule,
    MatLabel,
    FormsModule
  ],
  selector: 'app-main-page',
  styleUrl: './main-page.css',
  templateUrl: './main-page.html',
})
export class MainPage {

  protected readonly inputSsin: WritableSignal<string> = signal('');

  protected readonly ssin: Signal<string> = computed(() => this.inputSsin());

  constructor() {
    effect(() => {
      console.log(`The value entered is: [${this.inputSsin()}]`)
    })
  }


}
