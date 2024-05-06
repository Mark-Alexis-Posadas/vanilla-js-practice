// Create an object representing a list of products with their prices. Use a loop to print each product's name along with whether its price is above or below a certain threshold (e.g., $50).

function productPrices(products) {
  let results = [];
  for (let i = 0; i < products.length; i++) {
    results.push(
      `Product: ${products[i].name}, price ${
        products[i].price >= 800 ? "Above Threshold" : "Below Threshold"
      }`
    );
  }

  return results;
}

let products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 60 },
];

let result = productPrices(products);

console.log(result);
