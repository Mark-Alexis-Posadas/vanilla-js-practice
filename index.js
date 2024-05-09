// Mapping Array of Numbers to their Squares:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

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

// Combining Arrays:
// Input: [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

// Flattening an Array of Arrays:
// Input: [[1, 2], [3, 4], [5, 6]]
// Output: [1, 2, 3, 4, 5, 6]

// Checking for Uniformity in an Array:
// Input: [1, 1, 1, 1, 1]
// Output: true
