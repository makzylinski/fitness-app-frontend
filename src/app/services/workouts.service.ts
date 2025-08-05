import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environments/env';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private readonly baseUrl = env.baseUrl;
  private readonly authUrl = `${this.baseUrl}/api/workouts`;

  constructor(private http: HttpClient) {}

  saveExercise(exercise: any): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, exercise);
  }
}
