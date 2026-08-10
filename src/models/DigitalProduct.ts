import { Product } from "./Product";

export class DigitalProduct extends Product{
fileSize:number; 

    constructor(sku: string, name:string, price: number, fileSize: number){
    super( sku,name, price);
    this.fileSize = fileSize;
    }

    displayDetails(): string{
    return `item ${this.sku} ${this.name} costs 
    $${this.price} and is a digital 
    download of ${this.fileSize}MB`
    }

}