import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './shop/products-page/products-page.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsPageComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product/details/:id', component: ProductDetailsComponent }
    ]
  },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
