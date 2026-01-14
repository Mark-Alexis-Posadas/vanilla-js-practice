function average(users) {
  // const userCount = users
  //   .filter((user) => user.active)
  //   .reduce((acc, item) => acc + item.age, 0);
  // return userCount / users.filter((item) => item.active).length;

  const usersActive = users.filter((user) => user.active);
  const usersAgeCount = users.reduce((acc, item) => acc + item.age, 0);

  console.log(usersActive);

  return usersAgeCount / usersActive.length;
}

const users = [
  { name: "Mark", age: 31, active: true, role: "admin", points: 120 },
  { name: "Ana", age: 25, active: false, role: "user", points: 80 },
  { name: "John", age: 40, active: true, role: "moderator", points: 150 },
  { name: "Lia", age: 18, active: true, role: "user", points: 50 },
  { name: "Mia", age: 35, active: false, role: "admin", points: 200 },
];

console.log(average(users));
