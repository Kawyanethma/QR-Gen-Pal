import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
