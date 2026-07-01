type Category = "Electronics" | "Clothing" | "Food" ;
interface Product {
    id: number;
    name: string;
    category: Category;
    price: number;
}

let product: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 500 },
    { id: 3, name: "Pizza", category: "Food", price: 50 }
]

const filterByCategory = (list: Product[], cat: Category) => list.filter(p => p.category === cat);

console.log(filterByCategory(product, "Clothing"));