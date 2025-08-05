import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectComponent } from '../../../shared/components/select/select.component';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExerciseComponent {
  testOptions = ['opcja 1', 'opcja 2', 'opcja 3'];
}
