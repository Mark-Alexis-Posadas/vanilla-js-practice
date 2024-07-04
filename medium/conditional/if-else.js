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

// Temperature Classifier: Write a function that takes a temperature in Celsius and prints:
function temperatureClassifier(temp) {
  if (temp < 0) {
    return "Freezing";
  } else if (temp >= 0 && temp <= 10) {
    return "Cold";
  } else if (temp >= 11 && temp <= 25) {
    return "Warm";
  } else {
    return "Hot";
  }
}
console.log(temperatureClassifier(-10)); // freezing
console.log(temperatureClassifier(8)); // cold
console.log(temperatureClassifier(13)); // warm
console.log(temperatureClassifier(26)); // hot

// Grading System: Write a function that takes a numerical grade (0-100) and prints:

// "A" for grades 90 and above,
// "B" for grades 80-89,
// "C" for grades 70-79,
// "D" for grades 60-69,
// "F" for grades below 60.
function gradingSystem(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80 && grade <= 89) {
    return "B";
  } else if (grade >= 70 && grade <= 79) {
    return "C";
  } else if (grade >= 60 && grade <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// console.log(gradingSystem(97)); //A
// console.log(gradingSystem(87)); //B
// console.log(gradingSystem(78)); //C
// console.log(gradingSystem(69)); //D
// console.log(gradingSystem(58)); //F
