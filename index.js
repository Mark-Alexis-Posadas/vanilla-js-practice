//Remove duplicate elements from an array.
function removeDuplicateArray(array) {
  let unique = [];
  for (let index = 0; index < array.length; index++) {
    if (!unique.includes(array[index])) {
      unique.push(array[index]);
    }
  }
  return unique;
}

console.log(removeDuplicateArray([1, 2, 3, 4, 2, 3, 5, 6]));
