import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-docker',
  templateUrl: './explore-docker.component.html',
  styleUrls: ['./explore-docker.component.css']
})
export class ExploreDockerComponent {

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
