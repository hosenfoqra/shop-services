import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  title: string;
  price: number;
  type: string;
  selected?: boolean;
}
=======
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, BehaviorSubject } from 'rxjs';
>>>>>>> a0b93259256b155bc10a5c5987088b35998dd0f2

@Injectable({
  providedIn: 'root'
})
export class ShopService {
<<<<<<< HEAD
  productsListSubject = new BehaviorSubject<Product[]>([]);
  cartItemsSubject = new BehaviorSubject<Product[]>([]);
  totalPayment = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.getProducts();
    this.getCartItems();
  }

  getProducts() {
    this.http.get<{ data: Product[] }>('http://localhost:3000/api/products').subscribe(response => {
      this.productsListSubject.next(response.data);
    });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<{ data: Product }>(`http://localhost:3000/api/products/${id}`).pipe(
      map((response: { data: any; }) => response.data)
    );
  }
  

  addProduct(product: Product) {
    this.http.post('http://localhost:3000/api/products', product).subscribe(() => {
      this.getProducts();
    });
  }

  deleteProduct(id: number) {
    this.http.delete(`http://localhost:3000/api/products/${id}`).subscribe(() => {
      this.getProducts();
    });
  }

  filterProducts(type: string) {
    this.http.get<{ data: Product[] }>(`http://localhost:3000/api/products?filter=${type}`).subscribe(response => {
      this.productsListSubject.next(response.data);
    });
  }

  getCartItems() {
    this.http.get<{ data: Product[] }>('http://localhost:3000/api/products').subscribe(response => {
      const selectedProducts = response.data.filter(p => p.selected);
      this.cartItemsSubject.next(selectedProducts);
      this.calculateTotal();
    });
  }

  calculateTotal() {
    const items = this.cartItemsSubject.getValue();
    const total = items.reduce((acc, item) => acc + item.price, 0);
    this.totalPayment.next(total);
  }

  addRemoveItemToCart(product: Product) {
    const updatedProduct = { ...product, selected: !product.selected };
    this.http.put(`http://localhost:3000/api/products/${product.id}`, updatedProduct).subscribe(() => {
      this.getProducts();
      this.getCartItems();
    });
=======
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
>>>>>>> a0b93259256b155bc10a5c5987088b35998dd0f2
  }
}
