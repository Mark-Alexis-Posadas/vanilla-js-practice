//Write a function that takes a string as input and returns the string reversed. Use a loop to iterate through the characters of the string and build the reversed string.

function reverString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

reverString("hello");
