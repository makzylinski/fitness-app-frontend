import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExerciseSet } from '../../../models/exercise.model';
import { WorkoutsService } from '../../../services/workouts.service';
import { AddExerciseComponent } from '../add-exercise/add-exercise.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, AddExerciseComponent],
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
