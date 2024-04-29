// Calculate the sum of all numbers in an array.
function calculateSumOfAllNumbers(numbers) {
  let sum;
  for (let i = 0; i < numbers.length; i++) {
    sum = numbers[0] + numbers[1] + numbers[2];
  }
  return sum;
}
const result = calculateSumOfAllNumbers([1, 2, 3]);
console.log(result);

// Calculate the sum of all numbers in an array.Optimize version
function calculateSumOfAllNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const result = calculateSumOfAllNumbers([1, 2, 3]);
console.log(result);

// Find the largest number in an array.
// function findLargestNumber(numbers) {
//   let sum;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = numbers[2];
//   }
//   return sum;
// }
// const result = findLargestNumber([1, 2, 3]);
// console.log(result);

// Count the number of even numbers in an array.
// Reverse the elements of an array.
// Calculate the factorial of a given number.
// Check if a given number is prime.
// Generate a multiplication table for a given number.
// Calculate the Fibonacci sequence up to a specified number of terms.
// Find the index of a specific element in an array.
// Remove duplicate elements from an array.
