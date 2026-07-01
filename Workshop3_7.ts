interface Product {
    id: number;
    name: string;
    price: number;
}
type Status = "available" | "out of stock";

const printsummary = (product: Product, status: Status) => {
    console.log(`Product ID: ${product.id}`);
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: ${product.price}`);
    console.log(`Product Status: ${status}`);
}

let myItem: Product = { id: 1, name: "Laptop", price: 1000 };
printsummary(myItem, "available");



