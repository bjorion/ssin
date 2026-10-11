import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {SsinService} from '../service/ssin-service';

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

  protected inputSsin: WritableSignal<string> = signal('');

  protected readonly formattedSsin = computed(() => SsinService.formatSsin(this.inputSsin()))

  protected readonly pureSsin: Signal<string> = computed(() => SsinService.stripSsin(this.inputSsin()));


}
