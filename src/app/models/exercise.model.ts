export interface WorkoutType {
  id: number;
  typeName: string;
  isFavourite: boolean;
  description: string;
  icon: string;
  typeOfWorkout: 'STRENGTH' | 'CARDIO' | 'FLEXIBILITY' | 'BALANCE';
}

export interface ExerciseSet {
  exercise: WorkoutType;
  reps: number | string;
  weight: number | string;
}
