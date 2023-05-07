import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LoginDto } from '../types/login.dto';
import { SignupDto } from '../types/signup.dto';
import { StorageService } from './storage.service';
import { AuthResponse } from '../types/auth-response.type';

import { API_URL } from '@app/shared/constants/api.url';
import { ErrorAlertService } from '@widgets/error-alert/error-alert.service';

const AUTH_API = `${API_URL}/auth`;
const reqOptions = { observe: 'response' };

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private httpClient: HttpClient,
    private errAlertService: ErrorAlertService
  ) {}

  auth$ = new BehaviorSubject<AuthResponse | null>(null);

  login(dto: LoginDto) {
    this.httpClient
      .post<AuthResponse>(AUTH_API + '/login', dto, { observe: 'response' })
      .subscribe({
        next: (data) => {
          if (data.status !== 200 || !data.body) {
            return;
          }

          this.auth$.next(data.body);
          this.storageService.saveAuth(data.body);
          this.reloadPage();
        },
        error: (err) => {
          console.log(err);
          this.errAlertService.showErrorAlert(
            `Something went wrong: ${err?.error?.message}`
          );
        },
      });
  }

  signup(dto: SignupDto) {
    this.httpClient
      .post<AuthResponse>(AUTH_API + '/signup', dto, { observe: 'response' })
      .subscribe({
        next: (data) => {
          if (data.status !== 200 || !data.body) {
            return;
          }

          this.auth$.next(data.body);
          this.storageService.saveAuth(data.body);
          this.reloadPage();
        },
        error: (err) => {
          console.log(err);
          this.errAlertService.showErrorAlert(
            `Something went wrong: ${err?.error?.message}`
          );
        },
      });
  }

  logout() {
    this.storageService.clear();
    this.auth$.next(null);

    this.reloadPage();
  }

  checkAuthOnInit() {
    const auth = this.storageService.getAuth();
    this.auth$.next(auth);
  }

  private reloadPage() {
    this.router.navigate(['/']);
  }
}
