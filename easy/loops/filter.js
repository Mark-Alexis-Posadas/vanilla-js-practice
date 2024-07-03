//Filter out even numbers from an array.
const filterEvenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 == 0);
};

let numbersEvenData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log(filterEvenNumbers(numbersEvenData)); //2,4,6,8,10,12,14,16,18,20

//Filter out odd numbers from an array.
const filterOddNumbers = (numbers) => {
  return numbers.filter((number) => number % 2);
};

let numbersOddData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const result = console.log(filterOddNumbers(numbersOddData));

//Filter out numbers greater than a specific value from an array of numbers.
const filterNumbersGreaterThan = (numbers, threshold) => {
  return numbers.filter((number) => number > threshold);
};

let greaterThanNumberData = [1, 4, 51, 28, 93, 78, 21, 34, 56, 53, 78, 90];
let thresholdValue = 3;

console.log(filterNumbersGreaterThan(greaterThanNumberData, thresholdValue));

//Filter out negative numbers from an array of mixed numbers.
const filterNegativeNumbers = (numbers) => {
  return numbers.filter((number) => number < 0);
};
let data = [-1, 4, 51, -28, 93, -78, 21, -34, 56, 53, 78, -90];
console.log(filterNegativeNumbers(data));

//Filter out positive numbers from an array of mixed numbers.
const filterPositiveNumbers = (numbers) => {
  const result = numbers.filter((number) => number >= 0);
  return result;
};

console.log(
  filterPositiveNumbers([-1, 4, 51, -28, 93, -78, 21, -34, 56, 0, 53, 78, -90])
);

//Filter out names with if names contains letter a or d
function filterNames(names) {
  const result = names.filter(
    (name) => name.includes("a") || name.includes("d")
  );
  return result;
}

console.log(filterNames(["mark", "jojo", "jed", "alex", "jean", "roxas"]));

//Filter out objects with a certain property value from an array of objects.

function getOlderPersons(persons) {
  const result = persons.filter((person) => person.age >= 25);
  return result;
}

const persons = [
  { name: "Juan", age: 25 },
  { name: "Maria", age: 17 },
  { name: "Pedro", age: 30 },
  { name: "Luis", age: 16 },
];

console.log(getOlderPersons(persons));
//Filter out strings longer than a certain length from an array of strings.
function filterLongestString(names) {
  const result = names.filter((name) => name.length >= 5);
  return result;
}

console.log(filterLongestString(["jake", "juan", "jane", "rodolfo"])); //rodolfo
