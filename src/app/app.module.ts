import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DonorListComponent } from './component/donor-list/donor-list.component';
import {AppService} from "./services/app.service";
import { AddDonorComponent } from './component/add-donor/add-donor.component';

@NgModule({
  declarations: [
    AppComponent,
    DonorListComponent,
    AddDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
