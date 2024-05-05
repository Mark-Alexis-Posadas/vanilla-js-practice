//Write a function that takes a string as input and returns the string reversed. Use a loop to iterate through the characters of the string and build the reversed string.

// function reverString(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// }

// reverString("hello");

// Create a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string. Use a loop to iterate through each character of the string and check if it's a vowel.

// function countVowels(str) {
//   for (let i = 0; i < str.length; i++) {
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
//   }
// }
// let result = countVowels("markalexisposadas");

// console.log(result);

// function sampleLoop(param) {
//   let result = [];
//   param.forEach((element) => {
//     result.push(element);
//   });
//   return result;
// }

// console.log(sampleLoop([1, 2, 3, 4, 5]));

// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Use a loop to compare characters from the beginning and end of the string.
// function palindromCheck(str) {
//   const len = str.length;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return "Not Palindrome";
//     }
//   }
//   return "Palindrome";
// }

// let result = palindromCheck("lol");
// console.log(result);

// Count Words:
// Create a function that takes a string as input and returns the count of words in the string. Use a loop to iterate through each character and count the number of spaces to determine word boundaries.

// function countWords(str) {
//   let wordCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     wordCount += str[i].includes(" ");
//   }
//   return wordCount;
// }

// let result = countWords("mark alexis petrola posadas  pogi");

// console.log(result);

// Remove Duplicates:
// Write a function that removes duplicate characters from a string. Use a loop to iterate through each character of the string and keep track of characters already encountered.

// Title Case Conversion:
// Implement a function that converts the first character of each word in a string to uppercase and the rest to lowercase. Use a loop to iterate through each word in the string.

function titleCaseConversion(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Iterate through each word
  for (let i = 0; i < words.length; i++) {
    // Convert the first character to uppercase and the rest to lowercase
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  // Join the array back into a string
  return words.join(" ");
}

let result = titleCaseConversion("mark aLeXis posadas");

console.log(result); // Output: "Mark Alexis Posadas"
