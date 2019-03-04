import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;
  constructor(public authenticationService: AuthenticationService) {}

  signup() {
    const otherFields = {
      birthday: '20-07-1978',
      color: 'red',
      role: 'admin'
    };
    this.authenticationService.signUp(this.email, this.password, otherFields);
    this.email = this.password = '';
  }

  login() {
    this.authenticationService.signIn(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authenticationService.signOut();
  }
}
