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
  exercise: {
    exercise: any;
    reps: number | string;
    weight: number | string;
  }[] = [{ exercise: '', reps: 0, weight: 0 }];
  currentReps: number | string = 0;
  currentWeight: number | string = 0;
  currentExercise: any;

  ngOnInit(): void {
    this.options = this.workoutService.getWorkoutTypes();
  }

  setReps = (inputData: any) => {
    this.currentReps = inputData;
  };

  setWeight = (inputData: string | number) => (this.currentWeight = inputData);

  addSet = (): void => {
    if (this.currentReps && this.currentWeight) {
      this.exercise.push({
        exercise: this.currentExercise,
        reps: this.currentReps,
        weight: this.currentWeight,
      });
    }

    console.log(this.exercise);
  };

  onSelectedName = (exercise: any) => {
    // TODO add types
    console.log(exercise);
    this.currentExercise = exercise;
  };

  saveExercise = (): void => {
    console.log('save');
    if (this.currentReps && this.currentWeight && this.currentExercise) {
      console.log('Add Exercise');
      console.log(this.exercise);
    }
  };
}
