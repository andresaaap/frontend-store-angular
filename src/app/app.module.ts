import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListCartComponent } from './product-list-cart/product-list-cart.component';
import { ProductItemCartComponent } from './product-item-cart/product-item-cart.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FormsModule } from '@angular/forms';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    ProductItemDetailsComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    NavBarComponent,
    ProductListCartComponent,
    ProductItemCartComponent,
    PaymentFormComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
