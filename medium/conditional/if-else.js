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
