import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarproductosComponent } from './agregarproductos.component';

const routes: Routes = [{ path: '', component: AgregarproductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarproductosRoutingModule { }
