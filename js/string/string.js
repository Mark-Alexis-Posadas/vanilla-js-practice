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
