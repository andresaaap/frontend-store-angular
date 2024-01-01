import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/Order';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent {

  order?: Order;
  
  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.order = this.orderService.getOrderByID(Number(id));
  }



}
