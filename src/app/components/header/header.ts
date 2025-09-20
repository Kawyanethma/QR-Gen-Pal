import { Component } from '@angular/core';
import { ToggleTheme } from '../toggle-theme/toggle-theme';

import { Logo } from '../logo/logo';
import { GithubButton } from '../github-button/github-button';
import { TwitterButton } from '../twitter-button/twitter-button';
import { BlueskyButton } from '../bluesky-button/bluesky-button';

@Component({
  selector: 'app-header',
  imports: [ToggleTheme, Logo, TwitterButton, BlueskyButton, GithubButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
