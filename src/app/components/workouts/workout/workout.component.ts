import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, combineLatest, map, of } from 'rxjs';
import { WorkoutsService } from '../../../services/workouts.service';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutComponent implements OnInit {
  workoutForm: FormGroup;
  isFormSubmittable$: Observable<boolean> = of(false);

  constructor(
    private formBuilder: FormBuilder,
    private workoutsService: WorkoutsService
  ) {
    const today = new Date().toISOString().split('T')[0];
    this.workoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: [today, Validators.required],
      notes: [''],
    });
  }

  ngOnInit() {
    this.isFormSubmittable$ = combineLatest([
      this.workoutForm.statusChanges.pipe(map(() => this.workoutForm.valid)),
      this.workoutsService
        .selectExercisesLength()
        .pipe(map((length) => length > 0)),
    ]).pipe(map(([isFormValid, hasExercises]) => isFormValid && hasExercises));

    this.workoutsService.getWorkouts().subscribe((e) => console.log(e));
  }

  onSubmit(): void {
    this.workoutsService.saveWorkout(this.workoutForm.value).subscribe();
  }

  get name() {
    return this.workoutForm.get('name');
  }

  get date() {
    return this.workoutForm.get('date');
  }

  get notes() {
    return this.workoutForm.get('notes');
  }
}
