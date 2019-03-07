import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ResolutionService } from 'src/app/modules/core/services/resolution.service';

@Injectable({
  providedIn: 'root',
})
export class BannerService {

  constructor(
    private resolutionService: ResolutionService,
    private firestore: AngularFirestore) {}

  getBanner() {
    console.log(this.resolutionService.getIsMobileResolution());
    return this.firestore.collection('Banner').snapshotChanges();
  }
}
