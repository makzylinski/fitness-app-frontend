import { createAction, props } from '@ngrx/store';

const workout = '[WORKOUT]';

export const setExercise = createAction(
  `${workout} Set Exercise`,
  props<{ exercise: any }>()
);
export const reset = createAction(`${workout} Reset`);
