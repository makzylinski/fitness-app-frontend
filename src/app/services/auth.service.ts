import { computed, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'fitness_app_token';
  private readonly USER_KEY = 'fitness_app_user';

  private _isAuthenticated = signal<boolean>(this.hasValidToken());
  private _currentUser = signal<User | null>(this.getUserFromStorage());

  public isAuthenticated = computed(() => this._isAuthenticated());
  public currentUser = computed(() => this._currentUser());

  constructor(private router: Router) {}

  isAuthenticatedValue(): boolean {
    return this._isAuthenticated();
  }

  login(email: string, password: string): Promise<boolean> {
    // TODO: Implement actual login logic with API
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '1',
          email: email,
          name: email.split('@')[0],
          avatar: 'assets/images/default-avatar.png',
        };

        const mockToken = 'mock-jwt-token-' + Date.now();

        this.setTokenAndUser(mockToken, mockUser);
        resolve(true);
      }, 1000); // Simulate API delay
    });
  }

  register(email: string, password: string, name: string): Promise<boolean> {
    // TODO: Implement actual registration logic with API
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '1',
          email: email,
          name: name,
          avatar: 'assets/images/default-avatar.png',
        };

        const mockToken = 'mock-jwt-token-' + Date.now();

        this.setTokenAndUser(mockToken, mockUser);
        resolve(true);
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._isAuthenticated.set(false);
    this._currentUser.set(null);
    this.router.navigate(['/login']);
  }

  refreshToken(): Promise<boolean> {
    // TODO: Implement token refresh logic
    return Promise.resolve(this.hasValidToken());
  }

  private setTokenAndUser(token: string, user: User): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this._isAuthenticated.set(true);
    this._currentUser.set(user);
  }

  private hasValidToken(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    // TODO: Add actual token validation logic
    return !!token;
  }

  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch {
        return null;
      }
    }
    return null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
