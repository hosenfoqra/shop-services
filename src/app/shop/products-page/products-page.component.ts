import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  itemsList;
  constructor(private shopService: ShopService){
    this.itemsList = shopService.productsList
  }

  addRemoveItem(itemID: any){
    this.shopService.addRemoveItemToCart(itemID)
  }
}
