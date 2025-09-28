import { Component } from '@angular/core';

import { QrCard } from './qr-card/qr-card';
import { DataForms } from './data-forms/data-forms';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [DataForms, QrCard],
  templateUrl: './qr-generator.html',
  styleUrl: './qr-generator.scss',
})
export class QrGenerator {
  qrData = 'helloW';

  onDataChange(newData: string): void {
    this.qrData = newData;
  }
}
