import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkoutState } from './workout.model';

export const selectWorkoutState =
  createFeatureSelector<WorkoutState>('workout');

export const selectExercises = createSelector(
  selectWorkoutState,
  (state: WorkoutState) => state?.exercise ?? []
);
