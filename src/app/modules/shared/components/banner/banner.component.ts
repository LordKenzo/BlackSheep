import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

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
  constructor(
    private breakpointObserver: BreakpointObserver,
    private bannerService: BannerService) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        console.log('XSmall');
      }
      if (result.breakpoints[Breakpoints.Small]) {
        console.log('Small');
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        console.log('Medium');
      }
      if (result.breakpoints[Breakpoints.Large]) {
        console.log('Large');
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        console.log('XLarge');
      }
    });
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
