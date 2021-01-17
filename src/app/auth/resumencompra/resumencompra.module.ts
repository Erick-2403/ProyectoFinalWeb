import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumencompraRoutingModule } from './resumencompra-routing.module';
import { ResumencompraComponent } from './resumencompra.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ResumencompraComponent],
  imports: [
    CommonModule,
    ResumencompraRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAPgULEfWn5zTzVY6gBhFgxtI3GyLcWrgo'
    })
  ]
})
export class ResumencompraModule { }
