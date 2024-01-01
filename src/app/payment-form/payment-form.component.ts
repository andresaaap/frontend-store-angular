import { Component, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/Order';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  name?: string;
  cardNumber?: string;
  address?: string;

  @Output() orderSubmitted = new EventEmitter();

  constructor(private orderService: OrderService, private router: Router, private cartService:CartService ) { }

  onSubmit() {
    console.log('Form submitted');
    //Create an order object
    if (this.name && this.cardNumber && this.address) {
      const orderTotal = this.cartService.getTotal();
      const order = new Order(0, this.cartService.getCartItems(), orderTotal, this.address, this.cardNumber, this.name);
      //Call the service to save the order
      var newOrder: Order = this.orderService.createOrder(order);
      //Reset the form
      this.name = '';
      this.cardNumber = '';
      this.address = '';
      //Emit the orderSubmitted event to reset the cart
      this.orderSubmitted.emit();
      // Redirect to the order confirmation page /order-success/:id
      this.router.navigate(['/order-success', newOrder.id]);  
    }
    
  }


}
