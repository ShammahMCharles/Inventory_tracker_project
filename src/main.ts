import { DigitalProduct} from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";


const physicalProduct = new PhysicalProduct(
    "P001",
    "Laptop",
    1000,
    5
);

const digitalProduct = new DigitalProduct(
    "D001",
    "TypeScript Course",
    50,
    2
);

const products = [physicalProduct, digitalProduct];

for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price: $${product.getPriceWithTax()}`);
}