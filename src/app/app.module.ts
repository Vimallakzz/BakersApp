import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule, AppCustomPreloader } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { AppLayoutComponent } from './layouts/components/app-layout/app-layout.component';
import { SharedModule } from './shared/shared.module';
import { ApplicationProperties } from './constants/app.properties';
import { LoginComponent } from './login/components/login/login.component';


@NgModule({
  declarations: [AppComponent, AppLayoutComponent, NavbarComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    AppRoutingModule
  ],
  providers: [ApplicationProperties, AppCustomPreloader],
  bootstrap: [AppComponent]
})
export class AppModule {}
