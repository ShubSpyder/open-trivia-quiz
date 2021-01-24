import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {
  NbLayoutModule,
  NbButtonModule,
  NbThemeModule,
  NbCardModule,
} from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    PagesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
