//Filter out words that start with a specific letter from an array of strings.
// function filterFirstLetter(names, letter) {
//   const result = names.filter((name) => name.startsWith(letter));
//   return result;
// }

// const output = filterFirstLetter(
//   ["jake", "daniel", "labruha", "makagago", "zargon", "durong"],
//   "m"
// );

// console.log(output);

//Filter out empty strings from an array of strings.
// function filterEmptyString(strings) {
//   const result = strings.filter((str) => str === "");
//   return result;
// }

// const output = filterEmptyString(["alex", "", "aldo"]);
// console.log(output);

//Filter out elements that are not arrays from an array of mixed types.
// function filterNotArray(arrays) {
//   const result = arrays.filter((arr) => !arr);
//   return result;
// }

// const output = filterNotArray([null, undefined, "", 1, "alexis"]);
// console.log(output);

//Filter out elements that are not numbers from an array of mixed types.

function filterNotNumber(arrays) {
  const result = arrays.filter((arr) => typeof arr === "number");
  return result;
}

const output = filterNotNumber(["alex", 0, 3, 1, "posadas"]);
console.log(output);
