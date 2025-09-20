import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-twitter-button',
  imports: [ButtonModule],
  templateUrl: './twitter-button.html',
  styleUrl: './twitter-button.scss',
})
export class TwitterButton {}
