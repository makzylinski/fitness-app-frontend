import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkoutsService } from '../../../services/workouts.service';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SelectComponent } from '../../../shared/components/select/select.component';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [SelectComponent, InputComponent],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExerciseComponent implements OnInit {
  constructor(private workoutService: WorkoutsService) {}

  options: Observable<any> = of(null);
  sets: number[] = [];
  exercise: { name: string; reps: number | string; weight: number | string }[] =
    [{ name: '', reps: 0, weight: 0 }];
  currentReps: number | string = 0;
  currentWeight: number | string = 0;

  ngOnInit(): void {
    this.options = this.workoutService.getWorkoutTypes();
  }

  setReps = (inputData: string | number) => (this.currentReps = inputData);

  setWeight = (inputData: string | number) => (this.currentWeight = inputData);

  addSet = (): void => {
    if (this.currentReps && this.currentWeight) {
      this.exercise.push({
        name: '',
        reps: this.currentReps,
        weight: this.currentWeight,
      });
    }

    console.log(this.exercise);
  };

  saveExercise = (): void => console.log('save');
}
