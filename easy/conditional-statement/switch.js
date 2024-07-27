// program that takes a number and prints out the corresponding day of the week.
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

// Age Group Classification
// Input: Age of a person
// Output: "Child" if age is less than 13, "Teen" if age is between 13 and 19, "Adult" if age is between 20 and 64, "Senior" if age is 65 or above.
function ageOfPerson(age) {
  let result;

  switch (true) {
    case age < 13:
      result = "Child";
      break;
    case age >= 13 && age <= 19:
      result = "Teen";
      break;
    case age >= 20 && age <= 64:
      result = "Adult";
      break;
    default:
      result = "Senior";
  }

  return result;
}

console.log(ageOfPerson(12)); // Output: Teen

// Traffic Light System: Implement a function trafficLightAction that takes a string representing a traffic light color ("red", "yellow", "green") and uses a switch statement to return the appropriate action. For example:

// "red" should return "Stop",
// "yellow" should return "Slow down",
// "green" should return "Go".

function trafficLightSystem(action) {
  switch (action.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow down";
    case "green":
      return "Go";
    default:
      return "Just wait!";
  }
}

console.log(trafficLightSystem("Red")); // Output: "Stop"
console.log(trafficLightSystem("Yellow")); // Output: "Slow down"
console.log(trafficLightSystem("Green")); // Output: "Go"
console.log(trafficLightSystem("Blue")); // Output: "Just wait!"

// Weather Advice: Write a function weatherAdvice that takes a string representing a weather condition ("sunny", "rainy", "snowy", "windy") and uses a switch statement to return advice. For instance:

// "sunny" should return "Wear sunglasses",
// "rainy" should return "Take an umbrella",
// "snowy" should return "Wear warm clothes",
// "windy" should return "Hold onto your hat".

function weatherAdvice(action) {
  switch (action.toLowerCase()) {
    case "sunny":
      return "Wear sunglasses";
    case "rainy":
      return "Take an umbrella";
    case "snowy":
      return "Wear warm clothes";
    case "windy":
      return "Hold onto your hat";
    default:
      return "Just wait for the advice!";
  }
}

console.log(weatherAdvice("Sunny")); // Output: "Wear sunglasses"
console.log(weatherAdvice("Rainy")); // Output: "Take an umbrella"
console.log(weatherAdvice("Snowy")); // Output: "Wear warm clothes"
console.log(weatherAdvice("Windy")); // Output: "Hold onto your hat"
console.log(weatherAdvice("Cloudy")); // Output: "Just wait for the advice!"
