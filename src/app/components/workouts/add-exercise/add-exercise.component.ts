import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { WorkoutsService } from '../../../services/workouts.service';
import { SelectComponent } from '../../../shared/components/select/select.component';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExerciseComponent implements OnInit {
  addExerciseForm: FormGroup;

  constructor(
    private workoutService: WorkoutsService,
    private formBuilder: FormBuilder
  ) {
    this.addExerciseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.email]],
      sets: [],
      reps: [],
      weight: [],
    });
  }

  options: Observable<any> = of(null);

  ngOnInit(): void {
    this.options = this.workoutService.getWorkoutTypes();
  }

  onSubmit = () => null;
}
