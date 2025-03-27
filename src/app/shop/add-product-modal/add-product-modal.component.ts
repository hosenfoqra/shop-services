import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShopService, Product } from '../../services/shop.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent {
  product: Partial<Product> = {};

  constructor(
    private dialogRef: MatDialogRef<AddProductModalComponent>,
    private shopService: ShopService
  ) {}

  onAdd() {
    if (this.product.title && this.product.type && this.product.price) {
      this.shopService.addProduct(this.product as Product);
      this.dialogRef.close();
    } else {
      alert("Please fill all fields!");
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
