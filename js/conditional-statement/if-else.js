const enterScore = prompt("Enter a score:");
const age = prompt("Enter a score:");

//Grading System: Create a program that takes a student's score as input and prints out their grade. If the score is above 90, print "A"; between 80 and 90, print "B"; between 70 and 80, print "C"; between 60 and 70, print "D"; otherwise, print "F".

if (enterScore >= 90) {
  console.log("A");
} else if (enterScore >= 80) {
  console.log("B");
} else if (enterScore >= 70) {
  console.log("C");
} else if (enterScore >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//Ticket Price Calculator: Create a program that calculates the price of a movie ticket based on age. If the age is below 12, the ticket price is $5; if it's between 12 and 17, the price is $8; if it's between 18 and 64, the price is $12; and if it's 65 or above, the price is $6.

if (age < 12) {
  console.log("The price is $5");
} else if (age >= 12 && age <= 17) {
  console.log("The price is $8");
} else if (age >= 18 && age <= 64) {
  console.log("The price is $12");
} else {
  console.log("The price is $6");
}

// Exercise 10: Discount Calculation
// Input: Purchase amount

function discountCalculation(price) {
  if (price >= 1000) {
    return price - price * 0.1;
  }
  return price;
}

console.log(discountCalculation(1100));
// Output: Final amount to be paid after applying a 10% discount if the purchase amount is above $1000, otherwise, the output will be the same as the input amount.

// Exercise 8: Positive, Negative, or Zero
// Input: A number

function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(20));
// Output: "Positive" if the number is greater than 0, "Negative" if less than 0, "Zero" if equal to 0.

//Exercise 5: Username Validation
//Input: Username string
function usernameValidation(name, specialCharacter) {
  if (name.length <= 6 && name === specialCharacter) {
    return "Valid";
  }
  return "Invalid";
}
const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
console.log(usernameValidation("jakejc", specialChar));
//Output: "Valid" if the username contains at least 6 characters and doesn't contain any special characters, "Invalid" otherwise.

// Exercise 10: Discount Calculation
// Input: Purchase amount

function discountCalculation(price) {
  if (price >= 1000) {
    return price - price * 0.1;
  }
  return price;
}

console.log(discountCalculation(1100));
// Output: Final amount to be paid after applying a 10% discount if the purchase amount is above $1000, otherwise, the output will be the same as the input amount.

// Exercise 8: Positive, Negative, or Zero
// Input: A number

function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(20));
// Output: "Positive" if the number is greater than 0, "Negative" if less than 0, "Zero" if equal to 0.
