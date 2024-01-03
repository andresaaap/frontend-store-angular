import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

    // input for the product property
    @Input() product: Product;
    quantity: number = 1;
    quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    constructor(private cartService: CartService, private router: Router, private snackBar: MatSnackBar) {
      this.product = new Product(1, "dummy", 100, "dummy", "dummy");
     }
  
    ngOnInit() {
    }
    showSuccessNotification() {
      this.snackBar.open('Product added to cart', 'Dismiss', {
        duration: 5000, // Duration in milliseconds (3 seconds),
        verticalPosition: 'top'
      });
    }

    addToCart(product: Product, quantity: number) {
      this.cartService.addToCart(product, quantity);
      this.showSuccessNotification();
    }

    goToDetails(product: Product) {
      console.log("goToDetails");
      //Use router to navigate to product details page  with product id
      this.router.navigate(['/product', product.id]);
    }

    

}
