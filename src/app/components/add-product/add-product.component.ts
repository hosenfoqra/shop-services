import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<Product>();
  @Output() closeModal = new EventEmitter<void>();

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private shopService: ShopService) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      type: ['', Validators.required]
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.shopService.addProduct(this.productForm.value).subscribe(product => {
        this.productAdded.emit(product);
      });
    }
  }

  close() {
    this.closeModal.emit();
  }
}
