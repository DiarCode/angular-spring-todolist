import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignupDto } from '../../types/signup.dto';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  constructor(private authSerivce: AuthService) {}

  inputName = '';
  inputEmail = '';
  inputPassword = '';

  onSignupClick() {
    const values = [this.inputEmail, this.inputName, this.inputPassword];
    console.log(values);

    if (values.some((v) => v === null || v === undefined || v === '')) {
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
