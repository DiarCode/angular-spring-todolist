import { Component, OnInit } from '@angular/core';

import { AuthService } from '@modules/auth/services/auth.service';
import { AuthResponse } from '@modules/auth/types/auth-response.type';
import { BrowserTitleService } from '@shared/services/browser-title.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private browserTitle: BrowserTitleService
  ) {}

  auth: AuthResponse | null = null;

  ngOnInit() {
    this.browserTitle.setTitle('Home');

    this.authService.auth$.subscribe((auth) => {
      this.auth = auth;
    });
  }
}
