import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { SignupDto } from '../../types/signup.dto';

import { ErrorAlertService } from '@widgets/error-alert/error-alert.service';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '@shared/utils/validators/credentials-validtor';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  constructor(
    private authSerivce: AuthService,
    private errAlertService: ErrorAlertService
  ) {}

  inputName = '';
  inputEmail = '';
  inputPassword = '';

  onSignupClick() {
    const values = [this.inputEmail, this.inputName, this.inputPassword];

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

    if (!validateUsername(this.inputName)) {
      this.errAlertService.showErrorAlert('Incorrect name input');
      return;
    }

    const dto: SignupDto = {
      name: this.inputName,
      email: this.inputEmail,
      password: this.inputPassword,
    };

    this.authSerivce.signup(dto);
  }
}
