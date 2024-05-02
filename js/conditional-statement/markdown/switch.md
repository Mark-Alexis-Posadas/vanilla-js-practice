### program that takes a number and prints out the corresponding day of the week.

```js
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
```

## A calculator program that performs basic arithmetic operations (addition, subtraction, multiplication, division) based on user input.

```js
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
```
