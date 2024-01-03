import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import {MatGridList} from '@angular/material/grid-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
