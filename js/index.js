//Filter out strings longer than a certain length from an array of strings.

//Filter out positive numbers from an array of mixed numbers.
const filterPositiveNumbers = (numbers) => {
  const result = numbers.filter((number) => number >= 0);
  return result;
};

const output = filterPositiveNumbers([
  -1, 4, 51, -28, 93, -78, 21, -34, 56, 0, 53, 78, -90,
]);

console.log(output);

//Filter out words that start with a specific letter from an array of strings.

//Filter out objects with a certain property value from an array of objects.

//Filter out names with if names contains letter a or d
// function filterNames(names) {
//   const result = names.filter(
//     (name) => name.includes("a") || name.includes("d")
//   );
//   console.log(result);
// }

// filterNames(["mark", "jojo", "jed", "alex", "jean", "roxas"]);
