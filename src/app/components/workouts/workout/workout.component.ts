import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WorkoutsService } from '../../../services/workouts.service';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutComponent {
  workoutForm: FormGroup;

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

  onSubmit(): void {
    console.log(this.workoutForm.value);
    this.workoutsService
      .selectExercisesLength()
      .subscribe((e) => console.log(e));
    // this.workoutsService.saveExercise(this.workoutForm)
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
