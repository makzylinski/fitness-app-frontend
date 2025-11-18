import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-meal-log',
  standalone: true,
  imports: [],
  templateUrl: './meal-log.component.html',
  styleUrl: './meal-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealLogComponent {

}
