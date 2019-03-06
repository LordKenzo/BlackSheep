import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {

  }
}
