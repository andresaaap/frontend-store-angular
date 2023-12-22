import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'Nike Air Max 270', 150, 'The Nike Air Max 270 is inspired by two icons of big Air: the Air Max 180 and Air Max 93. It features Nike’s biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b5e1d3a-9e6a-4b7a-8b7a-0b6b6b6b6b6b/air-max-270-mens-shoe-7XjJkG.jpg'),
      new Product(2, 'Nike Air Max 90', 120, 'Featuring the superb cushioning that made it famous, the Nike Air Max 90 Essential delivers comfort and timeless style with a premium look and feel.', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b5e1d3a-9e6a-4b7a-8b7a-0b6b6b6b6b6b/air-max-270-mens-shoe-7XjJkG.jpg'),
      new Product(3, 'Nike Air Max 95', 170, 'The Nike Air Max 95 made its mark as the first shoe to include visible Nike Air cushioning in the forefoot. The Nike Air Max 95 OG Shoe energizes the iconic design with updated materials in a variety of textures and accents.', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b5e1d3a-9e6a-4b7a-8b7a-0b6b6b6b6b6b/air-max-270-mens-shoe-7XjJkG.jpg')
    ];
  }

}
