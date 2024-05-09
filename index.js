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
