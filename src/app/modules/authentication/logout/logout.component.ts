import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/core/services/authentication.service';


@Component({
  template: ``,
  styles: [],
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {}
  ngOnInit() {
    console.log('esco');
    this.router.navigate(['/home']);
    this.authenticationService.signOut();
  }
}
