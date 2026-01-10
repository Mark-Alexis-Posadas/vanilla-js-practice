const countByHabitat = (animals) => {
  let water = 0;
  let land = 0;
  animals.reduce((accumulator, item) => {
    if (item.habitat === "water") {
      water++;
    } else {
      land++;
    }
    return accumulator;
  }, {});

  return { water, land };
};

module.exports = countByHabitat;
