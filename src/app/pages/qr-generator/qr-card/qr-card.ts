import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  input,
  output,
  effect,
  signal,
  computed,
} from '@angular/core';
import QRCodeStyling from 'qr-code-styling';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';

// Types
type Extension = 'png' | 'jpeg' | 'webp' | 'svg';

interface ExtensionOption {
  label: string;
  value: Extension;
}

interface QRStyleConfig {
  width: number;
  height: number;
  type: 'canvas' | 'svg';
  data: string;
  image?: string;
  margin: number;
}
@Component({
  selector: 'app-qr-card',
  imports: [
    CardModule,
    ButtonModule,
    SelectModule,
    FormsModule,
    SelectButton,
    SliderModule,
  ],

  templateUrl: './qr-card.html',
  styleUrl: './qr-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrCard {
  data = input<string>('hello');
  dataChange = output<string>();
  resolution = 300;
  downloadResolution = 300;
  allExtensions = [
    { label: 'SVG', value: 'svg' },
    { label: 'PNG', value: 'png' },
    { label: 'JPEG', value: 'jpeg' },
    { label: 'WEBP', value: 'webp' },
  ];
  extension = 'png';
  qrCode: QRCodeStyling | undefined;

  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

  constructor() {
    // Watch for data changes and update QR code
    effect(() => {
      if (this.qrCode) {
        this.qrCode.update({
          data: this.data(),
        });
        this.updateCanvasSize();
      }
    });
  }

  ngOnInit(): void {
    this.qrCode = new QRCodeStyling({
      width: this.resolution,
      height: this.resolution,
      type: 'canvas',
      data: this.data(),
      image: '/favicon.ico',
      margin: 10,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q',
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 20,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#000',
        gradient: {
          type: 'linear', // 'radial'
          rotation: 0,
          colorStops: [
            { offset: 0, color: '#1720dbff' },
            { offset: 1, color: '#77779C' },
          ],
        },
        type: 'rounded',
      },
      backgroundOptions: {
        color: 'transparent',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#000',
        type: 'extra-rounded',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#000',
        type: 'dot',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      },
    });

    this.qrCode.append(this.canvas.nativeElement);
  }

  onInput(data: string): void {
    if (this.qrCode) {
      this.qrCode.update({
        data: data,
      });
    }
  }

  onChangeResolution(event: any): void {
    this.resolution = event.value;
    if (this.qrCode) {
      this.qrCode.update({
        width: this.resolution,
        height: this.resolution,
      });
      // this.qrCode.append(this.canvas.nativeElement);
      // Optionally scale down via CSS:
      this.updateCanvasSize();
    }
  }

  private updateCanvasSize(): void {
    this.canvas.nativeElement.firstElementChild.style.width = '300px';
    this.canvas.nativeElement.firstElementChild.style.height = '300px';
  }

  download(): void {
    console.log(this.extension);
    if (this.qrCode) {
      this.qrCode.download({
        extension: this.extension as Extension,
      });
    }
  }
}
