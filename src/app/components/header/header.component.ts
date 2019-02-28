import { Component } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'bs-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    }

    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  doSmth(reachedTarget: boolean): void {
    if (reachedTarget) {
      console.log('Yeah, we reached our destination');
    } else {
      console.log('Ohoh, something interrupted us');
    }
  }
}
