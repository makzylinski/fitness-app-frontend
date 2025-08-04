import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
    title: 'Sign Up - Fitness App',
  },
  // TODO: Add more routes as components are created
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [authGuard],
    title: 'Dashboard - Fitness App',
  },
  {
    path: 'workouts',
    loadComponent: () =>
      import('./components/workouts/workouts.component').then(
        (c) => c.WorkoutsComponent
      ),
    canActivate: [authGuard],
    title: 'Dashboard - Fitness App',
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
