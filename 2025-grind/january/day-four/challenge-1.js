const usersCount = (users) => {
  return users
    .filter((user) => user.active && user.age >= 30)
    .reduce((acc) => acc + 1, 0);
};

// const usersCount = (users) => {
//   let countUser = 0;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].active === true && users[i].age >= 30) {
//       countUser++;
//     }
//   }
//   return countUser;
// };

const users = [
  { name: "Mark", age: 31, active: true },
  { name: "Ana", age: 25, active: false },
  { name: "John", age: 40, active: true },
  { name: "Lia", age: 18, active: true },
];

console.log(usersCount(users));
