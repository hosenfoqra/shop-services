import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUrl = 'http://localhost:3000/api';
  private cart: Product[] = [];
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.cart);

  constructor(private http: HttpClient) { }

  // API calls
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/product`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/product/${id}`);
  }

  // Cart management
  toggleCart(product: Product): void {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index > -1) {
      // Remove product from cart
      this.cart.splice(index, 1);
    } else {
      // Add product to cart
      this.cart.push(product);
    }
    this.cartSubject.next(this.cart);
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(p => p.id !== product.id);
    this.cartSubject.next(this.cart);
  }

  // Optionally, expose an observable for the cart
  getCartObservable(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }
}
