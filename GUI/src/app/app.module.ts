import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatModule} from './material.theme'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessComponent } from './success/success.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
<<<<<<< HEAD
import { SearchComponent } from './search/search.component';
import { StatusComponent } from './status/status.component';

=======
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
>>>>>>> d6a1220ae436c8460bf0e538c5d6da9d6fd1285f

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SuccessComponent,
    SearchComponent,
    StatusComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
