// Number in Range
// Input: A number
// Output: "In range" if the number is between 1 and 100, "Out of range" otherwise.

function numberInRage(number) {
  if (number >= 1 && number <= 100) {
    return "In range";
  } else {
    return "Out of range";
  }
}

console.log(numberInRage(1));
