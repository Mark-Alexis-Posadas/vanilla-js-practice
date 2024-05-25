function ageOfPerson(age) {
  let result;

  switch (true) {
    case age < 13:
      result = "Child";
      break;
    case age >= 13 && age <= 19:
      result = "Teen";
      break;
    case age >= 20 && age <= 64:
      result = "Adult";
      break;
    default:
      result = "Senior";
  }

  return result;
}

console.log(ageOfPerson(12)); // Output: Teen
