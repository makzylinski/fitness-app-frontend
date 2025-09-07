import { ExerciseSet } from '../../models/exercise.model';

export interface WorkoutState {
  exercise: ExerciseSet[];
}

export const initialWorkoutState: WorkoutState = {
  exercise: [],
};
