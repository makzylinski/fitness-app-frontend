import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'app-workout-history',
  standalone: true,
  imports: [],
  templateUrl: './workout-history.component.html',
  styleUrl: './workout-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutHistoryComponent implements OnInit {

  constructor(private readonly workoutsService: WorkoutsService) { }

  ngOnInit(): void {
    this.workoutsService.getWorkouts().subscribe((workouts) => {
      console.log('Fetched workouts:', workouts);
    });
  }
}
