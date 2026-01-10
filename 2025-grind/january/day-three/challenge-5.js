const totalPricePerCategory = (price) => {
  const totalPriceCategory = price.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }

    acc[item.category] += item.price;
    return acc;
  }, {});

  return totalPriceCategory;
};

module.exports = totalPricePerCategory;
