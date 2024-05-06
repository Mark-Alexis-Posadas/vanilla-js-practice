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
