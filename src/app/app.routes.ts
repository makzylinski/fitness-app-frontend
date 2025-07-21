import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
    title: 'Login - Fitness App',
  },
  // TODO: Add more routes as components are created
  // {
  //   path: 'dashboard',
  //   loadComponent: () => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent),
  //   title: 'Dashboard - Fitness App'
  // },
  {
    path: '**',
    redirectTo: '/login',
  },
];
