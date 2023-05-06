import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';

import { AuthService } from '@modules/auth/services/auth.service';
import { PAGES } from '@pages/pages.routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  navbarLinks = [PAGES.Home, PAGES.Todos];
  currentPath: string = '';

  isAuth: boolean = false;

  ngOnInit() {
    this.authService.auth$.subscribe((auth) => {
      this.isAuth = Boolean(auth);
    });

    this.router.events.pipe(first()).subscribe(() => {
      this.currentPath = this.location.path() || '/';
    });
  }

  onLogoutClick() {
    this.authService.logout();
  }
}
