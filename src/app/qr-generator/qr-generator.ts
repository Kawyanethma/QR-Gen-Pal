import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Textarea } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-generator',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    Textarea,
    CardModule,
    TooltipModule,
    DividerModule
  ],
  templateUrl: './qr-generator.html',
  styleUrl: './qr-generator.css'
})
export class QrGenerator {
  inputText = signal('');
  qrCodeDataUrl = signal('');
  isGenerating = signal(false);
  
  placeholder = computed(() => 
    'Enter text or URL to generate QR code...\n\nExamples:\n• https://example.com\n• Hello World!\n• Contact info\n• WiFi credentials'
  );

  async generateQRCode() {
    const text = this.inputText().trim();
    if (!text) return;

    this.isGenerating.set(true);
    
    try {
      const dataUrl = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      this.qrCodeDataUrl.set(dataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      this.isGenerating.set(false);
    }
  }

  downloadQRCode() {
    const dataUrl = this.qrCodeDataUrl();
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = dataUrl;
    link.click();
  }

  clearForm() {
    this.inputText.set('');
    this.qrCodeDataUrl.set('');
  }
}
