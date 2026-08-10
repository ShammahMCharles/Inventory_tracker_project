import { Product } from "./Product";

export class PhyicalProduct extends Product{
weight:number; 

    constructor(sku: string, name:string, price: number, weight: number){
    super( sku,name, price);
    this.weight = weight;
    }

    override getPriceWithTax(): number {
        return this.price * 0.10;
    }

    displayDetails(): string{
    return super.displayDetails() +`It weights ${this.weight}kg`
    }
}