import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';

@Component({
  template: ``,
  styles: [],
})
export class LogoutComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}
  ngOnInit() {
    console.log('esco');
    this.authenticationService.SignOut();
  }
}
