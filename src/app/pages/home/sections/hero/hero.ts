import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { GithubButton } from '@components/github-button/github-button';
import { RouterButton } from '@components/router-button/router-button';

@Component({
  selector: 'app-hero',
  imports: [GithubButton, RouterButton, TagModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
