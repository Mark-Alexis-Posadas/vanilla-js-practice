//Filter out strings longer than a certain length from an array of strings.
function filterLongestString(names) {
  const result = names.filter((name) => name.length >= 5);
  return result;
}

const output = filterLongestString(["jake", "juan", "jane", "rodolfo"]);
console.log(output); //rodolfo

//Filter out words that start with a specific letter from an array of strings.
