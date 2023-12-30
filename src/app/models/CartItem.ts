// import the Product model
import { Product } from './Product';

// create a CartItem model with the following properties: id, product, quantity

export class CartItem {
    id: number;
    product: Product;
    quantity: number;
  
    constructor(id: number, product: Product, quantity: number) {
      this.id = id;
      this.product = product;
      this.quantity = quantity;
    }
  }