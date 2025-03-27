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

 
  showModal = false;
  newProduct: Partial<Product> = {};

 
  selectedType: string = '';
  sortOrder: 'asc' | 'desc' | 'none' = 'none'; 

  constructor(private shopService: ShopService, private dialog: MatDialog) {}

  ngOnInit() {
    this.shopService.getProducts();
    this.applyFilters(); 
  }

  applyFilters() {
    this.shopService.productsListSubject.subscribe(products => {
      let filtered = [...products];

      if (this.selectedType.trim()) {
        filtered = filtered.filter(p =>
          p.type.toLowerCase().includes(this.selectedType.toLowerCase())
        );
      }
    
      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
      }

      this.itemsList = filtered;
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  addProduct() {
    if (this.newProduct.title && this.newProduct.type && this.newProduct.price) {
      this.shopService.addProduct(this.newProduct as Product);
      this.newProduct = {};
      this.toggleModal();
    } else {
      alert('Please fill all fields');
    }
  }

  openAddProductModal() {
    this.dialog.open(AddProductModalComponent, {
      width: '500px',
      maxWidth: '90%',
      panelClass: 'custom-centered-modal',
      autoFocus: false,
      disableClose: true
    });
  }

  addRemoveItem(productId: number) {
    const product = this.itemsList.find(p => p.id === productId);
    if (product) {
      this.shopService.addRemoveItemToCart(product);
    }
  }

  deleteProduct(productId: number) {
    if (confirm("Are you sure you want to delete this product?")) {
      this.shopService.deleteProduct(productId);
    }
  }
}
