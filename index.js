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
