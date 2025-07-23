import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  logout(): void {}
}
