import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../types/login.dto';

import { ErrorAlertService } from '@widgets/error-alert/error-alert.service';
import {
  validateEmail,
  validatePassword,
} from '@shared/utils/validators/credentials-validtor';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(
    private authSerivce: AuthService,
    private errAlertService: ErrorAlertService
  ) {}

  inputEmail = '';
  inputPassword = '';

  onLoginClick() {
    const values = [this.inputEmail, this.inputPassword];

    if (values.some((v) => v === null || v === undefined || v === '')) {
      this.errAlertService.showErrorAlert('Missing fields');
      return;
    }

    if (!validateEmail(this.inputEmail)) {
      this.errAlertService.showErrorAlert('Incorrect email. Try another one!');
      return;
    }

    if (!validatePassword(this.inputPassword)) {
      this.errAlertService.showErrorAlert(
        'Incorrect password. Try another one!'
      );
      return;
    }

    const dto: LoginDto = {
      email: this.inputEmail,
      password: this.inputPassword,
    };

    this.authSerivce.login(dto);
  }
}
