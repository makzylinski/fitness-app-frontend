
export interface Workout {
  id?: number;
  workoutName: string;
  date: string;
  note: string;
  exercises: ExerciseSet[];
}

interface ExerciseSet {
    id?: number;
    typeName: string;
    description: string;
    icon: string | null;
    typeOfWorkout: string;
    reps: string;
    weight: string;
}
