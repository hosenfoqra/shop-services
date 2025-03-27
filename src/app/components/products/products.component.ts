import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterType: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  showAddProductModal: boolean = false;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.shopService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  openAddProductModal() {
    this.showAddProductModal = true;
  }

  closeAddProductModal() {
    this.showAddProductModal = false;
  }

  onProductAdded(newProduct: Product) {
    // Refresh the products list after adding a product
    this.loadProducts();
    this.closeAddProductModal();
  }

  sortProducts() {
    if (this.sortOrder === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
      this.sortOrder = 'desc';
    } else {
      this.filteredProducts.sort((a, b) => b.price - a.price);
      this.sortOrder = 'asc';
    }
  }

  filterProducts() {
    if (this.filterType) {
      this.filteredProducts = this.products.filter(p => p.type === this.filterType);
    } else {
      this.filteredProducts = this.products;
    }
  }

  clearFilter() {
    this.filterType = '';
    this.filteredProducts = this.products;
  }
}
