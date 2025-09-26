import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-main-loader',
  imports: [ProgressSpinnerModule],
  templateUrl: './main-loader.html',
  styleUrl: './main-loader.scss',
})
export class MainLoader {}
