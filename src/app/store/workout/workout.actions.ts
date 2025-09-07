import { createAction, props } from '@ngrx/store';
import { ExerciseSet } from '../../models/exercise.model';

const workout = '[WORKOUT]';

export const setExercise = createAction(
  `${workout} Set Exercise`,
  props<{ exercise: ExerciseSet[] }>()
);
export const reset = createAction(`${workout} Reset`);
