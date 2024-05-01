function reverseElements(elements) {
  const result = [];
  for (let i = elements.length - 1; i >= 0; i--) {
    const valIndex = elements[i];
    result.push(valIndex);
  }
  return result;
}
console.log(reverseElements([1, 2, 3, 4, 5]));
