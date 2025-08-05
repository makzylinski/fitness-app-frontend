import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddExerciseComponent } from '../add-exercise/add-exercise.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [AddExerciseComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesComponent {
  exercises = [
    {
      id: 1,
      name: 'Bench Press',
      sets: 3,
      reps: 12,
      weight: '50kg',
    },
  ];
}
