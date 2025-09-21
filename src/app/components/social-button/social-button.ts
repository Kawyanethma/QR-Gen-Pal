import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-social-button',
  imports: [ButtonModule],
  templateUrl: './social-button.html',
  styleUrl: './social-button.scss',
})
export class SocialButton {
  buttonType = input.required<string>({ alias: 'buttonType' });
  buttonLink = input.required<string>({ alias: 'buttonLink' });

  getButtonIcon() {
    switch (this.buttonType()) {
      case 'bluesky':
        return 'fa-brands fa-bluesky';
      case 'x-twitter':
        return 'fa-brands fa-x-twitter';
      default:
        return 'default-icon';
    }
  }

  onButtonClick() {
    window.open(this.buttonLink(), '_blank');
  }
}
