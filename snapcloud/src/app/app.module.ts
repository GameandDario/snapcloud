import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CloudSnapComponent } from './cloud-snap/cloud-snap.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { CloudSnapListComponent } from './cloud-snap-list/cloud-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleCloudSnapComponent } from './single-cloud-snap/single-cloud-snap.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CloudSnapComponent,
    CloudSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleCloudSnapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
