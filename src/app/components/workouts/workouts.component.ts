import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent {
  workoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private workoutsService: WorkoutsService
  ) {
    this.workoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', Validators.required],
      notes: [''],
    });
  }

  onSubmit(): void {
    console.log(this.workoutForm);
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
