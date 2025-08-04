import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutsComponent {

}
