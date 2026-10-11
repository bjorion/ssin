import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {MainPage} from './main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ssin');
}
