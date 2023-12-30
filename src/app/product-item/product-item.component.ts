import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

    // input for the product property
    @Input() product: Product;
    quantity: number = 0;
    quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    constructor(private cartService: CartService) {
      this.product = new Product(1, "dummy", 100, "dummy", "dummy");
     }
  
    ngOnInit() {
    }

    addToCart(product: Product, quantity: number) {
      this.cartService.addToCart(product, quantity);
    }

}
