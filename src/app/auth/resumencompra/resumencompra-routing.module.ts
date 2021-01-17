import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumencompraComponent } from './resumencompra.component';

const routes: Routes = [{ path: '', component: ResumencompraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumencompraRoutingModule { }
