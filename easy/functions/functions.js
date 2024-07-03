// Get user input for a number
const userNumber = prompt("Enter a number:");

// Determine if the number is even or odd
const resultMessage = userNumber % 2 === 0 ? "even" : "odd";

// Display the result to the user
alert("The number is " + resultMessage);

// Function to find index of number 8 in an array and log the index plus 2
function findIndexOfEight(numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === 8) {
      console.log("Index of 8 plus 2:", i + 2);
      return;
    }
  }
}

// Test the function with an array of numbers
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findIndexOfEight(numbersArray);

// Function to check if a parameter is true or false
function checkIfTrue(param) {
  if (param) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checkIfTrue();

// Function to log each element of an array
function logArrayElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
logArrayElements(["alex", "petrola", "posadas"]);

// Function to get numbers higher than or equal to 16 from an array
function getHighestNumbers(numbers) {
  const filteredNumbers = numbers.filter((number) => number >= 16);
  console.log(filteredNumbers);
}
let inputNumbers = [1, 10, 12, 20, 70, 80, 3, 16, 22, 34, 8, 4, 5100];
getHighestNumbers(inputNumbers);

// Function to multiply two numbers if one is lower and one is higher
function checkAndMultiply(paramOne, paramTwo) {
  if (paramOne < paramTwo && paramTwo > paramOne) {
    console.log(paramOne * paramTwo);
  }
}

// Test the function with two numbers
let numOne = 40;
let numTwo = 90;
checkAndMultiply(numOne, numTwo);

// Function to find the largest number in an array
function printLargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  console.log("The largest number is:", largest);
}
printLargestNumber([1, 2, 3, 4]);

// Function to determine if a number is positive, negative, or zero
function determineSign(number) {
  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// Test the function with different numbers
determineSign(1); // Positive
determineSign(-1); // Negative
determineSign(0); // Zero

// Function to find and log number 100 in an array
function findAndLog100(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 100) {
      console.log(numbers[i]);
      return;
    }
  }
}

// Test the function with an array of numbers
findAndLog100([54, 21, 333, 31, 20, 100]);
