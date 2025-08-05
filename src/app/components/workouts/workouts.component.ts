import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutComponent } from './workout/workout.component';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, WorkoutComponent],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent {}
