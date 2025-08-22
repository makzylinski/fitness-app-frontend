import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout/workout.component';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [WorkoutComponent, ExercisesComponent, AddExerciseComponent],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent {}
