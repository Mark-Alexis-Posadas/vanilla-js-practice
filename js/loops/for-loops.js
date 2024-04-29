//Write a program to print numbers from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//Create a loop that prints even numbers from 0 to 20.

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

//Write a loop that counts down from 10 to 1.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

//Create a loop that iterates over an array of names and prints each name to the console.

// const arrayOfNames = ["mark", "alexis", "juan"];
// for (let i = 0; i < arrayOfNames.length; i++) {
//   console.log(arrayOfNames[i]);
// }

//Multiplication table DISPLAY
// const multiplicationTable = (numbers) => {
//   let addSence = 1;
//   for (let i = 1; i <= numbers.length; i++) {
//     console.log(
//       `${addSence} * ${i}  = ${i}`,
//       `${addSence + 1} * ${i}  = ${i * 2}`,
//       `${addSence + 2} * ${i}  = ${i * 3}`,
//       `${addSence + 3} * ${i}  = ${i * 4}`,
//       `${addSence + 4} * ${i}  = ${i * 5}`,
//       `${addSence + 5} * ${i}  = ${i * 6}`,
//       `${addSence + 6} * ${i}  = ${i * 7}`,
//       `${addSence + 7} * ${i}  = ${i * 8}`,
//       `${addSence + 8} * ${i}  = ${i * 9}`,
//       `${addSence + 9} * ${i}  = ${i * 10}`
//     );
//   }
// };

// multiplicationTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//optimize way

// const multiplicationTable = (numbers) => {
//   for (let i = 1; i <= 10; i++) {
//     let row = "";
//     for (let j = 0; j < numbers.length; j++) {
//       const product = numbers[j] * i;
//       row += `${numbers[j]} * ${i} = ${product} `;
//     }
//     console.log(row);
//   }
// };

// multiplicationTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Create a loop that iterates over a string and prints each character separately.
// function printEachCharacter(name) {
//   for (let i = 0; i < name.length; i++) console.log(name[i]);
// }
// printEachCharacter("MarkAlexisPosadas");

// Find the largest number in an array.
// function findLargestNumber(numbers) {
//   let result;
//   for (let i = 0; i < numbers.length; i++) {
//     result = numbers[i];
//   }
//   return result;
// }
// const output = findLargestNumber([1, 2, 3]);
// console.log(output);

// function findLargestNumber(numbers) {
//   let result;
//   for (let i = 0; i < numbers.length; i++) {
//     result = numbers[2];
//   }
//   return result;
// }
// const output = findLargestNumber([1, 2, 3]);
// console.log(output);

// function findLargestNumber(numbers) {
//   let result = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > result) {
//       result = numbers[i];
//     }
//   }
//   return result;
// }
// const output = findLargestNumber([1, 2, 3]);
// console.log(output);
