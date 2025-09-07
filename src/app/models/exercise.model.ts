import { TypeOfWorkout } from '../shared/model/type-of-workout';

export interface WorkoutType {
  id: number;
  typeName: string;
  isFavourite: boolean;
  description: string;
  icon: string;
  typeOfWorkout: TypeOfWorkout;
}

export interface ExerciseSet {
  exercise: WorkoutType;
  reps: number | string;
  weight: number | string;
}
