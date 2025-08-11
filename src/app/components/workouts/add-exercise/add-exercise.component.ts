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
  exercise: { reps: number | string; weight: number | string }[] = [];
  currentReps: number | string = 0;
  currentWeight: number | string = 0;

  ngOnInit(): void {
    this.options = this.workoutService.getWorkoutTypes();
  }

  setReps = (inputData: string | number) => (this.currentReps = inputData);

  setWeight = (inputData: string | number) => (this.currentWeight = inputData);

  addSet = () => {
    if (this.currentReps && this.currentWeight) {
      this.exercise.push({
        reps: this.currentReps,
        weight: this.currentWeight,
      });
    }

    console.log(this.exercise);
  };
}
