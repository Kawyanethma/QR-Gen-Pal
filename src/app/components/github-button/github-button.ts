import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-github-button',
  imports: [ButtonModule],
  templateUrl: './github-button.html',
  styleUrl: './github-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubButton {
  star = input(false);
  protected readonly githubUrl: string = 'https://github.com/Kawyanethma/QR-Gen-Pal';

  openGitHub() {
    window.open(this.githubUrl, '_blank');
  }
}
