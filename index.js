//Filter out elements that are not arrays from an array of mixed types.
// function filterNotArray(arrays) {
//   const result = arrays.filter((arr) => !arr);
//   return result;
// }

// let mixedOfArrays = [
//   "John",
//   25,
//   "",
//   true,
//   { city: "New York", country: "USA" },
//   null,
//   undefined,
// ];
// const output = filterNotArray(mixedOfArrays);
// console.log(output);

//Filter out elements that are not numbers from an array of mixed types.
//Filter out elements that are not numbers from an array of mixed types.

function filterNotNumber(arrays) {
  const result = arrays.filter((arr) => typeof arr !== "number");
  return result;
}

let mixedOfArrays = [
  "John",
  25,
  "",
  true,
  { city: "New York", country: "USA" },
  null,
  undefined,
];
const output = filterNotNumber(mixedOfArrays);
console.log(output);
