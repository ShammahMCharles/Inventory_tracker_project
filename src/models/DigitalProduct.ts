import { Product } from "./Product";

export class DigitalProduct extends Product{
fileSize:number; 

    constructor(sku: string, name:string, price: number, fileSize: number){
    super( sku,name, price);
    this.fileSize = fileSize;
    }

    override getPriceWithTax(): number {
    return 0;
    }


    displayDetails(): string{
    return super.displayDetails() +`digital download of ${this.fileSize}MB`
    }
}



// const product = new Product("890", "laptop", 50);
// console.log(product.getPriceWithTax());