import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-toggle-theme',
  imports: [ButtonModule],
  templateUrl: './toggle-theme.html',
  styleUrl: './toggle-theme.scss',
})
export class ToggleTheme {
  icon = signal<string>('');
  constructor(private themeService: ThemeService) {
    this.icon.set(this.themeService.icon());
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.icon.set(this.themeService.icon());
  }
}
