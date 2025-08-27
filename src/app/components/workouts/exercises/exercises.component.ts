import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExerciseSet } from '../../../models/exercise.model';
import { WorkoutsService } from '../../../services/workouts.service';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesComponent implements OnInit {
  exercises: Observable<ExerciseSet[]> = of([]);

  constructor(private workoutsService: WorkoutsService) {}

  ngOnInit(): void {
    this.exercises = this.workoutsService.selectExercises();
  }
}
