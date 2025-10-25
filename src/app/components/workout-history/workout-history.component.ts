import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-workout-history',
  standalone: true,
  imports: [],
  templateUrl: './workout-history.component.html',
  styleUrl: './workout-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutHistoryComponent {

}
