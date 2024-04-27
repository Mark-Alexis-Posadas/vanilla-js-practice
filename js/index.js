function calculateAndCompare(numbers) {
  for (i = 0; i < numbers.length; i++) {
    //retun the rest of the numbers except the 31 number
    if (numbers[i] === 100) {
      console.log(numbers[i]);
      return;
    }
  }
}

calculateAndCompare([54, 21, 333, 31, 20, 100]);
