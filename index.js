const totalPricePerCategory = require("./2025-grind/january/day-three/challenge-5.js");
const items = [
  { name: "Bigas", category: "food", price: 120 },
  { name: "Isda", category: "food", price: 80 },
  { name: "Sabon", category: "hygiene", price: 45 },
  { name: "Shampoo", category: "hygiene", price: 120 },
  { name: "Notebook", category: "school", price: 60 },
];

console.log(totalPricePerCategory(items));
