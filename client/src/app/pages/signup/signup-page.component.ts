import { Component, OnInit } from '@angular/core';

import { PAGES } from '@pages/pages.routes';
import { BrowserTitleService } from '@shared/services/browser-title.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
})
export class SignupPageComponent implements OnInit {
  constructor(private browserTitle: BrowserTitleService) {}

  loginPath = PAGES.Login.path;

  ngOnInit(): void {
    this.browserTitle.setTitle('Signup');
  }
}
