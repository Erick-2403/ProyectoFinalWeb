import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
}, 
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) 
}, 
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'pedidos', loadChildren: () => import('./auth/pedidos/pedidos.module').then(m => m.PedidosModule) },
  { path: 'historialpedidos', loadChildren: () => import('./auth/historialpedidos/historialpedidos.module').then(m => m.HistorialpedidosModule) },
  { path: 'resumencompra', loadChildren: () => import('./auth/resumencompra/resumencompra.module').then(m => m.ResumencompraModule) },
  { path: 'agregarproductos', loadChildren: () => import('./auth/agregarproductos/agregarproductos.module').then(m => m.AgregarproductosModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
