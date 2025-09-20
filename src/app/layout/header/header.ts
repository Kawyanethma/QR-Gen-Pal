import { Component } from '@angular/core';

import { Logo } from '@components/logo/logo';
import { ToggleTheme } from '@components/toggle-theme/toggle-theme';
import { TwitterButton } from '@components/twitter-button/twitter-button';
import { BlueskyButton } from '@components/bluesky-button/bluesky-button';
import { GithubButton } from '@components/github-button/github-button';

@Component({
  selector: 'app-header',
  imports: [ToggleTheme, Logo, TwitterButton, BlueskyButton, GithubButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
