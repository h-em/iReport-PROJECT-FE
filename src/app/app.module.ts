import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsListComponent } from './reports/reports-list/reports-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ReportsListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule, MatFormFieldModule, MatRadioModule, MatButtonModule,

    AgmCoreModule.forRoot({apiKey: "AIzaSyDNLDCUUasxv_qdi57ysJIWYNAuPq-d61w"}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    ReactiveFormsModule, FormsModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
