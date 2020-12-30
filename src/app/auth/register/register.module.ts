import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GoogleMapsModule} from '@angular/google-maps';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class RegisterModule { }
