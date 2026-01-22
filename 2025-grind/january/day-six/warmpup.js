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

/* ================================
   DATA SETS
================================ */

// Users for basic filtering
const usersBasic = [
  { name: "Juan", active: true },
  { name: "Maria", active: false },
  { name: "Pedro", active: true },
];

// Users with age
const usersWithAge = [
  { name: "Juan", age: 17 },
  { name: "Maria", age: 22 },
  { name: "Pedro", age: 18 },
];

// Products with stock
const productsWithStock = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 3 },
];

// Products with price
const productsWithPrice = [
  { name: "Phone", price: 15000 },
  { name: "Laptop", price: 60000 },
  { name: "Tablet", price: 30000 },
];

// Users with role + status
const usersWithRole = [
  { email: "juan@mail.com", role: "admin", active: true },
  { email: "maria@mail.com", role: "user", active: true },
  { email: "pedro@mail.com", role: "admin", active: false },
  { email: "ana@mail.com", role: "admin", active: true },
];

/* ================================
   TEST CASES
================================ */

// 1️⃣ Active user names
const activeUserNames = usersBasic
  .filter((user) => user.active)
  .map((user) => user.name);

console.log("1. Active Users:", activeUserNames);
// ["Juan", "Pedro"]

// 2️⃣ Adult users (18+)
const adultUserNames = usersWithAge
  .filter((user) => user.age >= 18)
  .map((user) => user.name);

console.log("2. Adult Users:", adultUserNames);
// ["Maria", "Pedro"]

// 3️⃣ Products in stock
const productsInStock = productsWithStock
  .filter((product) => product.stock > 0)
  .map((product) => product.name);

console.log("3. Products In Stock:", productsInStock);
// ["Laptop", "Keyboard"]

// 4️⃣ Uppercase expensive products (price >= 30000)
const expensiveProductNamesUppercase = productsWithPrice
  .filter((product) => product.price >= 30000)
  .map((product) => product.name.toUpperCase());

console.log("4. Expensive Products:", expensiveProductNamesUppercase);
// ["LAPTOP", "TABLET"]

// 5️⃣ Emails of active admins
const activeAdminEmails = usersWithRole
  .filter((user) => user.active && user.role === "admin")
  .map((user) => user.email);

console.log("5. Active Admin Emails:", activeAdminEmails);
// ["juan@mail.com", "ana@mail.com"]
