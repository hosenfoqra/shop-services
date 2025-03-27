
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsPageComponent } from './shop/products-page/products-page.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { AboutComponent } from './shop/about/about.component';
import { ContactComponent } from './shop/contact/contact.component';
import { AuthGuardService } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent, children: [
    { path: 'products', component: ProductsPageComponent },
    { path: 'cart', component: CartComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product/details/:id', component: ProductDetailsComponent }
  ]},
  { path: '**', redirectTo: 'shop/products', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
