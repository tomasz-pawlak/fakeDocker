import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { DockerDesktopComponent } from './front-page/docker-desktop/docker-desktop.component';
import { BusinessCustomerComponent } from './front-page/business-customer/business-customer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BestPracticesComponent } from './front-page/best-practices/best-practices.component';
import { ExploreDockerComponent } from './front-page/explore-docker/explore-docker.component';
import { PlayWithDockerComponent } from './front-page/play-with-docker/play-with-docker.component';
import { GetStartedComponent } from './front-page/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FooterComponent,
    DockerDesktopComponent,
    BusinessCustomerComponent,
    NavBarComponent,
    BestPracticesComponent,
    ExploreDockerComponent,
    PlayWithDockerComponent,
    GetStartedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
