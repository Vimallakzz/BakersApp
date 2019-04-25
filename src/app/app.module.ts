import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { AppLayoutComponent } from './layouts/components/app-layout/app-layout.component';
import { SharedModule } from './shared/shared.module';
import { ApplicationProperties } from './constants/app.properties';


@NgModule({
  declarations: [AppComponent, AppLayoutComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    AppRoutingModule
  ],
  providers: [ApplicationProperties],
  bootstrap: [AppComponent]
})
export class AppModule {}
