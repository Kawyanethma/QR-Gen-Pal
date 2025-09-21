import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  {
    path: 'app',
    loadComponent: () =>
      import('./pages/qr-generator/qr-generator').then((m) => m.QrGenerator),
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
