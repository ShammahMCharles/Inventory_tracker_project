import { Product } from "../models/Product";


export function calculateTax(product: Product){
    const tax = product.price * 0.07
    const total = product.price + tax;

    return total.toFixed(2)
}

// const product = new Product("890", "laptop", 50);

// console.log(product.getPriceWithTax());
// console.log(product.displayDetails());
