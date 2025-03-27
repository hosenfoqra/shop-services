import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  title: string;
  price: number;
  type: string;
  selected?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
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
  }
}
