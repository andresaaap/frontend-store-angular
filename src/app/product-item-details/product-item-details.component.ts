import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrl: './product-item-details.component.css'
})
export class ProductItemDetailsComponent {

  product?: Product;
  quantity: number = 0;
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.product = this.productService.getProductById(Number(id));
  }

  addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
  }

}
