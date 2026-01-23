<<<<<<< HEAD
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

// const total = products.reduce((acc, item) => acc + item.price * item.stock, 0);
// const totalStock = products.reduce((acc, item) => acc + item.stock, 0);

// const groupBy = products.reduce((acc, item) => {
//   if (!acc[item.category]) {
//     acc[item.category] = 0;
//   }
//   acc[item.category] = acc[item.category || 0] + 1;

//   return acc;
// }, {});
// const product = products[0];
// const mostExpensiveProducts = products.reduce(
//   (acc, item) => (item.price > acc.price ? item : acc),
//   product,
// );

// console.log(mostExpensiveProducts);

// function expenseiveProducts(product) {
//   let startProduct = product[0];

//   for (let i = 0; i < product.length; i++) {
//     if (startProduct.price < product[i].price) {
//       startProduct = product[i];
//     }
//   }

//   return startProduct;
// }

// console.log(expenseiveProducts(products));
const ingredients = [
  { name: "Bawang", flavor: 3 },
  { name: "Sibuyas", flavor: 2 },
  { name: "Luya", flavor: 4 },
  { name: "Paminta", flavor: 1 },
  { name: "Manok", flavor: 5 },
  { name: "Sayote", flavor: 2 },
  { name: "Dahon ng Malunggay", flavor: 3 },
];

const output = ingredients.reduce((acc, item) => {
  acc[item.name] = item.flavor;
  return acc;
}, {});
console.log(output);

const total = ingredients.reduce((acc, item) => {
  acc = acc + item.flavor;
  return acc;
}, 0);

console.log(total);

// TODO: 1️⃣ Convert ingredients into an object where keys are ingredient names
// and values are their flavor scores

// TODO: 2️⃣ Use reduce to calculate total flavor score of the tinola
=======
>>>>>>> b62f58907a66710fc1d49c486b464c52bcfdb8e6
