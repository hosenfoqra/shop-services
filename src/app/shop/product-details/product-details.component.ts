import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id = -1
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
  }
}
