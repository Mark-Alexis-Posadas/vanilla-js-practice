function areUsersWithHighPointsActive(users) {
  return users.filter((user) => user.points > 100).every((user) => user.active);
}

const users = [
  { name: "Mark", active: true, points: 120 },
  { name: "Ana", active: false, points: 80 },
  { name: "John", active: true, points: 150 },
  { name: "Lia", active: true, points: 50 },
  { name: "Mia", active: false, points: 200 },
];

console.log(areUsersWithHighPointsActive(users));
