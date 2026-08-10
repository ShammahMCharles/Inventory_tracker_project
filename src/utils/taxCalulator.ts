import { Product } from "../models/Product";

const product = new Product("890", "laptop", 50);

console.log(product.getPriceWithTax());
console.log(product.displayDetails());
