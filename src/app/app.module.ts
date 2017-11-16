import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Select2Module } from 'ng2-select2';

//  Roter Module
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';



// All components
import { COMPONENTS } from './component';

// All Services
import { SERVICES } from './services';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    COMPONENTS
  ],
  imports: [
    NgbModule.forRoot(),
    Select2Module,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
