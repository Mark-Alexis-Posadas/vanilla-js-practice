function sortUser(users) {
  return users.filter((user) => user.active).sort((a, b) => a.age - b.age)[0]
    .name;
}

const users = [
  { name: "Mark", age: 31, active: true },
  { name: "Ana", age: 25, active: false },
  { name: "John", age: 40, active: true },
  { name: "Lia", age: 18, active: true },
];

console.log(sortUser(users));
