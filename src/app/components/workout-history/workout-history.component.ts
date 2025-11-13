import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../services/workouts.service';
import { Observable, of } from 'rxjs';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-history.component.html',
  styleUrl: './workout-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutHistoryComponent implements OnInit {
  workouts$: Observable<Workout[]> = of([]);
  constructor(private readonly workoutsService: WorkoutsService) { }

  ngOnInit(): void {
    this.workouts$ = this.workoutsService.selectWorkouts();

  }
}
