import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuardService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    console.log('Guardia is checking...');
    return this.afAuth.authState.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        console.log('loggedIn', loggedIn);
        if (!loggedIn) {
          console.log('access denied');
          this.redirectToLoginPage();
        }
      }),
    );
    /*this.redirectToLoginPage();
    return false;*/
  }

  redirectToLoginPage() {
    this.router.navigate(['/auth/login']);
  }
}
