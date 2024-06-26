// program that takes a number and prints out the corresponding day of the week.
function checkDay(day) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}
console.log(checkDay(5)); //Friday

//A calculator program that performs basic arithmetic operations (addition, subtraction, multiplication, division) based on user input.
function performBasicArithmeticOperations(paramOne, operation, paramTwo) {
  switch (operation) {
    case "+":
      return paramOne + paramTwo;
    case "-":
      return paramOne - paramTwo;
    case "*":
      return paramOne * paramTwo;
    case "/":
      return paramOne / paramTwo;
    default:
      return "null";
  }
}

let paramOne = 20;
let operation = "/";
let paramTwo = 2;
console.log(performBasicArithmeticOperations(paramOne, operation, paramTwo));

// Age Group Classification
// Input: Age of a person
// Output: "Child" if age is less than 13, "Teen" if age is between 13 and 19, "Adult" if age is between 20 and 64, "Senior" if age is 65 or above.
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
