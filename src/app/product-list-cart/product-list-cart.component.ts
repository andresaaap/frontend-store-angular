import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';
import { ProductItemCartComponent } from '../product-item-cart/product-item-cart.component';
import { Product } from '../models/Product';
import {MatGridList} from '@angular/material/grid-list';

@Component({
  selector: 'app-product-list-cart',
  templateUrl: './product-list-cart.component.html',
  styleUrl: './product-list-cart.component.css'
})
export class ProductListCartComponent {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { 
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  updateItemQuantity(item: CartItem) {
    this.cartService.updateItemQuantity(item);
    this.total = this.cartService.getTotal();
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
    this.total = this.cartService.getTotal();
  }

}
