import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GoogleMapsModule} from '@angular/google-maps';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    RegisterComponent
  ],
  exports:[RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAPgULEfWn5zTzVY6gBhFgxtI3GyLcWrgo'
    })
  ]
})
export class RegisterModule { }
