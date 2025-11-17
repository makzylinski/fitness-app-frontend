import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToLogin(): Promise<boolean> {
    return this.router.navigate(['/login']);
  }

  navigateToSignUp(): Promise<boolean> {
    return this.router.navigate(['/signup']);
  }

  navigateToDashboard(): Promise<boolean> {
    return this.router.navigate(['/dashboard']);
  }

  navigateToWorkouts(): Promise<boolean> {
    return this.router.navigate(['/workouts']);
  }

  navigateToWorkoutHistory(): Promise<boolean> {
    return this.router.navigate(['/workout-history']);
  }

  navigateToMealLog(): Promise<boolean> {
    return this.router.navigate(['/meal-log']);
  }
}
