function calculateprice(price: number, discountPercent: number): number {
    const after:number = price - (price * discountPercent / 100);
    if(after > 0){
        return after;
    }else{
        return 0;
    }
}

let p:number = 1000;
let d:number = 10;
let totalPrice:number = calculateprice(p, d);

console.log(`Price: ${p}`);
console.log(`Discount: ${d}%`);
console.log(`Total Price: ${totalPrice}`);