//Exercise 5: Username Validation
//Input: Username string
//Output: "Valid" if the username contains at least 6 characters and doesn't contain any special characters, "Invalid" otherwise.

// function usernameValidation(name, specialCharacter) {
//   if (name.length <= 6 && name === specialCharacter) {
//     return "Valid";
//   }
//   return "Invalid";
// }
// const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
// console.log(usernameValidation("jakejc", specialChar));

// Exercise 10: Discount Calculation
// Input: Purchase amount
// Output: Final amount to be paid after applying a 10% discount if the purchase amount is above $1000, otherwise, the output will be the same as the input amount.

// function discountCalculation(price) {
//   if (price >= 1000) {
//     return price - price * 0.1;
//   }
//   return price;
// }

// console.log(discountCalculation(1100));

// Exercise 8: Positive, Negative, or Zero
// Input: A number
// Output: "Positive" if the number is greater than 0, "Negative" if less than 0, "Zero" if equal to 0.

// function checkNumber(number) {
//   if (number > 0) {
//     return "Positive";
//   } else if (number < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }

// console.log(checkNumber(20));

// Concatenation:
// Output: "Hello" + " " + "world!" should give "Hello world!"

// function concatenation() {
//   return "Hello" + " " + "world!";
// }
// console.log(concatenation());

// Length:
// Output: "Hello".length should give 5
// function concatenation(param) {
//   return param.length;
// }
// console.log(concatenation("Hello"));

// Substring:
// Output: "Hello".substring(0, 3) should give "Hel"
// function concatenation(param) {
//   return param.substring(0, 3);
// }
// console.log(concatenation("Hello"));

// Uppercase:
// Output: "hello".toUpperCase() should give "HELLO"

// function concatenation(param) {
//   return param.toUpperCase();
// }
// console.log(concatenation("Hello"));

// Lowercase:
// Output: "HELLO".toLowerCase() should give "hello"
// function concatenation(param) {
//   return param.toLowerCase();
// }
// console.log(concatenation("Hello"));

// Trim:
// Output: " Hello ".trim() should give "Hello"
// function concatenation(param) {
//   return param.trim();
// }
// console.log(concatenation(" Hello "));

// Index of substring:
// Output: "Hello world".indexOf("world") should give 6
function concatenation(param) {
  return param.indexOf("world");
}
console.log(concatenation("Hello world"));

// Replace substring:
// Output: "Hello world".replace("world", "Universe") should give "Hello Universe"

// Split string:
// Output: "Hello,World".split(",") should give ["Hello", "World"]

// Character at index:
// Output: "Hello".charAt(1) should give "e"
