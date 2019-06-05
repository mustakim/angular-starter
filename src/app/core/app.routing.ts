import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'home',
    loadChildren: '../pages/core/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
