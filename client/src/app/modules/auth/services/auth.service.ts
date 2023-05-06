import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { User } from '@shared/types/user/user.type';
import { LoginDto } from '../types/login.dto';
import { SignupDto } from '../types/signup.dto';
import { StorageService } from './storage.service';
import { AuthResponse } from '../types/auth-response.type';
import { Router } from '@angular/router';

const AUTH_API = '';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private httpClient: HttpClient
  ) {}

  auth$ = new BehaviorSubject<AuthResponse | null>(null);

  login(dto: LoginDto) {
    this.httpClient
      .post<AuthResponse>(AUTH_API + 'login', dto, httpOptions)
      .subscribe({
        next: (data) => {
          this.auth$.next(data);
          this.storageService.saveAuth(data);
        },
      });

    console.log(this.router.url);
    this.reloadPage();
  }

  signup(dto: SignupDto) {
    // this.httpClient
    //   .post<AuthResponse>(AUTH_API + 'signup', dto, httpOptions)
    //   .subscribe({
    //     next: (data) => {
    //       this.auth$.next(data);
    //       this.storageService.saveAuth(data);
    //     },
    //   });
    const authResp: AuthResponse = {
      id: 1,
      token: 'token',
      name: dto.name,
      email: dto.email,
    };

    this.auth$.next(authResp);
    this.storageService.saveAuth(authResp);

    this.reloadPage();
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
