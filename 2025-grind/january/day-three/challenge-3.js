const groupByHabitat = (animals) => {
  let water = [];
  let land = [];
  animals.reduce(
    (accumulator, item) => {
      if (item.habitat === "water") {
        accumulator.water.push(item.name);
      } else {
        accumulator.land.push(item.name);
      }
      return accumulator;
    },
    { water, land }
  );

  return { water, land };
};

module.exports = groupByHabitat;
