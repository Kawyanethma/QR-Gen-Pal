import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly darkThemeClass = 'dark';
  private readonly darkIcon = 'pi pi-moon';
  private readonly lightIcon = 'pi pi-sun';

  // Media query to detect system preference
  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // Create a signal for the theme state
  private readonly theme = signal<'dark' | 'light'>(this.getInitialTheme());

  // Computed signal for the icon based on theme
  readonly icon = computed(() =>
    this.theme() === 'dark' ? this.darkIcon : this.lightIcon
  );

  constructor() {
    // Set initial theme on document
    this.applyTheme(this.theme());

    // Listen for system preference changes
    this.mediaQuery.addEventListener('change', (event) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = event.matches ? 'dark' : 'light';
        this.theme.set(newTheme);
        this.applyTheme(newTheme);
        }
      });
  }

  toggleTheme(): void {
    const newTheme = this.theme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    this.theme.set(newTheme);
    this.applyTheme(newTheme);
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add(this.darkThemeClass);
    } else {
      element.classList.remove(this.darkThemeClass);
    }
  }

  private getInitialTheme(): 'dark' | 'light' {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches
      ? 'dark'
      : 'light';
  }
}
