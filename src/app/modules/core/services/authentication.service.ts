import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router, // Inject Router
  ) {}

  SignOut() {
    this.afAuth.auth.signOut();
  }

  SignIn(email, password) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log('Authenticated GO to ADMIN Path');
        this.router.navigate(['/admin']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
}
