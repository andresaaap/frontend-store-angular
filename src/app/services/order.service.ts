import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [];

  constructor() { }

  getOrderByID(id: number) {
    return this.orders.find(order => order.id === id);
  }

  createOrder(order: Order) {
    order.id = this.orders.length + 1;
    this.orders.push(order);
    return order;
  }

}
