// Triangle Type Identifier: Write a function that determines if three sides of a triangle can form an equilateral, isosceles, or scalene triangle.
function checkTriangleTypeIdentifier(paramOne, paramTwo, paramThree) {
  if (paramOne === paramTwo && paramOne === paramThree) {
    return "equilateral";
  } else if (paramOne === paramTwo || paramOne === paramThree) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

console.log(checkTriangleTypeIdentifier(1, 1, 1)); //equilateral
console.log(checkTriangleTypeIdentifier(1, 0, 1)); //isoceles
console.log(checkTriangleTypeIdentifier(1, 2, 3)); //scalene
