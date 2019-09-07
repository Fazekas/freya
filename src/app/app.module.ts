import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, NgForm} from '@angular/forms';
import {DataRestService} from './data-rest-service';
import {HttpInterceptorService} from './http-interceptor.service';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import {UrlService} from './url.service';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
      DataRestService,
      HttpInterceptorService,
      UrlService,
      CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
