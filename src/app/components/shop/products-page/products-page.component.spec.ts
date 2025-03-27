import { Component, OnInit } from '@angular/core';
import { ShopService, Product } from '../../services/shop.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  itemsList: Product[] = [];

  constructor(private shopService: ShopService, private dialog: MatDialog) {}

  ngOnInit() {
    this.shopService.getProducts();
    this.shopService.productsListSubject.subscribe(products => {
      this.itemsList = products;
    });
  }

  addRemoveItem(productId: number) {
    const product = this.itemsList.find(p => p.id === productId);
    if (product) {
      this.shopService.addRemoveItemToCart(product);
    }
  }

  openAddProductModal() {
    this.dialog.open(AddProductModalComponent, {
      width: '500px'
    });
  }
}
