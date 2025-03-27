import { Component, OnInit } from '@angular/core';
import { ShopService, Product } from '../../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPayment: number = 0;

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.getCartItems();
    this.shopService.cartItemsSubject.subscribe(items => {
      this.cartItems = items;
    });

    this.shopService.totalPayment.subscribe(total => {
      this.totalPayment = total;
    });
  }

  removeFromCart(product: Product) {
    this.shopService.addRemoveItemToCart(product);
  }
}
