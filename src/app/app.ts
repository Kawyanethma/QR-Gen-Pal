import { Component, OnInit, signal } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { Header } from '@layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  protected readonly loadingRouteConfig = signal(false);

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig.set(true);
        console.log('Loading route configuration...');
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig.set(false);
        console.log('Finished loading route configuration.');
      }
    });
  }
}
