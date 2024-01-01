import { CartItem } from "./CartItem";

export class Order {

    id: number;
    cartItems: CartItem[];
    total: number;
    name: string;
    shippingAddress: string;
    creditCardNumber: string;

    constructor(id: number, cartItems: CartItem[], total: number, shippingAddress: string, creditCardNumber: string, name: string) {
        this.id = id;
        this.cartItems = cartItems;
        this.total = total;
        this.shippingAddress = shippingAddress;
        this.creditCardNumber = creditCardNumber;
        this.name = name;
    }
}