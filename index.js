//Write a function that takes a string as input and returns the string reversed. Use a loop to iterate through the characters of the string and build the reversed string.

// function reverString(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// }

// reverString("hello");

// Create a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string. Use a loop to iterate through each character of the string and check if it's a vowel.

function countVowels(str) {
  for (let i = 0; i < str.length; i++) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
  }
}
let result = countVowels("markalexisposadas");

console.log(result);
