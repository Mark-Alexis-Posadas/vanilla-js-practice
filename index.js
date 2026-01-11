function goodNightChallenge(param) {
  return param
    .filter((user) => user.active && user.age < 30)
    .map((item) => item.name);
}
const users = [
  { name: "Mark", age: 31, active: true },
  { name: "Ana", age: 25, active: false },
  { name: "John", age: 28, active: true },
  { name: "Lia", age: 18, active: true },
  { name: "Mia", age: 35, active: false },
];

console.log(goodNightChallenge(users));
