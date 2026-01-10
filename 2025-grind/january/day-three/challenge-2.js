const countEvenNumbers = (numbers) => {
  return numbers.reduce(
    (accumulator, item) => (item % 2 === 0 ? accumulator + 1 : accumulator),
    0
  );
};

module.exports = countEvenNumbers;
