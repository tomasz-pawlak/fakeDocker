import { Component } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  isExploreDocker: boolean = true;
  isBrowseFaq: boolean = false;
  isGetSupport: boolean = false;

  showExplore() {
    this.isExploreDocker = true;
    this.isBrowseFaq = false;
    this.isGetSupport = false;
  }

  showBrowse() {
    this.isExploreDocker = false;
    this.isBrowseFaq = true;
    this.isGetSupport = false;
  }

  showGetSupport() {
    this.isExploreDocker = false;
    this.isBrowseFaq = false;
    this.isGetSupport = true;
  }
}
