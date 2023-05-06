import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../types/login.dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(private authSerivce: AuthService) {}

  inputEmail = '';
  inputPassword = '';

  onSignupClick() {
    const values = [this.inputEmail, this.inputPassword];
    console.log(values);

    if (values.some((v) => v === null || v === undefined || v === '')) {
      console.log('Missing Values');
      return;
    }

    const dto: LoginDto = {
      email: this.inputEmail,
      password: this.inputPassword,
    };

    this.authSerivce.login(dto);
  }
}
