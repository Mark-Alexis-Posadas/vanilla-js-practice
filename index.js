function updateAge(age) {
  let output = [];
  for (let i = 0; i < age.length; i++) {
    if (age[i].age > 30) {
      output.push(age[i]);
    }
  }
  return output;
}

let arrayOfObjects = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];

const output = updateAge(arrayOfObjects);
console.log(output);

// Write a JavaScript function that takes in the array of objects provided earlier and returns an array of strings containing only the names of the people in the array. The output array should contain only the names, without any other information.
// const result = age.map((item) => item.name);
// return result;
