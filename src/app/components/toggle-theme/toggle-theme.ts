import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-toggle-theme',
  imports: [ButtonModule],
  templateUrl: './toggle-theme.html',
  styleUrl: './toggle-theme.scss',
})
export class ToggleTheme {
  protected readonly darkIcon = 'pi pi-moon';
  protected readonly lightIcon = 'pi pi-sun';
  protected theme = localStorage.getItem('theme') || 'light';
  protected readonly icon = signal(
    this.theme === 'dark' ? this.darkIcon : this.lightIcon
  );

  ngOnInit(): void {
    this.updateTheme();
  }

  toggleTheme(): void {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    this.theme = newTheme;
    this.updateTheme();
  }

  private updateTheme(): void {
    const element = document.querySelector('html');
    if (this.theme === 'dark') {
      element?.classList.add('dark');
      this.icon.set(this.darkIcon);
    } else {
      element?.classList.remove('dark');
      this.icon.set(this.lightIcon);
    }
  }
}
