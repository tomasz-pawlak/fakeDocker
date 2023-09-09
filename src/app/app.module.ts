import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { DockerDesktopComponent } from './front-page/docker-desktop/docker-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FooterComponent,
    DockerDesktopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
