// Concatenation:
// Output: "Hello" + " " + "world!" should give "Hello world!"

function concatenation() {
  return "Hello" + " " + "world!";
}
console.log(concatenation());

// Length:
// Output: "Hello".length should give 5
function stringLength(param) {
  return param.length;
}
console.log(stringLength("Hello"));

// Substring:
// Output: "Hello".substring(0, 3) should give "Hel"
function stringSubstring(param) {
  return param.substring(0, 3);
}
console.log(stringSubstring("Hello"));

// Uppercase:
// Output: "hello".toUpperCase() should give "HELLO"

function stringUppercase(param) {
  return param.toUpperCase();
}
console.log(stringUppercase("Hello"));

// Lowercase:
// Output: "HELLO".toLowerCase() should give "hello"
function stringLowercase(param) {
  return param.toLowerCase();
}
console.log(stringLowercase("Hello"));

// Trim:
// Output: " Hello ".trim() should give "Hello"
function stringTrim(param) {
  return param.trim();
}
console.log(stringTrim(" Hello "));

// Index of substring:
// Output: "Hello world".indexOf("world") should give 6
function stringSubstring(param) {
  return param.indexOf("world");
}
console.log(stringSubstring("Hello world"));

// Replace substring:
// Output: "Hello world".replace("world", "Universe") should give "Hello Universe"
function stringReplace(param) {
  return param.replace("world", "Universe");
}
console.log(stringReplace("Hello world"));

// Split string:
// Output: "Hello,World".split(",") should give ["Hello", "World"]
function stringSplit(param) {
  return param.split(",");
}
console.log(stringSplit("Hello world"));

// Character at index:
// Output: "Hello".charAt(1) should give "e"

function stringCharacterIndex(param) {
  return param.charAt(1);
}
console.log(stringCharacterIndex("Hello world"));

//Write a function that takes a string as input and returns the string reversed. Use a loop to iterate through the characters of the string and build the reversed string.

function reverString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

reverString("hello");

// Create a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string. Use a loop to iterate through each character of the string and check if it's a vowel.

function countVowels(str) {
  for (let i = 0; i < str.length; i++) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
  }
}
let result = countVowels("markalexisposadas");

console.log(result);

function sampleLoop(param) {
  let result = [];
  param.forEach((element) => {
    result.push(element);
  });
  return result;
}

console.log(sampleLoop([1, 2, 3, 4, 5]));

// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Use a loop to compare characters from the beginning and end of the string.
function palindromCheck(str) {
  const len = str.length;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return "Not Palindrome";
    }
  }
  return "Palindrome";
}

let result = palindromCheck("lol");
console.log(result);

// Count Words:
// Create a function that takes a string as input and returns the count of words in the string. Use a loop to iterate through each character and count the number of spaces to determine word boundaries.

function countWords(str) {
  let wordCount = 0;
  for (let i = 0; i < str.length; i++) {
    wordCount += str[i].includes(" ");
  }
  return wordCount;
}

let result = countWords("mark alexis petrola posadas  pogi");

console.log(result);

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
