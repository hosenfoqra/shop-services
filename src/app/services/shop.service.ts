import { Injectable } from '@angular/core';
import productsData from './data.json'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  productsList;
  cartItems = [];
  totalPayment = 0

  constructor() {
  }

  addRemoveItemToCart(id: any){
    console.log(id)
    let element = this.productsList.filter((element) => element.id == id)[0]
    element.selected = !element.selected
    element.selected ? this.totalPayment += element.price : this.totalPayment -= element.price
  }
}
