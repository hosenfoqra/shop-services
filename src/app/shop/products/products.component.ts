import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 @Input() itemId: number | null = null
 @Input() title: String = "default"
 @Input() price: number = 0
 @Input() selected: boolean = false
 @Output() itemClicked: EventEmitter<number> = new EventEmitter<number>()

 addItem(){
  this.itemClicked.emit(this.itemId!)
 }

 ngOnDestroy(){
  console.log("Component deleted")
 }
}
