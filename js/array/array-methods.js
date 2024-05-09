// Filtering Positive Numbers:
// Input: [1, -2, 3, -4, 5]
const filterPositiveNumbers = (numbers) => {
  const result = numbers.filter((number) => number >= 0);
  return result;
};
console.log(filterPositiveNumbers([1, -2, 3, -4, 5]));
// Output: [1, 3, 5]

// Finding the Maximum Number:
// Input: [10, 20, 5, 15]
const findMaxNumber = (numbers) => {
  let max = numbers[0];
  numbers.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });

  return max;
};

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
console.log(
  countingOccurences(["apple", "banana", "apple", "orange", "apple"])
);

// Output: { 'apple': 3, 'banana': 1, 'orange': 1 }
