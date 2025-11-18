import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'app-meal-log',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './meal-log.component.html',
  styleUrl: './meal-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealLogComponent {

}
