import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [SharedModule, AuthenticationRoutingModule],
  exports: [LogoutComponent]
})
export class AuthenticationModule {
  constructor() {
    console.log('Yeah');
  }
}
