const productItems = (products) => {
  return products.reduce((accu, item) => accu + item.price, 0);
};

module.exports = productItems;
