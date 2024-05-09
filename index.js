// Filtering Positive Numbers:
// Input: [1, -2, 3, -4, 5]
// const filterPositiveNumbers = (numbers) => {
//   const result = numbers.filter((number) => number >= 0);
//   return result;
// };
// console.log(filterPositiveNumbers([1, -2, 3, -4, 5]));
// Output: [1, 3, 5]

// Finding the Maximum Number:
// Input: [10, 20, 5, 15]
// const findMaxNumber = (numbers) => {
//   let max = numbers[0];
//   numbers.forEach((number) => {
//     if (number > max) {
//       max = number;
//     }
//   });

//   return max;
// };

// console.log(findMaxNumber([10, 20, 4, 15]));

// Output: 20

// Counting Occurrences:
// Input: ['apple', 'banana', 'apple', 'orange', 'apple']
const countingOccurences = (param) => {
  let counter = [];
  param.forEach((item) => {
    if (counter[item]) {
      counter[item] += 1;
    } else {
      counter[item] = 1;
    }
  });
  return counter;
};

let output = countingOccurences([
  "apple",
  "banana",
  "apple",
  "orange",
  "apple",
]);

console.log(output);
// Output: { 'apple': 3, 'banana': 1, 'orange': 1 }

// Mapping Array of Numbers to their Squares:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// Checking for Existence of an Element:
// Input: [10, 20, 30, 40, 50], 40
// Output: true

// Combining Arrays:
// Input: [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

// Sorting an Array of Strings:
// Input: ['banana', 'apple', 'orange', 'grape']
// Output: ['apple', 'banana', 'grape', 'orange']

// Reducing an Array of Numbers to their Sum:
// Input: [1, 2, 3, 4, 5]
// Output: 15

// Flattening an Array of Arrays:
// Input: [[1, 2], [3, 4], [5, 6]]
// Output: [1, 2, 3, 4, 5, 6]

// Checking for Uniformity in an Array:
// Input: [1, 1, 1, 1, 1]
// Output: true
