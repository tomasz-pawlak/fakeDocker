import { Component } from '@angular/core';

@Component({
  selector: 'app-docker-desktop',
  templateUrl: './docker-desktop.component.html',
  styleUrls: ['./docker-desktop.component.css']
})
export class DockerDesktopComponent {
  isDesktopTabActive: boolean = true;
  isEngineTabActive: boolean = false;
  isBuildTabActive: boolean = false;
  isComposeTabActive: boolean = false;
  isHubTabActive: boolean = false;
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
