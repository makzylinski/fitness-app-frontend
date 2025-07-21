import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  constructor(private navigationService: NavigationService) {}

  goBack(): void {
    this.navigationService.navigateToLogin();
  }
}
