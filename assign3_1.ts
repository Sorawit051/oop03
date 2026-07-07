interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const myInventory: Product[] = [
  { id: 1, name: "Laptop", price: 1200, quantity: 10 },
  { id: 2, name: "Mouse", price: 25, quantity: 50 },
  { id: 3, name: "Keyboard", price: 45, quantity: 20 }
];

function updateStock(productId: number, amountSold: number): void {
  const product = myInventory.find((item) => item.id === productId);

  if (product) {
    if (amountSold > product.quantity) {
      console.log("Not enough stock");
    } else {
      product.quantity -= amountSold;
      console.log(`Sale successful! Remaining ${product.name} stock: ${product.quantity}`);
    }
  } else {
    console.log("Product not found");
  }
}

console.log("--- ทดสอบขาย Laptop 3 เครื่อง ---");
updateStock(1, 3); 

console.log("\n--- ทดสอบขาย Mouse 60 อัน (เกินสต็อก) ---");
updateStock(2, 60); 