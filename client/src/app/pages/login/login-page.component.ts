import { Component, OnInit } from '@angular/core';

import { PAGES } from '@pages/pages.routes';
import { BrowserTitleService } from '@shared/services/browser-title.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  constructor(private browserTitle: BrowserTitleService) {}

  signupPath = PAGES.Signup.path;

  ngOnInit(): void {
    this.browserTitle.setTitle('Login');
  }
}
