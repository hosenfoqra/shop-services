import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.shopService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, p) => acc + p.price, 0);
  }

  removeFromCart(product: Product) {
    this.shopService.removeFromCart(product);
    this.loadCart();
  }
}
