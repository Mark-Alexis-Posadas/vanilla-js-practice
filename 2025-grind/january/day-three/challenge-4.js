const countByHabitat = (animals) => {
  return animals.reduce(
    (accumulator, item) => {
      if (item.habitat === "water") {
        accumulator.water++;
      } else {
        accumulator.land++;
      }
      return accumulator;
    },
    { water: 0, land: 0 }
  );
};

module.exports = countByHabitat;
