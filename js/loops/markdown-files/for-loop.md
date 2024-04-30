### Write a program to print numbers from 1 to 10 using a for loop.

**Steps**

- Initialize i variable to 1
- Check variable i if is it less than or equal to 10
- If true Increment the variable i
- log i

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### Write a loop that counts down from 10 to 1.

**Steps**

- Declreate function with name of reverseNumber
- Add function parameter to numbers
- Add 1 argument to function
- Declare for loop
- Initialize i variable to 10
- Check variable i if greater than or equal to numbers parameter
- if true decrement the i variable
- log i

```js
function reverseNumber(numbers) {
  for (let i = 10; i >= numbers; i--) {
    console.log(i);
  }
}
reverseNumber(1);
```

### Create a loop that iterates over an array of names and prints each name to the console.

```js
const arrayOfNames = ["mark", "alexis", "juan"];
for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(arrayOfNames[i]);
}
```

### Multiplication table DISPLAY

```js
const multiplicationTable = (numbers) => {
  let addSence = 1;
  for (let i = 1; i <= numbers.length; i++) {
    console.log(
      `${addSence} * ${i}  = ${i}`,
      `${addSence + 1} * ${i}  = ${i * 2}`,
      `${addSence + 2} * ${i}  = ${i * 3}`,
      `${addSence + 3} * ${i}  = ${i * 4}`,
      `${addSence + 4} * ${i}  = ${i * 5}`,
      `${addSence + 5} * ${i}  = ${i * 6}`,
      `${addSence + 6} * ${i}  = ${i * 7}`,
      `${addSence + 7} * ${i}  = ${i * 8}`,
      `${addSence + 8} * ${i}  = ${i * 9}`,
      `${addSence + 9} * ${i}  = ${i * 10}`
    );
  }
};

multiplicationTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

### Optimize way

```js
const multiplicationTable = (numbers) => {
  for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 0; j < numbers.length; j++) {
      const product = numbers[j] * i;
      row += `${numbers[j]} * ${i} = ${product} `;
    }
    console.log(row);
  }
};

multiplicationTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

## Create a loop that iterates over a string and prints each character separately.

```js
function printEachCharacter(name) {
  for (let i = 0; i < name.length; i++) console.log(name[i]);
}
printEachCharacter("MarkAlexisPosadas");
```

## Calculate the sum of all numbers in an array.

```js
function calculateSumOfAllNumbers(numbers) {
  let sum;
  for (let i = 0; i < numbers.length; i++) {
    sum = numbers[0] + numbers[1] + numbers[2];
  }
  return sum;
}
const result = calculateSumOfAllNumbers([1, 2, 3]);
console.log(result);

// Calculate the sum of all numbers in an array.Optimize version
function calculateSumOfAllNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const result = calculateSumOfAllNumbers([1, 2, 3]);
console.log(result);
```

## Remove duplicate elements from an array.

```js
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
```

## Find the index of a specific element in an array

```js
function findIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Return the index if the target element is found
    }
  }
  return -1; // Return -1 if the target element is not found in the array
}

console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2 (index of element 3 in the array)

function findIndex(paramOne, paramTwo) {
  for (let i = 0; i < paramOne.length; i++) {
    if (paramOne[i] === paramTwo) {
      return i;
    }
  }
  return false;
}

let valOne = [1, 2, 3, 4, 5, 6];
let valTwo = 2;

console.log(findIndex(valOne, valTwo));
```
