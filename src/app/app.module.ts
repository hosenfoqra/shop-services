import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductsPageComponent } from './shop/products-page/products-page.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './shop/about/about.component';
import { ContactComponent } from './shop/contact/contact.component'; 
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductModalComponent } from './shop/add-product-modal/add-product-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
=======
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddProductComponent } from './components/add-product/add-product.component';
>>>>>>> a0b93259256b155bc10a5c5987088b35998dd0f2

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
<<<<<<< HEAD
    LoginComponent,
    AboutComponent,
    ContactComponent,
    AddProductModalComponent
=======
    CartComponent,
    AboutComponent,
    ContactComponent,
    AddProductComponent
>>>>>>> a0b93259256b155bc10a5c5987088b35998dd0f2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    RouterModule,
    BrowserAnimationsModule,  
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
   
    MatFormFieldModule, 
    MatInputModule, 

    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,    
    AppRoutingModule,
  
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi: true
    }
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> a0b93259256b155bc10a5c5987088b35998dd0f2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
