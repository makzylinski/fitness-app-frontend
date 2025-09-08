import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { env } from '../environments/env';
import { ExerciseSet } from '../models/exercise.model';
import { setExercise } from '../store/workout/workout.actions';
import {
  selectExercises,
  selectIfExercisesExist,
} from '../store/workout/workout.selectors';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private readonly baseUrl = env.baseUrl;
  private readonly workoutsUrl = `${this.baseUrl}/api/workouts`;
  private readonly workoutTypes = `${this.baseUrl}/api/workout-types`;

  constructor(private http: HttpClient, private readonly store: Store) {}

  saveExercise(exercise: any): Observable<any> {
    return this.http.post(`${this.workoutsUrl}/login`, exercise);
  }

  setExercise = (exercise: any) =>
    this.store.dispatch(setExercise({ exercise }));

  getWorkoutTypes = (): Observable<any> => // TODO add yeld type later
    this.http.get(`${this.workoutTypes}`);

  selectExercises = (): Observable<ExerciseSet[]> =>
    this.store.select(selectExercises);

  selectExercisesLength = (): Observable<number> =>
    this.store.select(selectIfExercisesExist);
}
