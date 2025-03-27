import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductsComponent,
    CartComponent,
    ProductsPageComponent,
    ProductDetailsComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    AddProductModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
