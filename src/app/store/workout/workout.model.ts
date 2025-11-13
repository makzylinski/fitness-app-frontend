import { ExerciseSet } from '../../models/exercise.model';
import { Workout } from '../../models/workout.model';

export interface WorkoutState {
  workout: Workout[];
  exercise: ExerciseSet[];
}

export const initialWorkoutState: WorkoutState = {
  workout: [],
  exercise: [],
};
