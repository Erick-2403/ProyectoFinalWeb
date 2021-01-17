import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
//firebase
import {AngularFireDatabaseModule} from '@angular/fire/database';



@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAPgULEfWn5zTzVY6gBhFgxtI3GyLcWrgo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
