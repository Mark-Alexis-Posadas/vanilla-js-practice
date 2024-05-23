// Age Group Classification
// Input: Age of a person
// Output: "Child" if age is less than 13, "Teen" if age is between 13 and 19, "Adult" if age is between 20 and 64, "Senior" if age is 65 or above.

function ageOfPerson(age) {
  let result;
  if (age < 13) {
    result = "Child";
  } else if (age >= 13 && age <= 19) {
    result = "Teen";
  } else if (age >= 20 && age <= 64) {
    result = "Adult";
  } else {
    result = "Senior";
  }

  return result;
}

console.log(ageOfPerson(75));
