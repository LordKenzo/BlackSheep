import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationGuardService } from './modules/core/services/authentication-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: './modules/authentication/authentication.module#AuthenticationModule',
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canActivate: [AuthenticationGuardService],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
/*const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};*/

@NgModule({
  imports: [RouterModule.forRoot(routes /*, routerOptions*/)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
