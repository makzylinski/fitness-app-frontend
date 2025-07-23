import { Routes } from '@angular/router';

export const fullRoutesTemplate: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
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
  // {
  //   path: 'register',
  //   loadComponent: () =>
  //     import('./components/register/register.component').then(
  //       (c) => c.RegisterComponent
  //     ),
  //   title: 'Register - Fitness App',
  // },

  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('./components/dashboard/dashboard.component').then(
  //       (c) => c.DashboardComponent
  //     ),
  //   title: 'Dashboard - Fitness App',
  //   // canActivate: [authGuard] // Uncomment when auth guard is ready
  // },

  // {
  //   path: 'workouts',
  //   loadChildren: () =>
  //     import('./features/workouts/workouts.routes').then(
  //       (r) => r.workoutsRoutes
  //     ),
  //   // canActivate: [authGuard]
  // },

  // {
  //   path: 'exercises',
  //   loadChildren: () =>
  //     import('./features/exercises/exercises.routes').then(
  //       (r) => r.exercisesRoutes
  //     ),
  //   // canActivate: [authGuard]
  // },

  // {
  //   path: 'progress',
  //   loadChildren: () =>
  //     import('./features/progress/progress.routes').then(
  //       (r) => r.progressRoutes
  //     ),
  //   // canActivate: [authGuard]
  // },

  // {
  //   path: 'nutrition',
  //   loadChildren: () =>
  //     import('./features/nutrition/nutrition.routes').then(
  //       (r) => r.nutritionRoutes
  //     ),
  //   // canActivate: [authGuard]
  // },

  // {
  //   path: 'profile',
  //   loadComponent: () =>
  //     import('./components/profile/profile.component').then(
  //       (c) => c.ProfileComponent
  //     ),
  //   title: 'Profile - Fitness App',
  //   // canActivate: [authGuard]
  // },
  // {
  //   path: 'settings',
  //   loadComponent: () =>
  //     import('./components/settings/settings.component').then(
  //       (c) => c.SettingsComponent
  //     ),
  //   title: 'Settings - Fitness App',
  //   // canActivate: [authGuard]
  // },

  // {
  //   path: 'about',
  //   loadComponent: () =>
  //     import('./components/about/about.component').then(
  //       (c) => c.AboutComponent
  //     ),
  //   title: 'About - Fitness App',
  // },
  // {
  //   path: 'contact',
  //   loadComponent: () =>
  //     import('./components/contact/contact.component').then(
  //       (c) => c.ContactComponent
  //     ),
  //   title: 'Contact - Fitness App',
  // },

  // {
  //   path: '404',
  //   loadComponent: () =>
  //     import('./components/not-found/not-found.component').then(
  //       (c) => c.NotFoundComponent
  //     ),
  //   title: '404 - Page Not Found',
  // },
  {
    path: '**',
    redirectTo: '/404',
  },
];
