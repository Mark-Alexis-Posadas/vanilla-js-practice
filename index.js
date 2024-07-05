// Leap Year Checker: Write a function that checks if a given year is a leap year (consider the rules: divisible by 4, but not divisible by 100 unless also divisible by 400).

// Ticket Price Calculator: Write a function that calculates the price of a movie ticket based on age and time of day:
// Children (age < 12): $5
// Adults (age 12-64): $10
// Seniors (age ≥ 65): $7
// Apply a $2 discount for matinee shows (before 5 PM).

function calculateTicketPrice(age, showTime) {
  let ticketPrice;

  if (age < 12) {
    ticketPrice = 5;
  } else if (age >= 12 && age <= 64) {
    ticketPrice = 10;
  } else {
    ticketPrice = 7;
  }

  if (showTime < 17) {
    ticketPrice -= 2;
  }

  return ticketPrice;
}

let showTime = 15;
console.log(calculateTicketPrice(13, showTime)); // Output: 8

// Number Range Checker: Write a function that checks if a number is:

// Between 100 and 200 (inclusive), OR
// Between 500 and 600 (inclusive).
// Vowel Checker: Write a function that checks if a given character is a vowel (consider both lowercase and uppercase).

// Day of the Week: Write a function that takes a number (1-7) representing a day of the week and prints its name ("Monday", "Tuesday", etc.). If the number is out of range, print "Invalid day".
