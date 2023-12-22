import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

    // input for the product property
    @Input() product: Product;
    quantity: number = 0;
  
    constructor() {
      this.product = new Product(1, "dummy", 100, "dummy", "dummy");
     }
  
    ngOnInit() {
    }
}
