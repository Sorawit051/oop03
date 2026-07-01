let stock: number[] = [15, 8, 20, 5, 30];

function getRestockList(inventory: number[]): number[] {
    const restockList: number[] = [];
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i] < 10){
            restockList.push(inventory[i]);
        }
    }
    return restockList;
}

let restockList: number[] = getRestockList(stock);

console.log(`Stock: ${stock}`);
console.log(`Restock List: ${restockList}`);
