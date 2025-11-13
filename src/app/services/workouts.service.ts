import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { env } from '../environments/env';
import { ExerciseSet } from '../models/exercise.model';
import { setExercise, setWorkout } from '../store/workout/workout.actions';
import {
  selectExercises,
  selectIfExercisesExist,
} from '../store/workout/workout.selectors';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private readonly baseUrl = env.baseUrl;
  private readonly workoutsUrl = `${this.baseUrl}/api/workouts`;
  private readonly workoutTypes = `${this.baseUrl}/api/workout-types`;

  constructor(private http: HttpClient, private readonly store: Store) {}

  saveWorkout(exerciseDetails: any): Observable<any> {
    return this.selectExercises().pipe(
      switchMap((exercises: ExerciseSet[]) => {
        const updatedExerciseDetails = {
          ...exerciseDetails,
          date: new Date(exerciseDetails.date),
        };
        console.log(updatedExerciseDetails);
        const workoutData = {
          exerciseDetails: updatedExerciseDetails,
          exercises,
        };
        return this.http.post(`${this.workoutsUrl}/add`, workoutData);
      }),
      catchError((error) => {
        console.error('Error saving exercise:', error);
        return throwError(() => error);
      })
    );
  }

  getWorkouts = () => this.http.get(`${this.workoutsUrl}`);

  getWorkoutTypes = (): Observable<any> => // TODO add yeld type later
    this.http.get(`${this.workoutTypes}`);

  setWorkout = (workout: Workout[]) => this.store.dispatch(setWorkout({ workout }));

  setExercise = (exercise: any) =>
    this.store.dispatch(setExercise({ exercise }));

  selectExercises = (): Observable<ExerciseSet[]> =>
    this.store.select(selectExercises);

  selectExercisesLength = (): Observable<number> =>
    this.store.select(selectIfExercisesExist);
}
