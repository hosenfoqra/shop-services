
import { NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './services/auth.guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          { path: 'product/details/:id', component: ProductDetailsComponent }
        ]
      },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
>>>>>>> a0b93259256b155bc10a5c5987088b35998dd0f2
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
