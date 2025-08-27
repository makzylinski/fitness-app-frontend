import { ActionReducerMap } from '@ngrx/store';
import { WorkoutState } from './workout/workout.model';
import { workoutReducer } from './workout/workout.reducer';

export interface AppState {
  workout: WorkoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  workout: workoutReducer,
};
