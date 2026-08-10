export class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }


    getPriceWithTax(): number {
        return Number(this.price.toFixed(2));
    }

    displayDetails(): string{
        return `${this.name} sku number 
        ${this.sku} cost $${this.price} .`
    }

   

}

