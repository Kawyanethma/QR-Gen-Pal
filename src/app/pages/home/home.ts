import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { Hero } from './sections/hero/hero';
import { Feature } from './sections/feature/feature';
import { Questions } from './sections/questions/questions';
import { NgxParticlesComponent } from "@omnedia/ngx-particles";

@Component({
  selector: 'app-home',
  imports: [ButtonModule, Hero, Feature, Questions, NgxParticlesComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
