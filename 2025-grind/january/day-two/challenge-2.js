const evenAndOddNumbers = (numbers) => {
  const result = numbers.map((number) =>
    number % 2 === 0 ? `${number} is even` : `${number} is odd`
  );
  return result;
};

module.exports = evenAndOddNumbers;
