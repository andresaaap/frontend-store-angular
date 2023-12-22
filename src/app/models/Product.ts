// create a product model with the following properties: id, name, price, description, and photoUrl.

export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    photoUrl: string;

    constructor(id: number, name: string, price: number, description: string, photoUrl: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.photoUrl = photoUrl;
    }
}