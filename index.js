// Addition Function:
// Write a function that takes two numbers as parameters and returns their sum.
// function calculateSum(paramOne, paramTwo) {
//   let sum = paramOne + paramTwo;
//   return sum;
// }
// console.log(calculateSum(20, 3)); //23

// Subtraction Function:
// Write a function that takes two numbers as parameters and returns their difference.
// function calculateSum(paramOne, paramTwo) {
//   let sum = paramOne - paramTwo;
//   return sum;
// }
// console.log(calculateSum(20, 3)); //17

// Multiplication Function:
// Write a function that takes two numbers as parameters and returns their product.
// function calculateSum(paramOne, paramTwo) {
//   let sum = paramOne * paramTwo;
//   return sum;
// }
// console.log(calculateSum(20, 3)); //60

// Division Function:
// Write a function that takes two numbers as parameters and returns their quotient. Ensure to handle division by zero gracefully.
// function calculateSum(paramOne, paramTwo) {
//   let sum = paramOne / paramTwo;
//   return sum;
// }
// console.log(calculateSum(20, 3)); //6.667

// Max of Three Numbers:
// Write a function that takes three numbers as parameters and returns the largest of them.
// function maxThreeNumbers(paramOne, paramTwo, paramThree) {
//   let largest;
//   if (paramOne >= paramTwo && paramOne >= paramThree) {
//     largest = paramOne;
//   } else if (paramTwo >= paramOne && paramTwo >= paramThree) {
//     largest = paramTwo;
//   } else {
//     largest = paramThree;
//   }
//   return largest;
// }

// console.log(maxThreeNumbers(100, 133, 12));

//Finde lowest number
function findLowestNumbers(paramOne, paramTwo, paramThree) {
  let result;
  if (paramOne <= paramTwo && paramOne <= paramThree) {
    result = paramOne;
  } else if (paramTwo <= paramOne && paramTwo <= paramThree) {
    result = paramTwo;
  } else {
    result = paramThree;
  }
  return result;
}
console.log(findLowestNumbers(113, 12, 90));

// Grade Assignment:
// Write a function that takes a student's score as a parameter and returns their grade based on the following criteria:
//     Score >= 90: A
//     80 <= Score < 90: B
//     70 <= Score < 80: C
//     60 <= Score < 70: D
//     Score < 60: F

// Leap Year Checker:
// Write a function that takes a year as a parameter and returns true if it's a leap year, otherwise false. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

// Absolute Value:
// Write a function that takes a number as a parameter and returns its absolute value.

// Check Triangle Type:
// Write a function that takes three numbers (representing the lengths of the sides of a triangle) as parameters and returns:
//     "Equilateral" if all three sides are equal.
//     "Isosceles" if exactly two sides are equal.
//     "Scalene" if all sides are different lengths.
