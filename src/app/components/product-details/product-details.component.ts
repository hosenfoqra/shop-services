import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.shopService.getProductById(+id).subscribe(product => {
        this.product = product;
      });
    }
  }

  deleteProduct() {
    if (this.product) {
      this.shopService.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/shop/products']);
      });
    }
  }

  toggleCart() {
    if (this.product) {
      this.shopService.toggleCart(this.product);
    }
  }
}
