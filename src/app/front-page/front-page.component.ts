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

  isDesktopTabActive: boolean = true;
  isEngineTabActive: boolean = false;
  isBuildTabActive: boolean = false;
  isComposeTabActive: boolean = false;
  isHubTabActive: boolean = false;

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

  showDesktopTab() {
    this.isDesktopTabActive = true;
    this.isEngineTabActive = false;
    this.isBuildTabActive = false;
    this.isComposeTabActive = false;
    this.isHubTabActive = false;
  }

  showEngineTab() {
    this.isDesktopTabActive = false;
    this.isEngineTabActive = true;
    this.isBuildTabActive = false;
    this.isComposeTabActive = false;
    this.isHubTabActive = false;
  }

  showBuildTab() {
    this.isDesktopTabActive = false;
    this.isEngineTabActive = false;
    this.isBuildTabActive = true;
    this.isComposeTabActive = false;
    this.isHubTabActive = false;
  }

  showComposeTab() {
    this.isDesktopTabActive = false;
    this.isEngineTabActive = false;
    this.isBuildTabActive = false;
    this.isComposeTabActive = true;
    this.isHubTabActive = false;
  }

  showHubTab() {
    this.isDesktopTabActive = false;
    this.isEngineTabActive = false;
    this.isBuildTabActive = false;
    this.isComposeTabActive = false;
    this.isHubTabActive = true;
  }
}
