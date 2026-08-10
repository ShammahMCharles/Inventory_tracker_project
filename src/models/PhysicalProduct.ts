import { Product } from "./Product";

export class PhyicalProduct extends Product{
weight:number; 

    constructor(sku: string, name:string, price: number, weight: number){
    super( sku,name, price);
    this.weight = weight;
    }

    displayDetails(): string{
    return ` item ${this.sku} ${this.name} costs 
    $${this.price} weights ${this.weight}MB`
    }

    override getPriceWithTax(): number {
        return this.price * 0.10;
    }

}