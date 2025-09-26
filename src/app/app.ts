import { Component, signal } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgxFadeComponent } from '@omnedia/ngx-fade';

import { Header } from '@layout/header/header';
import { Footer } from '@layout/footer/footer';
import { MainLoader } from '@components/main-loader/main-loader';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    ProgressSpinnerModule,
    MainLoader,
    Footer,
    NgxFadeComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
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
