import { createFeatureSelector } from '@ngrx/store';
import { WorkoutState } from './workout.model';

export const selectWorkoutState =
  createFeatureSelector<WorkoutState>('exercise');
