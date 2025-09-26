import { Component } from '@angular/core';

import { Logo } from '@components/logo/logo';
import { ToggleTheme } from '@components/toggle-theme/toggle-theme';
import { SocialButton } from '@components/social-button/social-button';
import { GithubButton } from '@components/github-button/github-button';


@Component({
  selector: 'app-header',
  imports: [ToggleTheme, Logo, GithubButton, SocialButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
