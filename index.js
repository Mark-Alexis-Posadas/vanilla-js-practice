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
