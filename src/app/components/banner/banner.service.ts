import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BannerService {

  constructor(private firestore: AngularFirestore) {}

  getBanner() {
    return this.firestore.collection('Banner').snapshotChanges();
  }
}
