import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  //{ path: 'home'    , component: HomeComponent, canActivate:[ LoginGuard ] },
  { path: 'login'   , component: LoginComponent },
  //{ path: '**', redirectTo: 'login' },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:handle', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
