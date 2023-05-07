import { AuthService } from '@modules/auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthRequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Not intercept Auth requests
    if (req.url.includes('/auth')) return next.handle(req);

    const auth = this.authService.auth$.getValue();

    if (!auth) return next.handle(req);

    const token = auth.token;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(authReq);
  }
}
