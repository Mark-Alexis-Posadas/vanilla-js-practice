// Addition Function:
// Write a function that takes two numbers as parameters and returns their sum.
function calculateSum(paramOne, paramTwo) {
  let sum = paramOne + paramTwo;
  return sum;
}
console.log(calculateSum(20, 3)); //23

// Subtraction Function:
// Write a function that takes two numbers as parameters and returns their difference.
function calculateSum(paramOne, paramTwo) {
  let sum = paramOne - paramTwo;
  return sum;
}
console.log(calculateSum(20, 3)); //17

// Multiplication Function:
// Write a function that takes two numbers as parameters and returns their product.
function calculateSum(paramOne, paramTwo) {
  let sum = paramOne * paramTwo;
  return sum;
}
console.log(calculateSum(20, 3)); //60

// Division Function:
// Write a function that takes two numbers as parameters and returns their quotient. Ensure to handle division by zero gracefully.
function calculateSum(paramOne, paramTwo) {
  let sum = paramOne / paramTwo;
  return sum;
}
console.log(calculateSum(20, 3)); //6.667

// Max of Three Numbers:
// Write a function that takes three numbers as parameters and returns the largest of them.
function maxThreeNumbers(paramOne, paramTwo, paramThree) {
  let largest;
  if (paramOne >= paramTwo && paramOne >= paramThree) {
    largest = paramOne;
  } else if (paramTwo >= paramOne && paramTwo >= paramThree) {
    largest = paramTwo;
  } else {
    largest = paramThree;
  }
  return largest;
}

console.log(maxThreeNumbers(100, 133, 12));

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

function assignmentScore(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (80 <= score && score < 90) {
    grade = "B";
  } else if (70 <= score && score < 80) {
    grade = "C";
  } else if (60 <= score && score < 70) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

console.log(assignmentScore(19));

// Check Triangle Type:
// Write a function that takes three numbers (representing the lengths of the sides of a triangle) as parameters and returns:
//     "Equilateral" if all three sides are equal.
//     "Isosceles" if exactly two sides are equal.
//     "Scalene" if all sides are different lengths.

function checkTriangleType(a, b, c) {
  return (
    (a === b && b === c && "equilateral") ||
    ((a === b || a === c || b === c) && "isosceles") ||
    "scalene"
  );
}
console.log(checkTriangleType(20, 20, 20)); // Equilateral
console.log(checkTriangleType(1, 2, 1)); //Isosceles
console.log(checkTriangleType(1, 2, 3)); //Scalene
