/*Challenge 1
  Task: Count the number of active users who are 30 or older.
  Expected Output: 2
  Suggested Methods: filter + AND (&&) + length or reduce
*/

function countNumberOfActiveUsers(users) {
  // return users.filter((user) => user.active && user.age >= 30).length; //first approach
  return users
    .filter((user) => user.active && user.age >= 30)
    .reduce((acc) => acc + 1, 0); //first approach
}

const users = [
  { name: "Mark", age: 31, active: true, role: "admin", points: 120 },
  { name: "Ana", age: 25, active: false, role: "user", points: 80 },
  { name: "John", age: 40, active: true, role: "moderator", points: 150 },
  { name: "Lia", age: 18, active: true, role: "user", points: 50 },
  { name: "Mia", age: 35, active: false, role: "admin", points: 200 },
];
console.log(countNumberOfActiveUsers(users));
