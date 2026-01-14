const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 10 },
  { id: 2, name: "Headphones", category: "Electronics", price: 3000, stock: 0 },
  { id: 3, name: "Keyboard", category: "Electronics", price: 2500, stock: 15 },
  { id: 4, name: "Office Chair", category: "Furniture", price: 7000, stock: 5 },
  { id: 5, name: "Desk", category: "Furniture", price: 12000, stock: 2 },
  { id: 6, name: "Pen", category: "Stationery", price: 20, stock: 100 },
  { id: 7, name: "Notebook", category: "Stationery", price: 80, stock: 50 },
  { id: 8, name: "Monitor", category: "Electronics", price: 15000, stock: 7 },
];

const totalInventoryValue = products.reduce((acc, item) => {
  if (item.stock > 0) {
    const multiplyPriceAndStock = item.price * item.stock;
    acc = multiplyPriceAndStock + acc;
  }
  return acc;
}, 0);

console.log(totalInventoryValue);
