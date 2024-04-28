## Filter out even numbers from an array.

```js
const filterEvenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 == 0);
};

let data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const result = filterEvenNumbers(data);
console.log(result); //2,4,6,8,10,12,14,16,18,20
```

## Filter out odd numbers from an array.

```js
const filterOddNumbers = (numbers) => {
  return numbers.filter((number) => number % 2);
};

let data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const result = filterOddNumbers(data);
console.log(result);
```

## Filter out numbers greater than a specific value from an array of numbers.

```js
const filterNumbersGreaterThan = (numbers, threshold) => {
  return numbers.filter((number) => number > threshold);
};

let data = [1, 4, 51, 28, 93, 78, 21, 34, 56, 53, 78, 90];
let thresholdValue = 3;

const result = filterNumbersGreaterThan(data, thresholdValue);
console.log(result);
```
