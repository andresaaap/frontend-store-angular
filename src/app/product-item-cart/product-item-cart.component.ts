import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-item-cart',
  templateUrl: './product-item-cart.component.html',
  styleUrl: './product-item-cart.component.css'
})
export class ProductItemCartComponent {
  @Input() item?: CartItem;

  @Output() updateItemQuantityEvent = new EventEmitter<number>();
  @Output() removeItemEvent = new EventEmitter<number>();

  constructor(private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    console.log("ngOnInit item: " + this.item?.quantity);
  }
  
  updateItemQuantity() {
    if (this.item) {
      this.updateItemQuantityEvent.emit(this.item.quantity);
    }
  }

  removeItem() {
    this.removeItemEvent.emit();
    this.showRemoveNotification(); 
  }

  showRemoveNotification() {
    this.snackBar.open('Product was removed from cart', 'Dismiss', {
      duration: 5000, // Duration in milliseconds (3 seconds),
      verticalPosition: 'top'
    });
  }


}
