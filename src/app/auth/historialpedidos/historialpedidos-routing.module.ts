import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialpedidosComponent } from './historialpedidos.component';

const routes: Routes = [{ path: '', component: HistorialpedidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialpedidosRoutingModule { }
