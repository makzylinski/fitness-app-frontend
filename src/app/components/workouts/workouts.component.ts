import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [WorkoutComponent, ExercisesComponent],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent {}
