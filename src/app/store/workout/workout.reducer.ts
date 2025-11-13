import { createReducer, on } from '@ngrx/store';
import { reset, setExercise, setWorkout } from './workout.actions';
import { initialWorkoutState } from './workout.model';

export const workoutReducer = createReducer(
  initialWorkoutState,
  on(setExercise, (state, { exercise }) => ({
    ...state,
    exercise: [...state.exercise, ...exercise],
  })),
  on(setWorkout, (state, { workout }) => ({
    ...state,
    workout: [...workout],
  })),
  on(reset, () => initialWorkoutState)
);
