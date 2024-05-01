### Write a program to print numbers from 1 to 10 using a for loop.

**Steps**

- Write for loop body
- Initialize i variable to 1 in for loop
- Check if the variable i is less than or equal to 10.
- If true Increment the variable i
- log i
- The output is 1,2,3,4,5,6,7,8,9,10

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### Write a loop that counts down from 10 to 1.

**Steps**

- Write function body with name of reverseNumber
- Add a parameter in function
- Add 1 data to function argument
- Write for loop body
- Initialize variable i to 10
- Check if the variable i is greater than or equal to numbers paramenter
- if true decrement the i variable
- log i
- The output is 10,9,8,7,6,5,4,3,2,1

```js
function reverseNumber(numbers) {
  for (let i = 10; i >= numbers; i--) {
    console.log(i);
  }
}
reverseNumber(1);
```

### Create a loop that iterates over an array of names and prints each name to the console.

**Steps**

- Declare an array variable named arrayOfNames.
- Write a for loop
- Initialize variable i to 0;
- Check if i is less than the length of arrayOfNames.
- If true, execute the loop body.
- Log each name to the console.
- The output is mark,alexis,juan

```js
const arrayOfNames = ["mark", "alexis", "juan"];
for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(arrayOfNames[i]);
}
```

### Multiplication table DISPLAY

**Steps**

- Write function body
- Add numbers parameter to function
- Add array of number 1 to 10 in numbers parameter or argument
- Initialize variable addSence to 1
- Write a for loop
- Initialize variable i to 1
- Check i is less than or equal to numbers length
- If true, execute the loop body

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

**Steps**

- Write function body
- Add numbers parameter to function
- Add array of number 1 to 10 in numbers parameter or argument
- Write a for loop
- Initialize variable i to 1
- Check variable i is less than or equal to 10
- If true increment the variable i
- Initialize variable row to empty string
- Write another loop
- Initialize variable j to 0
- Check variable j if less than to numbers length
- If true increment j variable
- Initialize product varialbe
- Add produt value to numbers[j] and multiply to variable i
- Assign variable row to numbers[j] and multiple to variable i and result is product

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

**Steps**

- Write function body with name of findeIndex
- Add a two parameter in function
- Add array of number 1 to 10 of first parameter and add 3 number of second parameter
- Write for loop body
- Initialize variable i to 0
- Check if the variable i is less than to array length
- if true compare the array of i to second parameter
- if true return i
- if not return -1
- Te output shoud be 2 because the index of 3 is 2

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

### Generate a multiplication table for a given number.

```js
function generateMultiplicationTable(param) {
  for (let i = 1; i <= 10; i++) {
    let result = param * i;
    console.log(`${param} x ${i} = ${result}`);
  }
}

generateMultiplicationTable(2);
let input = prompt("Enter number");

for (let i = 1; i <= 10; i++) {
  let result = input * i;
  console.log(`${input} x ${i} = ${result}`);
}
```

## Reverse the elements of an array.

**Steps**

- Write function body with name of reverseElement
- Add a parameter in function
- Add array of number 1 to 5
- Write for loop body
- Initialize variable i to elements parameter length and remove the last item
- Check if the variable i is greather than or equal to 0
- if true decrement the variables i and execute the loop
- declare valIndex variable and the value is the elements i
- push the variable valIndex
- return result
- The output shoud be 5,4,3,2,1

```js
function reverseElements(elements) {
  const result = [];
  for (let i = elements.length - 1; i >= 0; i--) {
    const valIndex = elements[i];
    result.push(valIndex);
  }
  return result;
}
console.log(reverseElements([1, 2, 3, 4, 5]));
```

## Count the number of even numbers in an array.

```js
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
```
