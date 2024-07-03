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

console.log(findMaxNumber([10, 20, 4, 15]));

//Optimize version
const findMaxNumberOptimizeVersion = (numbers) => {
  let max = numbers[0];
  numbers.forEach((number) => (max < number ? (max = number) : max));
  return max;
};

console.log(findMaxNumberOptimizeVersion([10, 20, 4, 15]));

// Output: 20

// Counting Occurrences:
// Input: ['apple', 'banana', 'apple', 'orange', 'apple']
const countingOccurences = (param) => {
  let counter = {};
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

// Checking for Existence of an Element:
// Input: [10, 20, 30, 40, 50], 40
const checkExistenceElement = (paramOne, paramTwo) => {
  for (let i = 0; i < paramOne.length; i++) {
    if (paramOne[i] === paramTwo) {
      return true;
    }
  }
  return false;
};

console.log(checkExistenceElement([10, 20, 30, 40, 50], 20));
// Output: true

// Checking for Uniformity in an Array:
// Input: [1, 1, 1, 1, 1]

const checkUniformity = (param) => {
  let first = param[0];
  let ans = true;

  param.forEach((item) => {
    if (first !== item) {
      ans = false;
    }
  });

  return ans;
};

console.log(checkUniformity([1, 1, 1]));
// Output: true

// Mapping Array of Numbers to their Squares:
// Input: [1, 2, 3, 4, 5]
const arrayofNumbersSquares = (nums) => {
  return nums.map((num) => Math.pow(num, 2));
};
console.log(arrayofNumbersSquares([1, 2, 3, 4, 5]));

// Output: [1, 4, 9, 16, 25]

// Combining Arrays:
// Input: [1, 2, 3], [4, 5, 6]

const combiningArrays = (arrOne, arrTwo) => {
  return [...arrOne, ...arrTwo];
};

console.log(combiningArrays([1, 2, 3], [4, 5, 6]));

// Output: [1, 2, 3, 4, 5, 6]

// Flattening an Array of Arrays:
// Input: [[1, 2], [3, 4], [5, 6]]
const FlatteningAnArrayOfArrays = (arr) => {
  return arr.flat(1);
};
console.log(
  FlatteningAnArrayOfArrays([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// Output: [1, 2, 3, 4, 5, 6]

// Finding Unique Elements:
// Input: [1, 2, 3, 4, 2, 1, 5]
const findingUniqueElements = (elements) => {
  let results = elements.filter((v, i, self) => {
    return i === self.indexOf(v);
  });
  return results;
};

console.log(findingUniqueElements([1, 2, 3, 4, 2, 1, 5]));

// Output: [1, 2, 3, 4, 5]

// Checking for Palindromes:
// Input: ['radar', 'hello', 'level', 'world']
const palindromesChecking = (params) => {
  let results = [];
  for (let param of params) {
    const len = param.length;
    let isPalindrome = true;
    for (let i = 0; i < len / 2; i++) {
      if (param[i] !== param[len - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) {
      results.push(param);
    }
  }
  return results;
};

console.log(palindromesChecking(["radar", "hello", "level", "world"]));

//find heighest number
function printHeighestNumber(numbers) {
  let result;
  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[0] > numbers[1] &&
      numbers[0] > numbers[2] &&
      numbers[0] > numbers[3]
    ) {
      result = numbers[0];
    } else if (
      numbers[1] > numbers[0] &&
      numbers[1] > numbers[2] &&
      numbers[1] > numbers[3]
    ) {
      result = numbers[1];
    } else if (
      numbers[2] > numbers[0] &&
      numbers[2] > numbers[1] &&
      numbers[2] > numbers[3]
    ) {
      result = numbers[2];
    } else {
      result = numbers[3];
    }
  }
  return result;
}

let numbers = [200, 1500, 1821, 1434];
console.log(printHeighestNumber(numbers));
