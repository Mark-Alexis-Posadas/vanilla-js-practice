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

function getElectronics(products) {
  return products
    .filter(
      (product) => product.category === "Electronics" && product.stock > 0
    )
    .map((item) => `${item.name} - ${item.price}`);
}

function countProductsPerCategory(products) {
  const productsItems = products.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] = acc[item.category] + 1;
    return acc;
  }, {});

  return productsItems;
}
console.log(countProductsPerCategory(products));

function wordsToString(words) {
  const counts = words.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 0;
    }
    acc[item] += 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .map(([word, count]) => `${word}(${count})`)
    .join(", ");
}

const words = ["hi", "hello", "hi", "hey", "hello"];
console.log(wordsToString(words));

const users = [
  { name: "Juan", active: true },
  { name: "Maria", active: false },
  { name: "Pedro", active: true },
  { name: "Juan", active: true },
  { name: "Maria", active: false },
  { name: "Pedro", active: true },
  { name: "Juan", active: true },
  { name: "Maria", active: false },
  { name: "Pedro", active: true },
];

const sumOfAge = users.reduce((acc, item) => {
  return acc + item.age;
}, 0);

console.log(sumOfAge);
👉 Gawin: total age = 75

const countActiveUsers = users.reduce(
  (acc, item) => acc + (item.active ? 1 : 0),
  0,
);

console.log(countActiveUsers);

👉 Result: 2

const users = [
  { name: "Juan", role: "admin" },
  { name: "Maria", role: "user" },
  { name: "Pedro", role: "admin" },
];

const groupByRole = users.reduce((acc, item) => {
  if (!acc[item.role]) {
    acc[item.role] = [];
  }
  acc[item.role].push(item);
  return acc;
}, {});

console.log(groupByRole);

const numbers = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = numbers.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
// 👉 Result: [1, 2, 3, 4, 5]

console.log(removeDuplicates);
