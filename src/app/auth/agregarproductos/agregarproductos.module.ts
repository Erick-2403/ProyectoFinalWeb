import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarproductosRoutingModule } from './agregarproductos-routing.module';
import { AgregarproductosComponent } from './agregarproductos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AgregarproductosComponent],
  imports: [
    CommonModule,
    AgregarproductosRoutingModule,
    FormsModule
  ]
})
export class AgregarproductosModule { }
