const finalBossChallenge = (param) => {
  const result = param
    .filter((product) => product.price >= 50)
    .reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category] += item.price;
      return acc;
    }, {});

  return result;
};

module.exports = finalBossChallenge;
