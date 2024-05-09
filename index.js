// Mapping Array of Numbers to their Squares:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// Combining Arrays:
// Input: [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

// Flattening an Array of Arrays:
// Input: [[1, 2], [3, 4], [5, 6]]
// Output: [1, 2, 3, 4, 5, 6]

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

console.log(checkUniformity([20, 20, 20]));

// Output: true
