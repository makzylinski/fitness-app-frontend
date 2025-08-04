import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.workoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log('Submit');
  }

  get name() {
    return this.workoutForm.get('name');
  }
}
