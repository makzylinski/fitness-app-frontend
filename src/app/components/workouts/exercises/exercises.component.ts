import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [],
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
