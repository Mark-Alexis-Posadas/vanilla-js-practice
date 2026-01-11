/*Challenge 2

Task: Get an array of names of users who are active OR have points > 100.
Expected Output:

["Mark", "John", "Mia"]


Suggested Methods: filter + OR (||) + map
*/

function usersActive(users) {
  return users.filter((user) => user.points > 100).map((item) => item.name);
}

const users = [
  { name: "Mark", age: 31, active: true, role: "admin", points: 120 },
  { name: "Ana", age: 25, active: false, role: "user", points: 80 },
  { name: "John", age: 40, active: true, role: "moderator", points: 150 },
  { name: "Lia", age: 18, active: true, role: "user", points: 50 },
  { name: "Mia", age: 35, active: false, role: "admin", points: 200 },
];
console.log(usersActive(users)); //[ 'Mark', 'John', 'Lia', 'Mia' ]
