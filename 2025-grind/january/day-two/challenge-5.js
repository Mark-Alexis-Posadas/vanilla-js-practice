const productsChallenge = (products) => {
  const filteredProducts = products.filter((product) => product.price >= 1000);
  const mappedProducts = filteredProducts.map(
    (item) => `Price: ${item.name} - ${item.price}`
  );
  return mappedProducts;
};

module.exports = productsChallenge;
