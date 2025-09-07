import { createReducer, on } from '@ngrx/store';
import { reset, setExercise } from './workout.actions';
import { initialWorkoutState } from './workout.model';

export const workoutReducer = createReducer(
  initialWorkoutState,
  on(setExercise, (state, { exercise }) => ({
    ...state,
    exercise: [...state.exercise, ...exercise],
  })),
  on(reset, () => initialWorkoutState)
);
