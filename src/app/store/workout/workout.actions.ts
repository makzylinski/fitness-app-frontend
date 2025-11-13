import { createAction, props } from '@ngrx/store';
import { ExerciseSet } from '../../models/exercise.model';
import { Workout } from '../../models/workout.model';

const workout = '[WORKOUT]';

export const setExercise = createAction(
  `${workout} Set Exercise`,
  props<{ exercise: ExerciseSet[] }>()
);

export const setWorkout = createAction(
  `${workout} Set Workout`,
  props<{ workout: Workout[] }>()
);

export const reset = createAction(`${workout} Reset`);
