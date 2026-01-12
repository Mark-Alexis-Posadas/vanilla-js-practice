function greet(users) {
  return users
    .filter((user) => user.active && user.role !== "admin")
    .map((item) => `Hello, ${item.name}`);
}

const users = [
  { name: "Mark", age: 31, active: true, role: "admin", points: 120 },
  { name: "Ana", age: 25, active: false, role: "user", points: 80 },
  { name: "John", age: 40, active: true, role: "moderator", points: 150 },
  { name: "Lia", age: 18, active: true, role: "user", points: 50 },
  { name: "Mia", age: 35, active: false, role: "admin", points: 200 },
];

console.log(greet(users));
