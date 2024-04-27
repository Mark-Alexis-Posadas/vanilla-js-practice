const number = prompt("Enter a number:");

const result = number % 2 == 0 ? "even" : "odd";

alert("the number is" + result);

function test(params) {
  for (i = 0; i < params.length; i++) {
    if (params[i] == 8) {
      console.log(i + 2);
      return;
    }
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test(numbers);

function test(params) {
  if (params) {
    console.log("true");
    return;
  }
  console.log(false);
}
test();

function test(params) {
  for (let i = 0; i < params.length; i++) {
    console.log(params[i]);
  }
}
test(["alex", "petrola", "posadas"]);

function getHighestNUMBERS(numbers) {
  const filterHighestNumbers = numbers.filter((number) => number >= 16);
  console.log(filterHighestNumbers);
}
let inputNumbers = [1, 10, 12, 20, 70, 80, 3, 16, 22, 34, 8, 4, 5100];
getHighestNUMBERS(inputNumbers);

//check numbers if both lowest or highest
function checkStatus(paramOne, paramTwo) {
  if (paramOne < paramTwo && paramTwo > paramOne) {
    console.log(paramOne * paramTwo);
  }
}

let numOne = 40;
let numTwo = 90;

checkStatus(numOne, numTwo);

//Maximum of Three Numbers: Create a program that takes three numbers as input and prints the largest one.
function printLargestNumber(numbers) {
  let largest = numbers[0];
  console.log(largest);
  for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  console.log("The largest number is:", largest);
}
printLargestNumber([1, 2, 3, 4]);

//  Positive, Negative, or Zero: Write a program that reads an integer from the user and prints whether it's positive, negative, or zero.

function readsInteger(number) {
  if (number > 0) {
    console.log("POSITIVE");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

readsInteger(1); //positive
readsInteger(-1); //Negative
readsInteger(0); //Zero
