import { CoreModule } from './../core.module';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.interface';

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: CoreModule,
})
export class AuthenticationService {
  // user: Observable<firebase.User>;
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  user: User;

  private userProfileRef: AngularFirestoreCollection<any>;

  constructor(
    private firebaseAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router, // Inject Router
    private db: AngularFirestore
  ) {
    // this.user = firebaseAuth.authState;

    this.firebaseAuth.authState.pipe(
      map((profile: firebase.User) => {
        // console.log(profile.providerData);
        if (profile) {
          console.log('Check', profile);
          console.log(profile.providerData[0].providerId);
          this.user = {
            uid: profile.uid,
            email: profile.email,
            photoURL: profile.photoURL || 'https://goo.gl/YajTkH',
            displayName: profile.displayName,
          };
          const docRef = this.db.collection('UserProfile').doc(profile.uid).get();
          docRef.subscribe(data => console.log(data.data()));
          console.log(docRef);
          console.log(this.user);
        }
        return profile;
      }),
      map(user => !!user)
    ).subscribe(
      res => {
        this.isAuthenticatedSubject.next(res);
      }
    );

  }

  signOut() {
    this.firebaseAuth.auth.signOut()
    .then( () => {
      console.log('Log out done!');
    })
    .catch( err => console.log(`Can't log out ${err}`));
  }

  signIn(email: string, password: string) {
    return this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then( () => {
        console.log('Authenticated GO to ADMIN Path');
        this.router.navigate(['/admin']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  signUp(email: string, password: string, otherFields: any) {
    this.firebaseAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      const users = this.db.collection<any>(`UserProfile`);
      users.doc(newUser.user.uid).set({
        id: newUser.user.uid,
        otherFields
      });

      console.log(`User created successfully ${newUser}`);
    })
    .catch( err => {
      console.log(`Something went wrong ${err}`);
    });
  }
}
