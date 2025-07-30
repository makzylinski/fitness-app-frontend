import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, Subscription, take } from 'rxjs';
import { env } from '../environments/env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = env.baseUrl;
  private readonly authUrl = `${this.baseUrl}/api/auth`;
  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, password: string): any {
    return this.http.post(`${this.authUrl}/login`, { email, password });
  }

  register(email: string, password: string, name: string): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, {
      email,
      password,
      name,
    });
  }

  logout(): Subscription {
    return this.http.post(`${this.authUrl}/logout`, {}).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  isAuthenticated(): Subscription {
    return this.http
      .get(`${this.authUrl}/me`)
      .pipe(
        map((response: any) => {
          console.log('Authentication check response:', response);
          return response && response.isAuthenticated;
        }),
        take(1)
      )
      .subscribe();
  }
}
