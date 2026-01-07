const mgaHayopSaPalayan = (animals) => {
  let waterAnimals = [];
  let landAnimals = [];
  animals.forEach((animal) => {
    if (animal.name === "Kalabaw") {
      return;
    }

    if (animal.name === "Kalabaw" && animal.name.length > 5) {
      waterAnimals.push(`${animal.name} is a big water animal!`);
    } else if (animal.habitat === "water") {
      waterAnimals.push(`${animal.name} is in water!`);
    } else {
      landAnimals.push(`${animal.name} is on land`);
    }
  });

  return { water: waterAnimals, land: landAnimals };
};

module.exports = mgaHayopSaPalayan;
