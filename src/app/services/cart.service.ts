import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product, quantity: number) {
    let cartItem = new CartItem(this.cartItems.length + 1, product, quantity);
    this.cartItems.push(cartItem);
    return this.cartItems;
  }

  updateItemQuantity(item: CartItem) {
    console.log("executing updateItemQuantity quantity: " + item.quantity);
    let index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    this.cartItems[index].quantity = item.quantity;
  }

  //calculate total to pay
  getTotal(): number {
    let total: number = 0;
    this.cartItems.forEach(cartItem => {
      total += cartItem.product.price * cartItem.quantity;
    });
    return total;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
