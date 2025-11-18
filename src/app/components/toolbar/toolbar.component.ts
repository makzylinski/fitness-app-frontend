import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  onLogout(): void {
    this.authService.logout();
  }

  onDashboardClick(): void {
    this.navigationService.navigateToDashboard();
  }

  onWorkoutsClick(): void {
    this.navigationService.navigateToWorkouts();
  }

  onMealLogClick(): void {
    this.navigationService.navigateToMealLog();
  }

  onWorkoutHistoryClick(): void {
    this.navigationService.navigateToWorkoutHistory();
  }
}
