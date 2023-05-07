import { Observable, tap } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if (
              event.status === 403 ||
              event.status === 500 ||
              event.status === 401
            ) {
              this.authService.logout();
            }
          }
          return event;
        },
        error: (error) => {
          if (
            error.status === 403 ||
            error.status === 500 ||
            error.status === 401
          ) {
            this.authService.logout();
          }
        },
      })
    );
  }
}
