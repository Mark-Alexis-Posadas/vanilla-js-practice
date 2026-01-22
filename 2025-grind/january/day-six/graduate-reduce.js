const products = [
  { name: "Laptop", price: 5000, stock: 5, category: "Electronics" },
  { name: "Mouse", price: 500, stock: 0, category: "Electronics" },
  { name: "Keyboard", price: 1500, stock: 3, category: "Electronics" },
  { name: "Notebook", price: 100, stock: 20, category: "School" },
  { name: "Ballpen", price: 20, stock: 50, category: "School" },
];

const totalValuePerCategory = products.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = 0;
  }

  acc[item.category] = acc[item.category] + 1;

  return acc;
}, {});

console.log(totalValuePerCategory);

const total = products.reduce((acc, item) => acc + item.price * item.stock, 0);
const totalStock = products.reduce((acc, item) => acc + item.stock, 0);

const groupBy = products.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = 0;
  }
  acc[item.category] = acc[item.category || 0] + 1;

  return acc;
}, {});
const product = products[0];
const mostExpensiveProducts = products.reduce(
  (acc, item) => (item.price > acc.price ? item : acc),
  product,
);

console.log(mostExpensiveProducts);

function expenseiveProducts(product) {
  let startProduct = product[0];

  for (let i = 0; i < product.length; i++) {
    if (startProduct.price < product[i].price) {
      startProduct = product[i];
    }
  }

  return startProduct;
}

console.log(expenseiveProducts(products));

//optimize by gpt
// =====================
// DATA
// =====================
const products = [
  { name: "Laptop", price: 5000, stock: 5, category: "Electronics" },
  { name: "Mouse", price: 500, stock: 0, category: "Electronics" },
  { name: "Keyboard", price: 1500, stock: 3, category: "Electronics" },
  { name: "Notebook", price: 100, stock: 20, category: "School" },
  { name: "Ballpen", price: 20, stock: 50, category: "School" },
];

// =====================
// REDUCE FUNCTIONS
// =====================

// Total value of all products
function getTotalValue(products) {
  return products.reduce((acc, item) => acc + item.price * item.stock, 0);
}

// Total stock of all products
function getTotalStock(products) {
  return products.reduce((acc, item) => acc + item.stock, 0);
}

// Count of products per category
function getProductCountPerCategory(products) {
  return products.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = 0;
    acc[item.category] += 1;
    return acc;
  }, {});
}

// Most expensive product
function getMostExpensiveProduct(products) {
  return products.reduce(
    (acc, item) => (item.price > acc.price ? item : acc),
    products[0],
  );
}

// Alternative: for-loop version (optional)
function getMostExpensiveProductLoop(products) {
  let maxProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxProduct.price) {
      maxProduct = products[i];
    }
  }
  return maxProduct;
}

// =====================
// LOGGING / TESTING
// =====================
console.log("Total Value:", getTotalValue(products)); // 5000*5 + ...
console.log("Total Stock:", getTotalStock(products)); // 5 + 0 + 3 + 20 + 50
console.log(
  "Product Count per Category:",
  getProductCountPerCategory(products),
);
console.log("Most Expensive Product:", getMostExpensiveProduct(products));
console.log(
  "Most Expensive Product (loop):",
  getMostExpensiveProductLoop(products),
);

// =====================
// EXPORT (optional for React / Node)
// =====================
export {
  products,
  getTotalValue,
  getTotalStock,
  getProductCountPerCategory,
  getMostExpensiveProduct,
  getMostExpensiveProductLoop,
};
