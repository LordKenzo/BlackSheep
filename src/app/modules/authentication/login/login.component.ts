import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authenticationService: AuthenticationService) {}
}
