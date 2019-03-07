import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';

@Component({
  selector: 'bs-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.scss'],
})
export class BannerComponent implements OnInit {
  title = 'The Black Sheep';
  subtitle = 'Forge Body';
  description = 'Premium Fitness in Ladispoli';
  images;
  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.bannerService.getBanner().subscribe((data: any) => {
      this.images = data.map(e => {
        return {
          id: e.payload.doc.id,
          fileName: e.payload.doc.data()['fileName'],
          fileNameHi: e.payload.doc.data()['fileNameHi'],
          resolution: e.payload.doc.data()['resolution'],
          resolutionHi: e.payload.doc.data()['resolutionHi'],
          media: e.payload.doc.data()['media'],
        };
      });
    });
  }
}
