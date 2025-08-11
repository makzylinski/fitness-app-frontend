import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environments/env';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private readonly baseUrl = env.baseUrl;
  private readonly workoutsUrl = `${this.baseUrl}/api/workouts`;
  private readonly workoutTypes = `${this.baseUrl}/api/workout-types`;

  constructor(private http: HttpClient) {}

  saveExercise(exercise: any): Observable<any> {
    return this.http.post(`${this.workoutsUrl}/login`, exercise);
  }

  getWorkoutTypes = (): Observable<any> => // add yeld type later
    this.http.get(`${this.workoutTypes}`);
}
