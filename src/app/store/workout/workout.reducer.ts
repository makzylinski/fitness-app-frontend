import { createReducer, on } from '@ngrx/store';
import { setExercise } from './workout.actions';
import { initialWorkoutState } from './workout.model';

export const workoutReducer = createReducer(
  initialWorkoutState,
  on(setExercise, (state, { exercise }) => ({ ...state, exercise }))
);
