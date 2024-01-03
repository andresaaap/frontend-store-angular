import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrl: './product-item-details.component.css'
})
export class ProductItemDetailsComponent {

  product?: Product;
  quantity: number = 1;
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.product = this.productService.getProductById(Number(id));
  }

  addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
    this.openSnackBar("Product added to cart", "Dismiss");
  }


  openSnackBar(message: string, action: string) { 
    this.snackBar.open(message, action, { 
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    }); 
  } 

}
