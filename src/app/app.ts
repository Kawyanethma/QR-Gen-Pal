import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrGenerator } from './qr-generator/qr-generator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QrGenerator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QR Gen Pal');
}
