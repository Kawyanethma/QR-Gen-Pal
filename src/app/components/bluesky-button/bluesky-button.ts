import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-bluesky-button',
  imports: [ButtonModule],
  templateUrl: './bluesky-button.html',
  styleUrl: './bluesky-button.scss',
  providers: [MessageService],
})
export class BlueskyButton {}
