import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <main>
      <app-header />
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        padding: 15px;
       display: flex; 
    flex-direction: column; 
      }
    `,
  ],
})
export class App {
  protected title = 'qr-pal';
}
