import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }
];
/*const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};*/

@NgModule({
  imports: [RouterModule.forRoot(routes/*, routerOptions*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
