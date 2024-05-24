//Print heighets number
function printHighestNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
      return numbers[0];
    } else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
      return numbers[1];
    } else {
      return numbers[2];
    }
  }
}

console.log(printHighestNumber([20, 3000, 4110]));
