import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialpedidosRoutingModule } from './historialpedidos-routing.module';
import { HistorialpedidosComponent } from './historialpedidos.component';



@NgModule({
  declarations: [HistorialpedidosComponent],
  imports: [
    CommonModule,
    HistorialpedidosRoutingModule
  ]
})
export class HistorialpedidosModule { }
