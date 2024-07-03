function printHeighestNumber(param) {
  let result;
  for (let i = 0; i < param.length; i++) {
    if (param[0] > param[1] && param[0] > param[2] && param[0] > param[3]) {
      result += param[i];
    } else if (
      param[1] > param[0] &&
      param[1] > param[2] &&
      param[1] > param[3]
    ) {
      result += param[i];
    } else if (
      param[2] > param[0] &&
      param[2] > param[1] &&
      param[2] > param[3]
    ) {
      result += param[i];
    } else {
      result += param[i];
    }
  }
  return result;
}

let numbers = [200, 300, 250, 434];
console.log(printHeighestNumber(numbers));
