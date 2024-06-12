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

// Create an object representing a list of students with their grades in different subjects. Use a loop to print each student's name along with their average grade.

let students = [
  { name: "Alice", grades: { math: 90, science: 85, history: 88 } },
  { name: "Bob", grades: { math: 80, science: 75, history: 78 } },
  { name: "Charlie", grades: { math: 95, science: 92, history: 90 } },
];

for (let i = 0; i < students.length; i++) {
  let result = `Student: ${students[i].name}, Average Grade: ${
    (students[i].grades.math +
      students[i].grades.science +
      students[i].grades.history) /
    3
  }`;

  console.log(result);
}

// Create an object representing a list of students with their grades in different subjects. Use a loop to print each student's name along with their average grade.

let employees = [
  { name: "Emily", salary: 40000 },
  { name: "David", salary: 60000 },
  { name: "Sophia", salary: 80000 },
];

for (let i = 0; i < employees.length; i++) {
  let result = `Employee: ${employees[i].name}, Salary: ${
    employees[i].salary <= 40000
      ? "Low"
      : employees[i].salary > 40000 && employees[i].salary <= 60000
      ? "Medium"
      : "High"
  }`;

  console.log(result);
}

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

console.log(productPrices(products));

// Create an object representing a list of songs with their durations in seconds. Use a loop to print each song's name along with its duration in minutes and seconds.

function songDuration(songs) {
  let results = [];

  for (let i = 0; i < songs.length; i++) {
    const minutes = Math.floor(songs[i].duration / 60);
    const extraSeconds = songs[i].duration % 60;
    const element = `Song ${songs[i].name}, Duration: ${minutes}:${
      extraSeconds >= 10 ? extraSeconds : "0" + extraSeconds
    }`;
    results.push(element);
  }

  return results;
}
let songs = [
  { name: "Bohemian Rhapsody", duration: 367 },
  { name: "Hotel California", duration: 391 },
  { name: "Stairway to Heaven", duration: 482 },
];

console.log(songDuration(songs));

// Create an object representing a list of countries with their populations and continents. Use a loop to print each country's name along with its population and continent.

function listOfCountries(countries) {
  let results = [];
  for (let i = 0; i < countries.length; i++) {
    const element = `Country: ${countries[i].name}, Population: ${countries[
      i
    ].population.toLocaleString()}, Continent: ${countries[i].continent}`;

    results.push(element);
  }
  return results;
}

let countries = [
  { name: "USA", population: 331000000, continent: "North America" },
  { name: "Brazil", population: 212000000, continent: "South America" },
  { name: "India", population: 1380000000, continent: "Asia" },
];

console.log(listOfCountries(countries));

function updateAge(age) {
  // Write a JavaScript function that takes in the array of objects provided earlier and returns an array of strings containing only the names of the people in the array. The output array should contain only the names, without any other information.
  // const result = age.map((item) => item.name);
  // return result;
  let output = [];
  for (let i = 0; i < age.length; i++) {
    if (age[i].age > 30) {
      output.push(age[i]);
    }
  }
  return output;
}

let arrayOfObjects = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];

const output = updateAge(arrayOfObjects);
console.log(output);
