import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExerciseSet } from '../../../models/exercise.model';
import { WorkoutsService } from '../../../services/workouts.service';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SelectComponent } from '../../../shared/components/select/select.component';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [SelectComponent, InputComponent, NgTemplateOutlet],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExerciseComponent implements OnInit {
  constructor(private workoutService: WorkoutsService) {}

  options: Observable<any> = of(null);
  sets: number[] = [];
  exercise: ExerciseSet[] = [];
  currentReps: number | string = 0;
  currentWeight: number | string = 0;
  currentExercise: any;

  ngOnInit(): void {
    this.options = this.workoutService.getWorkoutTypes();
  }

  get isAddButtonDisabled(): boolean {
    return !this.currentReps || !this.currentWeight || !this.currentExercise;
  }

  setReps = (inputData: any) => {
    this.currentReps = inputData;
  };

  setWeight = (inputData: string | number) => (this.currentWeight = inputData);

  addSet = (): void => {
    if (!this.currentReps || !this.currentWeight || !this.currentExercise) {
      console.error('Inputs not filled.');
      return;
    }

    this.exercise.push({
      exercise: this.currentExercise,
      reps: this.currentReps,
      weight: this.currentWeight,
    });

    console.log(this.exercise);

    this.currentReps = 0;
    this.currentWeight = 0;
  };

  onSelectedName = (exercise: any) => {
    // TODO add types
    console.log(exercise);
    this.currentExercise = exercise;
  };

  saveExercise = (): void => {
    if (this.exercise.length) {
      this.workoutService.setExercise(this.exercise);
      this.exercise = [];
    }
  };
}
