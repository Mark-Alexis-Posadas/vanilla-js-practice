const usersChallenge = (users) => {
  const mappedUsers = users.map((user) => {
    return user.age >= 18
      ? `${user.name} is an adult`
      : `${user.name} is a minor`;
  });

  return mappedUsers;
};

module.exports = usersChallenge;
