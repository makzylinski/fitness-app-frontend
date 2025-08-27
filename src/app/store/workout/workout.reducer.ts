import { createReducer, on } from '@ngrx/store';
import { setExercise } from './workout.actions';

export const initialState: any = {
  exercise: '',
};

export const workoutReducer = createReducer(
  initialState,
  on(setExercise, (state, { exercise }) => ({ ...state, exercise }))
);
