import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '@modules/auth/services/auth.service';
import { PAGES } from '@pages/pages.routes';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(state: RouterStateSnapshot) {
    const user = this.authService.auth$.getValue();

    if (user) {
      return true;
    }

    this.router.navigate([PAGES.Signup.path], {
      queryParams: { returnUrl: state.url },
    });

    return false;
  }
}
