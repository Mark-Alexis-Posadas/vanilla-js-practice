// Create an object representing a list of groceries with items and their quantities. Use a loop to print each item and its quantity.
let groceries = [
  {
    item: "Apple",
    quantity: 5,
  },
  {
    item: "Banana",
    quantity: 3,
  },
  {
    item: "Milk",
    quantity: 1,
  },
];

for (let i = 0; i < groceries.length; i++) {
  let result = `Item: ${groceries[i].item}, Quantity: ${groceries[i].quantity}`;
  console.log(result);
}
