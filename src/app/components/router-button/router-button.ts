import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-router-button',
  imports: [ButtonModule],
  templateUrl: './router-button.html',
  styleUrl: './router-button.scss',
})
export class RouterButton {
  router = inject(Router);

  navigateToGenerate() {
    // Navigation logic to the QR generation page
    this.router.navigate(['/app']);
  }
}
