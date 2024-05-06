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
