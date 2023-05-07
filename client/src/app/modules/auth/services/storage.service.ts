import { Injectable } from '@angular/core';

import { AuthResponse } from '../types/auth-response.type';

const AUTH_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  clear(): void {
    window.sessionStorage.clear();
  }

  saveAuth(user: AuthResponse): void {
    window.sessionStorage.removeItem(AUTH_KEY);
    window.sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
  }

  getAuth(): AuthResponse | null {
    const user = window.sessionStorage.getItem(AUTH_KEY);
    if (!user) return null;

    return JSON.parse(user);
  }

  public isAuth(): boolean {
    const user = window.sessionStorage.getItem(AUTH_KEY);
    return Boolean(user);
  }
}
